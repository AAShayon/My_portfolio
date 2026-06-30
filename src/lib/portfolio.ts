/**
 * Build-time portfolio auto-discovery.
 *
 * Reads `public/portfolio/` with node:fs during `next build` and turns each
 * subdirectory into a typed Project. Because this runs at build time, the
 * discovered list is baked into the static export (`output: 'export'`) and works
 * on GitHub Pages with no runtime server.
 *
 * IMPORTANT: import this ONLY from Server Components (or build-time code). It
 * touches the filesystem and must never run in the browser. Pass the plain data
 * it returns as props into client components.
 *
 * Every read is defensive: a missing/empty folder, malformed meta.json, or an
 * unreadable image degrades gracefully and never throws during the build.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { imageSize } from "image-size";

export type ProjectType = "web" | "mobile" | "both";

export type DiscoveredImage = {
  src: string;
  width: number;
  height: number;
};

export type WebAsset =
  | {
      kind: "video";
      sources: { src: string; type: string }[];
      poster: string | null;
      aspect: string;
    }
  | {
      kind: "screenshot";
      image: DiscoveredImage;
    }
  | null;

export type MobileAsset = {
  /** "strip" = swipeable screenshots; "full" = one tall auto-scroll screen. */
  kind: "strip" | "full";
  images: DiscoveredImage[];
} | null;

export type Challenge = {
  title: string;
  problem: string;
  solution: string;
};

export type Project = {
  slug: string;
  /** Actual on-disk folder name incl. the NN- ordering prefix. */
  folder: string;
  title: string;
  role: string | null;
  tags: string[];
  url: string | null;
  playStore: string | null;
  appStore: string | null;
  year: string | null;
  summary: string | null;
  challenges: Challenge[];
  type: ProjectType;
  featured: boolean;
  web: WebAsset;
  mobile: MobileAsset;
};

type ProjectMeta = {
  title?: string;
  role?: string;
  tags?: string[];
  url?: string;
  playStore?: string;
  appStore?: string;
  year?: string;
  type?: ProjectType;
  summary?: string;
  challenges?: Challenge[];
  featured?: boolean;
  /** Optional video aspect override, e.g. "16/9". */
  aspect?: string;
};

const PORTFOLIO_DIR = join(process.cwd(), "public", "portfolio");
const PUBLIC_BASE = "/portfolio";

const IMAGE_EXTS = ["png", "jpg", "jpeg", "webp"];

/** Title-case a slug as a sensible default: "my-project" → "My Project". */
function titleCase(slug: string): string {
  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Read pixel dimensions at build time; fall back to a sane ratio on failure. */
function measure(absPath: string, fallback: { width: number; height: number }): {
  width: number;
  height: number;
} {
  try {
    const buf = readFileSync(absPath);
    const { width, height } = imageSize(buf);
    if (typeof width === "number" && typeof height === "number" && width > 0 && height > 0) {
      return { width, height };
    }
  } catch {
    // ignore — use fallback
  }
  return fallback;
}

/** Case-insensitive lookup of the first existing filename from candidates. */
function pick(files: string[], candidates: string[]): string | null {
  const lower = new Map(files.map((f) => [f.toLowerCase(), f]));
  for (const c of candidates) {
    const hit = lower.get(c.toLowerCase());
    if (hit) return hit;
  }
  return null;
}

function readMeta(folderAbs: string): ProjectMeta {
  const metaPath = join(folderAbs, "meta.json");
  if (!existsSync(metaPath)) return {};
  try {
    const parsed = JSON.parse(readFileSync(metaPath, "utf8")) as unknown;
    if (parsed && typeof parsed === "object") return parsed as ProjectMeta;
  } catch {
    // malformed meta.json → defaults
  }
  return {};
}

function detectWeb(files: string[], folder: string, meta: ProjectMeta): WebAsset {
  const base = `${PUBLIC_BASE}/${folder}`;
  const mp4 = pick(files, ["web.mp4"]);
  const webm = pick(files, ["web.webm"]);
  if (mp4 || webm) {
    const sources: { src: string; type: string }[] = [];
    // WebM first (smaller) so browsers that support it pick it.
    if (webm) sources.push({ src: `${base}/${webm}`, type: "video/webm" });
    if (mp4) sources.push({ src: `${base}/${mp4}`, type: "video/mp4" });
    const poster = pick(files, ["web-poster.jpg", "web-poster.png", "web-poster.jpeg", "web-poster.webp"]);
    return {
      kind: "video",
      sources,
      poster: poster ? `${base}/${poster}` : null,
      aspect: typeof meta.aspect === "string" && meta.aspect.includes("/") ? meta.aspect : "16/10",
    };
  }
  const shot = pick(files, ["web-full.png", "web-full.jpg", "web-full.jpeg", "web-full.webp", "web.png", "web.jpg", "web.jpeg", "web.webp"]);
  if (shot) {
    const dims = measure(join(PORTFOLIO_DIR, folder, shot), { width: 1440, height: 3200 });
    return { kind: "screenshot", image: { src: `${base}/${shot}`, ...dims } };
  }
  return null;
}

function detectMobile(files: string[], folder: string): MobileAsset {
  const base = `${PUBLIC_BASE}/${folder}`;
  // Single tall auto-scroll screen takes priority.
  const full = pick(
    files,
    IMAGE_EXTS.map((e) => `mobile-full.${e}`),
  );
  if (full) {
    const dims = measure(join(PORTFOLIO_DIR, folder, full), { width: 1170, height: 2900 });
    return { kind: "full", images: [{ src: `${base}/${full}`, ...dims }] };
  }
  // Numbered strip: mobile-1, mobile-2, ... naturally sorted.
  const stripRe = /^mobile-(\d+)\.(png|jpg|jpeg|webp)$/i;
  const strip = files
    .map((f) => {
      const m = stripRe.exec(f);
      return m ? { file: f, n: Number(m[1]) } : null;
    })
    .filter((x): x is { file: string; n: number } => x !== null)
    .sort((a, b) => a.n - b.n);
  if (strip.length > 0) {
    const images = strip.map(({ file }) => {
      const dims = measure(join(PORTFOLIO_DIR, folder, file), { width: 1170, height: 2532 });
      return { src: `${base}/${file}`, ...dims };
    });
    return { kind: "strip", images };
  }
  return null;
}

function deriveType(web: WebAsset, mobile: MobileAsset, meta: ProjectMeta): ProjectType {
  if (meta.type === "web" || meta.type === "mobile" || meta.type === "both") return meta.type;
  if (web && mobile) return "both";
  if (mobile) return "mobile";
  return "web";
}

function buildProject(folder: string): Project | null {
  const folderAbs = join(PORTFOLIO_DIR, folder);
  let files: string[];
  try {
    if (!statSync(folderAbs).isDirectory()) return null;
    files = readdirSync(folderAbs);
  } catch {
    return null;
  }

  const meta = readMeta(folderAbs);
  const slug = folder.replace(/^\d+[-_]?/, "") || folder;
  const web = detectWeb(files, folder, meta);
  const mobile = detectMobile(files, folder);

  return {
    slug,
    folder,
    title: typeof meta.title === "string" && meta.title.trim() ? meta.title : titleCase(slug),
    role: typeof meta.role === "string" ? meta.role : null,
    tags: Array.isArray(meta.tags) ? meta.tags.filter((t): t is string => typeof t === "string") : [],
    url: typeof meta.url === "string" && /^https?:\/\//.test(meta.url) ? meta.url : null,
    playStore: typeof meta.playStore === "string" && /^https?:\/\//.test(meta.playStore) ? meta.playStore : null,
    appStore: typeof meta.appStore === "string" && /^https?:\/\//.test(meta.appStore) ? meta.appStore : null,
    year: typeof meta.year === "string" ? meta.year : null,
    summary: typeof meta.summary === "string" ? meta.summary : null,
    challenges: Array.isArray(meta.challenges) ? meta.challenges.filter((c): c is Challenge => {
      if (!c || typeof c !== "object") return false;
      const challenge = c as Record<string, unknown>;
      return typeof challenge.title === "string" && typeof challenge.problem === "string" && typeof challenge.solution === "string";
    }) : [],
    type: deriveType(web, mobile, meta),
    featured: meta.featured === true,
    web,
    mobile,
  };
}

let cache: Project[] | null = null;

/**
 * Discover all projects. Sorted: featured first, then ascending folder name
 * (the NN- prefix controls order). Returns [] if the folder is missing/empty.
 */
export function getProjects(): Project[] {
  if (cache) return cache;
  let folders: string[];
  try {
    if (!existsSync(PORTFOLIO_DIR)) {
      cache = [];
      return cache;
    }
    folders = readdirSync(PORTFOLIO_DIR)
      .filter((name) => !name.startsWith("."))
      .sort((a, b) => a.localeCompare(b, "en"));
  } catch {
    cache = [];
    return cache;
  }

  const projects = folders
    .map(buildProject)
    .filter((p): p is Project => p !== null)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.folder.localeCompare(b.folder, "en");
    });

  cache = projects;
  return cache;
}

/** Whether the gallery has both web and mobile projects (controls filter tabs). */
export function getAvailableFilters(projects: Project[]): ("web" | "mobile")[] {
  const hasWeb = projects.some((p) => p.type === "web" || p.type === "both");
  const hasMobile = projects.some((p) => p.type === "mobile" || p.type === "both");
  const filters: ("web" | "mobile")[] = [];
  if (hasWeb) filters.push("web");
  if (hasMobile) filters.push("mobile");
  return filters;
}

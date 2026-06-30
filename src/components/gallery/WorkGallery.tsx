import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { WorkGalleryGrid } from "@/components/gallery/WorkGalleryGrid";
import { getAvailableFilters, getProjects } from "@/lib/portfolio";

/**
 * Server component: reads /public/portfolio at build time and renders the
 * auto-discovered gallery. The interactive grid/lightbox is a client child that
 * receives plain serializable project data as props.
 *
 * DECISION: this section is `ink` to restore the cream/ink rhythm lost when the
 * old (ink) Case Study section was retired, and because the flat browser/phone
 * frames read well on a dark band.
 */
export function WorkGallery() {
  const projects = getProjects();
  const filters = getAvailableFilters(projects);

  return (
    <Section id="work" variant="ink">
      <Reveal>
        <Kicker tone="accent">Selected Work</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-cream-text md:text-5xl">
          Work that shipped
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-xl text-pretty text-muted-ink">
          A live look at recent builds — scroll the web recordings, swipe the app
          screens, and open any project for the full story.
        </p>
      </Reveal>

      {projects.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-line-ink p-12 text-center text-muted-ink">
          No projects yet — drop a folder into{" "}
          <code className="font-mono text-cream-text">/public/portfolio/</code> to
          populate this gallery.
        </div>
      ) : (
        <WorkGalleryGrid projects={projects} filters={filters} />
      )}
    </Section>
  );
}

/**
 * SINGLE SOURCE OF TRUTH for all editable copy and lists.
 *
 * Rule: only real, verifiable content lives here. Unconfirmed details are left
 * empty — and sections whose data is empty hide themselves (see each section
 * component). Never invent names, numbers, quotes, projects, or technologies.
 *
 * Verified facts: MD Asif Afroj Shayon ("Asif") · Flutter/cross-platform mobile
 * first, full-stack web second · Dhaka, Bangladesh · 5+ years · stack Flutter,
 * Dart, Firebase, REST APIs / Next.js, React, TypeScript, Node · GitHub AAShayon.
 */
import { images } from "@/config/images";
import type { ImageAsset } from "@/config/images";

export type Capability = {
  title: string;
  blurb: string;
  chips: string[];
  image: ImageAsset;
};
export type Stat = { value: string; label: string };
export type Testimonial = { name: string; role: string; company?: string; quote: string };
export type JournalPost = { title: string; href: string; date?: string };
export type FaqItem = { q: string; a: string };
export type NavLink = { label: string; href: string };

export const site = {
  profile: {
    name: "MD Asif Afroj Shayon",
    shortName: "Asif",
    /** Giant clipped wordmark across the footer baseline. */
    wordmark: "ASIF SHAYON",
    role: "Flutter & Full-Stack Developer",
    location: "Dhaka, Bangladesh",
    years: "5+",
    available: true,
    summary:
      "I build fast, native-feeling cross-platform apps with Flutter, and full-stack web with Next.js — from first commit to release.",
  },

  capabilities: [
    {
      title: "Mobile Apps",
      blurb: "Native-feeling iOS & Android apps from one Flutter codebase.",
      chips: ["Flutter", "Dart", "Firebase", "REST APIs", "iOS", "Android"],
      image: images.capMobile,
    },
    {
      title: "Full-Stack Web",
      blurb: "End-to-end web apps and dashboards.",
      chips: ["Next.js", "React", "TypeScript", "Node"],
      image: images.capWeb,
    },
    // DECISION: a third "Backend & APIs" capability was removed — its chips were
    // unconfirmed. Add it back only when Asif confirms the specifics.
  ] satisfies Capability[],

  stats: [
    { value: "5+", label: "Years of Experience" },
    // DECISION: the project-count and satisfaction-percentage figures were
    // fabricated and removed. Add real, verifiable numbers here when available.
  ] satisfies Stat[],

  // Real, confirmed coding stack (verified against aashayon.github.io and the
  // confirmed stack list). Mobile-first ordering. Add more here as confirmed.
  stack: [
    "Flutter",
    "Dart",
    "Firebase",
    "REST APIs",
    "Next.js",
    "React",
    "TypeScript",
    "Node",
  ],

  // Empty → the section does not render. Do not add invented entries.
  // (`as` keeps the element type; `satisfies` on an empty array infers never[].)
  testimonials: [] as Testimonial[],
  journal: [] as JournalPost[],

  // Items with an empty answer are hidden until a real answer exists.
  faq: [
    {
      q: "What's your development process like?",
      a: "Discovery → architecture → iterative build with previews → QA → handoff.",
    },
    {
      q: "Do you build both mobile apps and web platforms?",
      a: "Yes — Flutter for mobile, Next.js/React for web, shared backends.",
    },
    { q: "What's your typical project timeline?", a: "" },
    {
      q: "What's your stack?",
      a: "Flutter, Dart, Firebase for mobile; Next.js, React, TypeScript for web.",
    },
    { q: "Can you take over or refactor an existing codebase?", a: "" },
    { q: "Do you offer ongoing maintenance and support?", a: "" },
  ] satisfies FaqItem[],

  social: {
    github: "https://github.com/AAShayon",
    linkedin: "https://www.linkedin.com/in/aashayon",
    whatsapp: "https://wa.me/8801580873412",
    twitter: "https://twitter.com/Shayon01",
    facebook: "https://facebook.com/shayon",
  },

  cta: {
    heading: "Let's build something great together",
    buttonLabel: "Get in touch",
    href: "https://wa.me/8801580873412",
  },

  // Nav reflects only sections that actually render (Journal & Testimonials are
  // currently empty, so they are omitted).
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],

  seo: {
    // DECISION: no production domain confirmed; GitHub Pages user domain is the
    // most likely target. Update when the real domain is known.
    url: "https://aashayon.github.io",
  },
};

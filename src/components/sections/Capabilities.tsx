import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { MediaFrame } from "@/components/primitives/MediaFrame";
import { Section } from "@/components/primitives/Section";
import { site } from "@/content/site";

export function Capabilities() {
  const { capabilities } = site;
  if (capabilities.length === 0) return null;

  return (
    <Section id="about" variant="cream">
      <Reveal>
        <Kicker tone="accent">Capabilities</Kicker>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
          How I help teams ship
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-4 max-w-2xl text-muted">
          Here&rsquo;s how I help teams turn ideas into shipped products.
        </p>
      </Reveal>

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {capabilities.map((cap, i) => (
          <li key={cap.title}>
            <Reveal delay={0.1 + i * 0.08}>
              <a
                href="#contact"
                aria-label={`${cap.title} — get in touch`}
                className="group relative block overflow-hidden rounded-2xl border border-line bg-card shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                <div className="relative">
                  <MediaFrame
                    asset={cap.image}
                    aspectRatio="4/3"
                    sizes="(min-width:640px) 50vw, 100vw"
                    framed={false}
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-card/95 p-3 opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="flex flex-wrap gap-1.5">
                      {cap.chips.map((chip) => (
                        <li
                          key={chip}
                          className="rounded-full border border-line bg-card px-2 py-0.5 font-mono text-[0.6rem] text-muted"
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl text-ink">{cap.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{cap.blurb}</p>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

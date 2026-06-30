import { Section } from "@/components/primitives/Section";
import { Kicker } from "@/components/primitives/Kicker";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { site } from "@/content/site";

export function CTA() {
  return (
    <Section id="contact" variant="cream">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-cream-text md:px-16 md:py-20">
        {/* Decorative flat accents — behind text, no gradients */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-8 top-8 h-3 w-3 bg-accent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-14 top-12 h-2 w-2 bg-forest"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-10 h-16 w-1 bg-accent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 right-12 h-3 w-3 bg-accent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-16 right-20 h-2 w-2 bg-forest"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-10 h-10 w-1 bg-forest"
        />

        <Reveal className="relative mx-auto max-w-2xl text-center">
          <Kicker tone="accent">Let&rsquo;s talk</Kicker>

          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-cream-text md:text-6xl">
            {site.cta.heading}
          </h2>

          <p className="mx-auto mt-4 max-w-md text-muted-ink">
            Tell me what you&rsquo;re building &mdash; I&rsquo;ll help you ship it.
          </p>

          <Button href={site.cta.href} withArrow className="mt-7 px-6 py-3 text-base">
            {site.cta.buttonLabel}
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

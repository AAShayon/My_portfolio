"use client";

import { Button } from "@/components/primitives/Button";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { site } from "@/content/site";
import type { Project } from "@/lib/portfolio";

export function Hero({ projects }: { projects: Project[] }) {
  return (
    <section id="home" className="relative bg-cream pt-28 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Kicker tone="accent">I&rsquo;m</Kicker>
        </Reveal>

        <div className="mt-3 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h1 className="font-display text-[clamp(4rem,17vw,15rem)] font-extrabold uppercase leading-[0.82] text-ink">
                {site.profile.shortName}
              </h1>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pb-3">
            <Reveal delay={0.12}>
              <p className="text-balance text-xl font-medium text-ink sm:text-2xl">
                A {site.profile.role} based in {site.profile.location}.
              </p>
              <p className="mt-4 max-w-md text-pretty text-muted">
                {site.profile.summary}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button href={site.cta.href} withArrow>
                  {site.cta.buttonLabel}
                </Button>
                <Button href="#work" variant="secondary">
                  View the Work
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        <HeroSlideshow projects={projects} />
      </div>
    </section>
  );
}

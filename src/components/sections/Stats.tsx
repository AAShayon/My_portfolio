"use client";

import { Card } from "@/components/primitives/Card";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { site } from "@/content/site";
import type { StackCategory, Stat } from "@/content/site";

function StatCard({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true });
  // Parse a leading number for the count-up; keep any non-digit suffix ("+","%").
  const target = parseInt(stat.value, 10);
  const suffix = stat.value.replace(/[\d.,\s]/g, "");
  const hasNumber = Number.isFinite(target);
  const n = useCountUp(hasNumber ? target : 0, inView);

  return (
    <div ref={ref} className="h-full">
      <Card variant="light" as="article" className="flex h-full flex-col justify-center gap-3 p-6 md:p-8">
        <p className="font-display text-5xl leading-none text-ink md:text-6xl">
          {hasNumber ? (
            <>
              <span aria-hidden="true">
                {n}
                {suffix}
              </span>
              <span className="sr-only">{stat.value}</span>
            </>
          ) : (
            stat.value
          )}
        </p>
        <p className="font-mono text-xs uppercase tracking-wide text-muted">{stat.label}</p>
      </Card>
    </div>
  );
}

export function Stats() {
  const { stats, stack } = site;
  if (stats.length === 0 && stack.length === 0) return null;

  const hasStats = stats.length > 0;
  const hasStack = stack.length > 0;

  return (
    <Section id="stats" variant="cream">
      <Reveal>
        <Kicker tone="accent">Experience &amp; stack</Kicker>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {hasStats ? (
          <div className="flex flex-col gap-5 md:col-span-1">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06} className="h-full">
                <StatCard stat={stat} />
              </Reveal>
            ))}
          </div>
        ) : null}

        {hasStack ? (
          <Reveal delay={0.08} className={hasStats ? "md:col-span-2" : "md:col-span-3"}>
            <Card variant="light" className="flex h-full flex-col p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-wide text-muted">Tech stack</p>
              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {stack.map((group: StackCategory) => (
                  <div key={group.category}>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-accent">
                      {group.category}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line bg-cream px-3 py-1 font-mono text-sm text-ink"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}

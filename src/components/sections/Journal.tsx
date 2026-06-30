import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/primitives/Card";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { site } from "@/content/site";

export function Journal() {
  const posts = site.journal;
  // Hide the section until there are real posts to show.
  if (posts.length === 0) return null;

  return (
    <Section id="journal" variant="ink">
      <Reveal>
        <Kicker tone="accent">Journal</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl text-cream-text md:text-4xl">
          Notes from the build
        </h2>
      </Reveal>

      <ul className="mt-12 grid list-none grid-cols-1 gap-5 md:grid-cols-2">
        {posts.map((post, index) => (
          <li key={post.href}>
            <Reveal delay={0.1 + index * 0.08}>
              <Card variant="ink" as="article" className="h-full">
                <a
                  href={post.href}
                  className="group flex h-full flex-col justify-between gap-6 rounded-2xl p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  <div>
                    {post.date ? (
                      <p className="font-mono text-[0.65rem] uppercase tracking-wide text-muted-ink">
                        {post.date}
                      </p>
                    ) : null}
                    <h3 className="mt-3 font-display text-xl text-cream-text">
                      {post.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-cream-text">
                    Read
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

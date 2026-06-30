"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Kicker } from "@/components/primitives/Kicker";
import { Reveal } from "@/components/primitives/Reveal";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

interface FAQItemProps {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  reduce: boolean;
  onToggle: (index: number) => void;
}

function FAQItem({ index, question, answer, open, reduce, onToggle }: FAQItemProps) {
  const btnId = `faq-btn-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-line">
      <h3 className="m-0">
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-medium text-ink"
        >
          <span>{question}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-5 shrink-0 text-accent transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>
      </h3>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-5 pr-9 text-muted">{answer}</p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  const reduce = useReducedMotion() ?? false;
  // Only render questions that have a real answer.
  const items = site.faq.filter((item) => item.a.trim().length > 0);
  const [openItems, setOpenItems] = useState<readonly boolean[]>(() =>
    items.map((_, i) => i === 0),
  );

  if (items.length === 0) return null;

  const toggle = (index: number) => {
    setOpenItems((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  return (
    <Section id="faq" variant="cream">
      <Reveal>
        <Kicker tone="accent">FAQ</Kicker>
        <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-muted">
          Answers to common questions about working together.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 max-w-3xl">
          {items.map((item, i) => (
            <FAQItem
              key={item.q}
              index={i}
              question={item.q}
              answer={item.a}
              open={openItems[i] ?? false}
              reduce={reduce}
              onToggle={toggle}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

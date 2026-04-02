import Layout from "@/components/Layout";
import Reveal from "@/components/animations/Reveal";
import { motion, useReducedMotion } from "framer-motion";

const STACKS = ["Python", "Django", "LangChain", "JavaScript", "React", "React Native", "Figma"] as const;

function StackPill({ label }: { label: string }) {
  return (
    <div className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-5 py-2.5 backdrop-blur-sm transition-all">
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)_/_0.55)]" />
      <span className="text-sm font-semibold tracking-wide text-foreground/90 group-hover:text-foreground transition-colors">
        {label}
      </span>
    </div>
  );
}

function StackMarquee({
  direction = "left",
  speedSec = 26,
}: {
  direction?: "left" | "right";
  speedSec?: number;
}) {
  const reduce = useReducedMotion();
  const items = [...STACKS, ...STACKS, ...STACKS, ...STACKS];

  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative overflow-hidden">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex w-[200%] gap-4 py-3"
        aria-hidden={reduce ? undefined : true}
        animate={reduce ? undefined : { x: [from, to] }}
        transition={
          reduce
            ? undefined
            : {
                duration: speedSec,
                ease: "linear",
                repeat: Infinity,
              }
        }
      >
        <div className="flex w-1/2 flex-nowrap items-center gap-4">
          {items.slice(0, items.length / 2).map((s, idx) => (
            <StackPill key={`${s}-${idx}-a`} label={s} />
          ))}
        </div>
        <div className="flex w-1/2 flex-nowrap items-center gap-4">
          {items.slice(items.length / 2).map((s, idx) => (
            <StackPill key={`${s}-${idx}-b`} label={s} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Stacks() {
  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <Reveal className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Stacks
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We have mastered these specific stacks, and that's what makes our build fast, stable, and future-proof.
            </p>
          </Reveal>

          <div className="mx-auto max-w-5xl space-y-6">
            <Reveal delayMs={0}>
              <div className="kc-card p-0 overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex items-center justify-between gap-6">
                    <div className="space-y-2">
                      <h2 className="font-heading text-2xl md:text-3xl font-bold">
                        Our core toolchain
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground">
                        A focused set of technologies we know deeply — optimized for speed, quality, and long-term maintainability.
                      </p>
                    </div>
                    <div className="hidden md:block h-16 w-16 rounded-2xl border border-border bg-background/40 backdrop-blur-sm shadow-[0_0_60px_-30px_hsl(var(--primary)_/_0.8)]" />
                  </div>
                </div>

                <div className="border-t border-border/70 bg-background/20">
                  <StackMarquee direction="left" speedSec={28} />
                  <StackMarquee direction="right" speedSec={34} />
                  <StackMarquee direction="left" speedSec={40} />
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { k: "Fast", v: "Battle-tested patterns and tight feedback loops." },
                  { k: "Stable", v: "Predictable stacks with long-term support." },
                  { k: "Future-proof", v: "Modern foundations that scale with your product." },
                ].map((item) => (
                  <div key={item.k} className="kc-card">
                    <div className="text-sm text-muted-foreground">Built to be</div>
                    <div className="mt-2 font-heading text-xl font-bold">
                      <span className="text-gradient-gold">{item.k}</span>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">{item.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}


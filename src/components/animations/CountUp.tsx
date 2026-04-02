import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function parseValue(raw: string) {
  const trimmed = raw.trim();
  const match = trimmed.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, suffix: trimmed };
  return { num: Number(match[1]), suffix: match[2] };
}

export default function CountUp({
  value,
  durationMs = 900,
  inView,
}: {
  value: string;
  durationMs?: number;
  /** If false, it won't start until `inView` becomes true.
   *  If omitted/undefined, it starts immediately on mount. */
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const { num, suffix } = useMemo(() => parseValue(value), [value]);

  const [display, setDisplay] = useState(reduce ? num : 0);
  const [autoVisible, setAutoVisible] = useState(false);
  const startedRef = useRef(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (reduce) {
      setAutoVisible(true);
      return;
    }

    // If consumer provided explicit inView, respect it.
    if (inView !== undefined) {
      setAutoVisible(Boolean(inView));
      return;
    }

    // Otherwise, observe visibility.
    const el = spanRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setAutoVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [inView, reduce]);

  useEffect(() => {
    if (reduce) {
      setDisplay(num);
      return;
    }
    const shouldStart = inView === undefined ? autoVisible : Boolean(inView);
    if (!shouldStart || startedRef.current) return;
    startedRef.current = true;

    const controls = animate(0, num, {
      duration: durationMs / 1000,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [autoVisible, durationMs, inView, num, reduce]);

  const formatted = useMemo(() => {
    if (Math.abs(display - Math.round(display)) < 0.0001) return String(Math.round(display));
    // Keep it calm for small decimals.
    return display.toFixed(1).replace(/\.0$/, "");
  }, [display]);

  return (
    <span ref={spanRef} aria-label={value}>
      {formatted}
      {suffix}
    </span>
  );
}


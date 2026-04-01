import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  colorClass: string;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Particles({ count = 22, className }: { count?: number; className?: string }) {
  const [viewport, setViewport] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const particles = useMemo<Particle[]>(() => {
    // Avoid `window` usage during initial render.
    const w = viewport?.w ?? 1200;
    const h = viewport?.h ?? 800;

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: rand(0, w),
      y: rand(0, h),
      size: rand(1, 2.2),
      duration: rand(3.5, 6.2),
      delay: rand(0, 1.8),
      colorClass: i % 7 === 0 ? "bg-primary/70" : "bg-white/40",
    }));
  }, [count, viewport?.w, viewport?.h]);

  return (
    <div className={["pointer-events-none absolute inset-0 overflow-hidden", className].filter(Boolean).join(" ")}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={["absolute rounded-full", p.colorClass].join(" ")}
          style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
          initial={{ opacity: 0.2 }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.95, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}


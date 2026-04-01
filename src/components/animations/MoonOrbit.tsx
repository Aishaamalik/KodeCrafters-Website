import { motion } from "framer-motion";

type MoonOrbitProps = {
  /** Diameter of the orbit container (px). */
  size?: number;
  /** Size of the orbiting moon (px). */
  moonSize?: number;
  /** Size of the center object (px). */
  centerSize?: number;
  /** Orbit duration (seconds). */
  duration?: number;
  /** Optional center content (e.g., logo/icon). */
  center?: React.ReactNode;
  className?: string;
};

export default function MoonOrbit({
  size = 320,
  moonSize = 22,
  centerSize = 88,
  duration = 14,
  center,
  className,
}: MoonOrbitProps) {
  return (
    <div
      className={["relative flex items-center justify-center", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size }}
      aria-hidden={center ? undefined : true}
    >
      {/* Center object */}
      <div
        className="relative z-10 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--gold-glow))] shadow-[0_0_30px_rgba(255,215,0,0.55)] ring-1 ring-white/10"
        style={{ width: centerSize, height: centerSize }}
      >
        {center ? <div className="absolute inset-0 grid place-items-center">{center}</div> : null}
      </div>

      {/* Orbit path */}
      <div className="absolute inset-0 rounded-full ring-1 ring-white/5" />

      {/* Orbiting moon */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      >
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.75)]"
          style={{ width: moonSize, height: moonSize }}
        />
      </motion.div>

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-primary/10 blur-[90px]" />
    </div>
  );
}


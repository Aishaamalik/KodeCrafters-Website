import { motion } from "framer-motion";
import moonTexture from "@/assets/moon.png";

export default function Moon({
  className,
}: {
  className?: string;
}) {
  return (
    <motion.div
      className={["relative", className].filter(Boolean).join(" ")}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
        scale: { duration: 1.2, ease: [0.2, 0.8, 0.2, 1] },
        y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Moon body */}
      <motion.div
        className="relative mx-auto aspect-square w-[320px] sm:w-[380px] md:w-[440px] rounded-full"
        animate={{
          boxShadow: [
            "0 0 40px rgba(255, 215, 0, 0.25), 0 0 120px rgba(255, 195, 0, 0.12)",
            "0 0 70px rgba(255, 215, 0, 0.38), 0 0 170px rgba(255, 195, 0, 0.16)",
            "0 0 40px rgba(255, 215, 0, 0.25), 0 0 120px rgba(255, 195, 0, 0.12)",
          ],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.22), rgba(255,255,255,0) 42%),
            radial-gradient(circle at 55% 60%, rgba(255,195,0,0.12), rgba(255,195,0,0) 58%),
            url(${moonTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.15) contrast(1.05)",
        }}
      >
        {/* Haze around the moon */}
        <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.12),transparent_60%)] blur-2xl" />

        {/* Subtle vignette for cinematic depth */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_55%,transparent_35%,rgba(0,0,0,0.55)_78%,rgba(0,0,0,0.78)_100%)]" />
      </motion.div>
    </motion.div>
  );
}


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Moon from "./Moon";
import Clouds from "./Clouds";

export default function CinematicHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Sky gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_50%_20%,rgba(255,215,0,0.10),transparent_55%),radial-gradient(800px_circle_at_20%_15%,rgba(255,195,0,0.06),transparent_55%),linear-gradient(180deg,#000000,#050505)]" />

      {/* Subtle haze */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_50%_40%,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="container relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Copy */}
          <div className="text-center md:text-left space-y-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, ease: [0.2, 0.8, 0.2, 1] }}
              className="font-heading text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            >
              We Craft <span className="text-gradient-gold">Digital</span> Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl md:max-w-none mx-auto md:mx-0 leading-relaxed"
            >
              A software house dedicated to turning bold ideas into powerful, scalable digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/projects" className="kc-btn kc-btn-primary">
                  View Our Work <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/about" className="kc-btn kc-btn-secondary">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center">
            <Moon />
            <Clouds />

            {/* Foreground fog */}
            <div className="pointer-events-none absolute -bottom-12 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(closest-side,rgba(0,0,0,0.0),rgba(0,0,0,0.85))] blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}


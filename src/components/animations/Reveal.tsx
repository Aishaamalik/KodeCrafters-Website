import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger inside lists. */
  delayMs?: number;
  /** Direction offset in px. */
  y?: number;
  className?: string;
};

export default function Reveal({ children, delayMs = 0, y = 14, className }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: delayMs / 1000 }}
    >
      {children}
    </motion.div>
  );
}


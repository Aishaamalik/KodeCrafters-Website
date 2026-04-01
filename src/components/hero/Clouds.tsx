import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type Layer = {
  id: string;
  top: string;
  opacity: number;
  blur: number;
  speed: number; // seconds per loop
  scale: number;
  z: number;
};

function CloudBlob({
  left,
  top,
  w,
  h,
  opacity,
}: {
  left: string;
  top: string;
  w: string;
  h: string;
  opacity: number;
}) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        left,
        top,
        width: w,
        height: h,
        opacity,
        background:
          "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 60%), radial-gradient(circle at 55% 60%, rgba(0,0,0,0.75), rgba(0,0,0,0.98) 70%)",
      }}
    />
  );
}

function CloudMass({ variant = 0 }: { variant?: number }) {
  // A handful of soft blobs that read as “clouds” once blurred.
  const blobs = useMemo(() => {
    const v = variant % 3;
    if (v === 0) {
      return [
        { left: "0%", top: "40%", w: "48%", h: "52%", opacity: 0.9 },
        { left: "22%", top: "18%", w: "52%", h: "58%", opacity: 0.85 },
        { left: "52%", top: "34%", w: "56%", h: "60%", opacity: 0.88 },
        { left: "78%", top: "46%", w: "44%", h: "46%", opacity: 0.82 },
      ];
    }
    if (v === 1) {
      return [
        { left: "6%", top: "48%", w: "56%", h: "58%", opacity: 0.86 },
        { left: "36%", top: "26%", w: "62%", h: "64%", opacity: 0.9 },
        { left: "70%", top: "50%", w: "46%", h: "48%", opacity: 0.84 },
      ];
    }
    return [
      { left: "0%", top: "54%", w: "52%", h: "54%", opacity: 0.88 },
      { left: "28%", top: "34%", w: "58%", h: "62%", opacity: 0.86 },
      { left: "62%", top: "52%", w: "52%", h: "54%", opacity: 0.82 },
    ];
  }, [variant]);

  return (
    <div className="absolute inset-0">
      {blobs.map((b, i) => (
        <CloudBlob key={i} {...b} />
      ))}
    </div>
  );
}

export default function Clouds({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const layers: Layer[] = [
    { id: "far", top: "22%", opacity: 0.28, blur: 28, speed: 70, scale: 1.15, z: 10 },
    { id: "mid", top: "34%", opacity: 0.34, blur: 22, speed: 52, scale: 1.2, z: 20 },
    { id: "near", top: "48%", opacity: 0.42, blur: 18, speed: 38, scale: 1.25, z: 30 },
  ];

  return (
    <div className={["pointer-events-none absolute inset-0 overflow-hidden", className].filter(Boolean).join(" ")}>
      {layers.map((layer, idx) => (
        <motion.div
          key={layer.id}
          className="absolute left-0 right-0"
          style={{
            top: layer.top,
            opacity: layer.opacity,
            filter: `blur(${layer.blur}px)`,
            transform: `scale(${layer.scale})`,
            zIndex: layer.z,
            willChange: "transform",
          }}
          animate={reduce ? undefined : { x: ["-22%", "22%"] }}
          transition={
            reduce
              ? undefined
              : {
                  duration: layer.speed,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "linear",
                }
          }
        >
          <div className="relative h-[260px] w-[140%] -left-[20%]">
            <CloudMass variant={idx} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}


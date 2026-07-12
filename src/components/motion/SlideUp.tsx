"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/cn";

type SlideUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function SlideUp({ children, className, delay = 0 }: SlideUpProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: motionTokens.revealOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: motionTokens.duration.reveal,
        delay,
        ease: motionTokens.easing.default,
      }}
    >
      {children}
    </motion.div>
  );
}

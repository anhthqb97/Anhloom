"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/cn";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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

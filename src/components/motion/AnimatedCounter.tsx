"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/cn";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) {
    return { numeric: 0, suffix: value, animatable: false };
  }

  return {
    numeric: Number.parseInt(match[1], 10),
    suffix: match[2],
    animatable: true,
  };
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, motionTokens.easing.spring);
  const { numeric, suffix, animatable } = parseStatValue(value);

  useEffect(() => {
    if (!animatable || !isInView || shouldReduceMotion) {
      return;
    }

    motionValue.set(numeric);
  }, [animatable, isInView, motionValue, numeric, shouldReduceMotion]);

  useEffect(() => {
    if (!animatable || shouldReduceMotion) {
      return;
    }

    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });

    return unsubscribe;
  }, [animatable, shouldReduceMotion, springValue, suffix]);

  if (!animatable || shouldReduceMotion) {
    return (
      <span className={cn(className)}>
        {value}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: motionTokens.duration.slow }}
    >
      0{suffix}
    </motion.span>
  );
}

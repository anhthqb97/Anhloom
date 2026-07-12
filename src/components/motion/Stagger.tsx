"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/cn";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: motionTokens.revealOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.default,
    },
  },
};

export function StaggerChildren({ children, className }: StaggerChildrenProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

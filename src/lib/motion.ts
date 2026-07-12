/** Motion tokens — see docs/sdd/plan.md §5.1 */

export const motionTokens = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    reveal: 0.8,
  },
  easing: {
    default: [0.4, 0, 0.2, 1] as const,
    spring: { stiffness: 300, damping: 30 },
    bounce: [0.34, 1.56, 0.64, 1] as const,
  },
  stagger: 0.08,
  revealOffset: 40,
} as const;

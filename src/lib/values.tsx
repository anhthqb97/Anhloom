function ValueIcon({ label }: { label: string }) {
  return (
    <span className="text-body-sm font-bold" aria-hidden="true">
      {label}
    </span>
  );
}

export const coreValues = [
  {
    title: "Craft",
    description:
      "We sweat the details — clean architecture, thoughtful UX, and code built to last.",
    icon: <ValueIcon label="CR" />,
  },
  {
    title: "Partnership",
    description:
      "We embed with your team, communicate clearly, and align on outcomes—not just output.",
    icon: <ValueIcon label="PT" />,
  },
  {
    title: "Velocity",
    description:
      "We ship iteratively with tight feedback loops so you see progress every sprint.",
    icon: <ValueIcon label="VL" />,
  },
  {
    title: "Integrity",
    description:
      "We are transparent about trade-offs, timelines, and risks — no surprises.",
    icon: <ValueIcon label="IN" />,
  },
] as const;

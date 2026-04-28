interface TechBadgeProps {
  label: string;
  size?: "sm" | "md";
}

export function TechBadge({ label, size = "md" }: TechBadgeProps) {
  const sizeClass = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm";
  return (
    <span
      className={
        "inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-medium transition-colors hover:bg-indigo-500/20 " +
        sizeClass
      }
    >
      {label}
    </span>
  );
}

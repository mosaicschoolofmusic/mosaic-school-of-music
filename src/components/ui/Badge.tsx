interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "green" | "muted" | "success";
  className?: string;
}

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  const variantClasses = {
    gold: "bg-gold-light text-gold-dark border border-gold/30",
    green: "bg-green-dark/10 text-green-dark border border-green-dark/20",
    muted: "bg-gray-100 text-muted border border-gray-200",
    success: "bg-green-50 text-green-success border border-green-200",
  };

  return (
    <span
      className={[
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

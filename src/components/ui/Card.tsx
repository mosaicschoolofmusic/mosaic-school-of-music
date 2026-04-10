import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold" | "green" | "flat";
  hover?: boolean;
}

export default function Card({
  variant = "default",
  hover = true,
  className = "",
  children,
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-warm-white border border-gold-light/40",
    gold: "bg-gold-light border border-gold/30",
    green: "bg-green-dark text-white border border-green",
    flat: "bg-white border border-gray-100",
  };

  return (
    <div
      className={[
        "rounded-2xl p-6 shadow-card transition-all duration-300",
        variantClasses[variant],
        hover ? "hover:shadow-card-hover hover:-translate-y-1" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

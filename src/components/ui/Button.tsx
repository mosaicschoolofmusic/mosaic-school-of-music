"use client";

import { forwardRef } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

interface ButtonAsButton extends BaseButtonProps {
  as?: "button";
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonAsLink extends BaseButtonProps {
  as: "link";
  href: string;
  target?: string;
  rel?: string;
  type?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-white hover:bg-gold-dark active:bg-gold-dark shadow-sm hover:shadow-warm font-semibold",
  secondary:
    "bg-green-dark text-white hover:bg-green active:bg-green shadow-sm font-semibold",
  outline:
    "border-2 border-gold text-gold hover:bg-gold hover:text-white active:bg-gold-dark font-semibold",
  ghost:
    "text-green-dark hover:bg-gold-light active:bg-gold-light font-medium",
  whatsapp:
    "bg-whatsapp text-white hover:bg-green-500 active:bg-green-600 shadow-sm font-semibold",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, _ref) {
    const {
      variant = "primary",
      size = "md",
      className = "",
      children,
      disabled,
      loading,
    } = props;

    const classes = [
      "inline-flex items-center justify-center gap-2 transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
      variantClasses[variant],
      sizeClasses[size],
      disabled || loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (props.as === "link" && props.href) {
      const isExternal =
        props.href.startsWith("http") || props.href.startsWith("//");
      return (
        <Link
          href={props.href}
          className={classes}
          target={props.target ?? (isExternal ? "_blank" : undefined)}
          rel={
            props.rel ??
            (isExternal ? "noopener noreferrer" : undefined)
          }
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={_ref as React.Ref<HTMLButtonElement>}
        type={(props as ButtonAsButton).type ?? "button"}
        className={classes}
        disabled={disabled || loading}
        onClick={(props as ButtonAsButton).onClick}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

export default Button;

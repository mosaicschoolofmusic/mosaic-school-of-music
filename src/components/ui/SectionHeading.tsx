interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  tag?: "h1" | "h2" | "h3";
  className?: string;
  accentColor?: "gold" | "green";
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  tag: Tag = "h2",
  className = "",
  accentColor = "gold",
}: SectionHeadingProps) {
  const accentClasses = {
    gold: "bg-gold",
    green: "bg-green-dark",
  };

  return (
    <div className={`${centered ? "text-center" : ""} mb-12 ${className}`}>
      <Tag className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text leading-tight mb-4">
        {title}
      </Tag>
      <div
        className={`mx-auto ${centered ? "" : ""} h-1 w-16 rounded-full ${accentClasses[accentColor]} mb-5`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

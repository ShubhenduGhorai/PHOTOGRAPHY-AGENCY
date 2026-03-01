interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  alignment = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${alignment === "center" ? "text-center" : ""} ${className} animate-fade-in-up`}>
      {subtitle && (
        <span className="accent-text text-accent text-lg md:text-xl uppercase tracking-widest mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-foreground-secondary text-base md:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

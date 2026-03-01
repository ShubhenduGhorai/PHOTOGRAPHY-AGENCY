import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center 
    font-serif font-medium uppercase tracking-[0.15em]
    transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
  `;

  const variants = {
    primary: `
      bg-gold text-background
      hover:shadow-[0_0_30px_rgba(201,169,98,0.3)]
      hover:scale-[1.02]
      active:scale-[0.98]
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:translate-x-[-200%] hover:before:translate-x-[200%]
      before:transition-transform before:duration-700
    `,
    secondary: `
      bg-background-secondary text-foreground
      border border-border
      hover:border-accent/50 hover:text-accent
      hover:bg-background-tertiary
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent border border-accent/40 text-accent
      hover:bg-accent hover:text-background
      hover:border-accent
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-foreground-secondary
      hover:text-accent
    `,
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4.5 text-base",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}

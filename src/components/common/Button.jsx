import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  to,
  type = "button",
  icon: Icon,
  iconPosition = "left",
  animate = true,
  disabled = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50";

  const variants = {
    primary: "bg-brand-primary text-text-onBrand hover:bg-brand-deep rounded-lg",
    deep: "bg-brand-deep text-text-onBrand hover:bg-brand-darker rounded-lg",
    outline: "bg-transparent border border-text-onBrand text-text-onBrand hover:bg-bg-mute hover:text-brand-deep rounded-lg",
    outlinePrimary: "bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-text-onBrand rounded-lg",
    ghost: "text-text-muted hover:text-brand-primary bg-transparent",
    icon: "p-3 rounded-full bg-bg-mute text-brand-primary hover:bg-brand-primary hover:text-text-onBrand",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-base",
    md: "px-5 py-2 text-base",
    lg: "px-8 py-3 text-lg",
    icon: "p-2",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[variant === 'icon' ? 'icon' : size]} ${className}`;

  const InnerContent = () => (
    <>
      {Icon && iconPosition === "left" && <Icon className="size-5 shrink-0" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="size-5 shrink-0" />}
    </>
  );

  const motionProps = animate ? {
    whileHover: !disabled ? { scale: 1.02, boxShadow: variant !== 'ghost' && variant !== 'icon' ? "0 10px 20px var(--color-shadow-brand-strong)" : "none" } : {},
    whileTap: !disabled ? { scale: 0.98 } : {}
  } : {};

  if (to) {
    return (
      <Motion.div {...motionProps} className="inline-block">
        <Link to={to} className={buttonClasses} {...props}>
          <InnerContent />
        </Link>
      </Motion.div>
    );
  }

  if (href) {
    return (
      <Motion.a
        href={href}
        className={buttonClasses}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        {...motionProps}
        {...props}
      >
        <InnerContent />
      </Motion.a>
    );
  }

  return (
    <Motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...motionProps}
      {...props}
    >
      <InnerContent />
    </Motion.button>
  );
};

export default Button;

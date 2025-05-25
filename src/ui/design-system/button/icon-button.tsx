import clsx from "clsx";
import Image from "next/image";

interface IconButtonProps {
  icon: string;
  ariaLabel: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

export const IconButton = ({
  icon,
  ariaLabel,
  onClick,
  size = "medium",
  isLoading,
}: IconButtonProps) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-12 h-12",
  };

  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center rounded-full bg-[var(--color-sky-blue)] hover:bg-[var(--color-ocean-blue)] transition-colors",
        sizeClasses[size],
        isLoading && "cursor-wait pointer-events-none"
      )}
      disabled={isLoading}
    >
      <Image src={icon} alt="" width={24} height={24} />
    </button>
  );
};

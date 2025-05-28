import clsx from "clsx";
import Image from "next/image";
import { Spinner } from "../spinner/spinner";

interface Props {
  variant?: "topMenu" | "info" | "callAction" | "disabled" | "ico";
  icon?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
  variant = "topMenu",
  icon,
  isLoading,
  children,
  onClick,
}: Props) => {
  let variantStyles: string = "";

  switch (variant) {
    case "topMenu":
      variantStyles = "btn btn-topMenu";
      break;
    case "info":
      variantStyles = "btn btn-info";
      break;
    case "callAction":
      variantStyles = "btn btn-callAction";
      break;
    case "disabled":
      variantStyles = "btn btn-disabled";
      break;
    case "ico":
      variantStyles = "btn btn-ico";
      break;
  }

  return (
    <button
      type="button"
      className={clsx(
        "whitespace-nowrap",
        variantStyles,
        isLoading && "pointer-events-none",
        variant === "disabled" ? "cursor-not-allowed" : "cursor-pointer",
        "relative"
      )}
      disabled={variant === "disabled"}
      onClick={(e) => {
        if (variant === "disabled" || isLoading) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "topMenu" ? (
            <Spinner size="medium" />
          ) : (
            <Spinner size="medium" variant="secondary" />
          )}
        </div>
      )}

      <div className={clsx(isLoading && "invisible")}>
        {icon ? (
          <span className="relative flex items-center">
            {children}
            <span className="icon-container">
              <Image src={icon} alt="Icon" width={85} height={85} />
            </span>
          </span>
        ) : (
          children
        )}
      </div>
    </button>
  );
};

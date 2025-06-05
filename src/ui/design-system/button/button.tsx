import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Spinner } from "../spinner/spinner";

interface Props {
  variant?:
    | "topMenu"
    | "info"
    | "callAction"
    | "disabled"
    | "ico"
    | "callPhone"
    | "sendMessage";
  icon?: string | React.ReactNode;
  isLoading?: boolean;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
  variant = "topMenu",
  icon,
  isLoading,
  children,
  onClick,
  type = "button", // défaut = "button"
}: Props) => {
  const [isTouched, setIsTouched] = useState(false);

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
    case "callPhone":
      variantStyles = "btn btn-callPhone";
      break;
    case "sendMessage":
      variantStyles = "btn btn-sendMessage";
      break;
  }

  return (
    <button
      type={type}
      className={clsx(
        "whitespace-nowrap",
        variantStyles,
        isLoading && "pointer-events-none",
        variant === "disabled" ? "cursor-not-allowed" : "cursor-pointer",
        "relative",
        isTouched && "pressed"
      )}
      disabled={variant === "disabled"}
      onClick={(e) => {
        if (variant === "disabled" || isLoading) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        onClick?.(e);
      }}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 150)}
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
        {variant === "callPhone" && icon ? (
          <div className="flex items-center gap-2 justify-center">
            {typeof icon === "string" ? (
              <Image src={icon} alt="Icon" width={20} height={20} />
            ) : (
              icon
            )}
            <span>{children}</span>
          </div>
        ) : icon ? (
          <span className="relative flex items-center">
            {children}
            {typeof icon === "string" ? (
              <span className="icon-container">
                <Image src={icon} alt="Icon" width={85} height={85} />
              </span>
            ) : (
              <span className="icon-container">{icon}</span>
            )}
          </span>
        ) : (
          children
        )}
      </div>
    </button>
  );
};

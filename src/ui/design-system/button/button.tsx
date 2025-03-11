import clsx from "clsx";
import Image from "next/image";
import { Spinner } from "../spinner/spinner";

interface Props {
  variant?: "topMenu" | "info" | "callAction" | "disabled" | "ico";
  icon?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  variant = "topMenu",
  icon,
  isLoading,
  children,
}: Props) => {
  let variantStyles: string = "";

  switch (variant) {
    case "topMenu": // default
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
    <>
      <button
        type="button"
        className={clsx(variantStyles, isLoading && "pointer-events-none", "relative")}
        onClick={() => console.log("click")}
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
          {icon && (
            <span className="relative flex items-center">
              {children}
              <span className="icon-container">
                <Image src={icon} alt="Icon" width={85} height={85} />
              </span>
            </span>
          )}
          {!icon && children}
        </div>
      </button>
    </>
  );
};

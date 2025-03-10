import clsx from "clsx";
import Image from "next/image";

interface Props {
  variant?: "topMenu" | "info" | "callAction" | "disabled" | "ico";
  icon?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  variant = "topMenu",
  icon,
  disabled,
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
        className={clsx(variantStyles, "")}
        onClick={() => console.log("click")}
        disabled={disabled}
      >
        {icon && (
          <span className="relative flex items-center">
            {children}
            <span className="icon-container">
              <Image src={icon} alt="Icon" width={86.69} height={85} />
            </span>
          </span>
        )}
        {!icon && children}
      </button>
    </>
  );
};

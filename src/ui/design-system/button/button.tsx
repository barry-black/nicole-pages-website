import clsx from "clsx";

interface Props {
  variant?: "topMenu" | "info" | "callAction" | "disabled" | "ico";
  // icon?: any;
  iconTheme?: "topMenu" | "info" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  // size = "medium",
  variant = "topMenu",
  // icon,
  // iconTheme = "topMenu",
  // iconPosition = "right",
  disabled,
  // isLoading,
  children,
}: Props) => {
    let variantStyles: string = "";
    // let icoSizeStyles: number = 0;

    switch (variant) {
      case "topMenu": // default
        variantStyles = "btn-topMenu";
        break;
      case "info":
        variantStyles = "btn-info";
        break;
      case "callAction":
        variantStyles = "btn-callAction";
        break;
      case "disabled":
        variantStyles = "btn-disabled";
        break;
      case "ico":
        variantStyles = "";
        break;
    }

  return (
    <>
      <button
        type="button"
        className={clsx(variantStyles,"")}
        onClick={() => console.log("click")}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

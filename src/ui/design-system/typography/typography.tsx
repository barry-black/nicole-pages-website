import clsx from "clsx";

interface Props {
  variant?:
    | "ds-40"
    | "ds-50"
    | "ds-62-shadow"
    | "m-18"
    | "m-18-italic"
    | "m-19"
    | "m-20"
    | "m-24"
    | "m-32"
    | "m-36"
    | "m-40"
    | "m-88-shadow"
    | "m-96";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?: "black" | "white" | "pale-blue" | "ocean-blue";
  weight?: "regular" | "medium" | "semibold";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "m-18",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  children,
}: Props) => {
  let variantStyles: string = "";
  let colorStyles: string = "";

  switch (variant) {
    case "ds-40":
      variantStyles = "text-ds text-ds-40";
      break;
    case "ds-50":
      variantStyles = "text-ds text-ds-50";
      break;
    case "ds-62-shadow":
      variantStyles = "text-ds text-ds-62-shadow";
      break;
    case "m-18": // default
      variantStyles = "text-m text-m-18";
      break;
    case "m-18-italic":
      variantStyles = "text-m text-m-18-italic";
      break;
    case "m-19":
      variantStyles = "text-m text-m-19";
      break;
    case "m-20":
      variantStyles = "text-m text-m-20";
      break;
    case "m-24":
      variantStyles = "text-m text-m-24";
      break;
    case "m-32":
      variantStyles = "text-m text-m-32";
      break;
    case "m-36":
      variantStyles = "text-m text-m-36";
      break;
    case "m-40":
      variantStyles = "text-m text-m-40";
      break;
    case "m-88-shadow":
      variantStyles = "text-m text-m-88-shadow";
      break;
    case "m-96":
      variantStyles = "text-m text-m-96";
      break;
  }

  switch (theme) {
    case "black": // default
      colorStyles = "text-black";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "pale-blue":
      colorStyles = "text-pale-blue";
      break;
    case "ocean-blue":
      colorStyles = "text-ocean-blue";
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        colorStyles,
        weight === "regular" && "font-normal",
        weight === "medium" && "font-medium",
        weight === "semibold" && "font-semibold",
        className
      )}
    >
      {children}
    </Component>
  );
};

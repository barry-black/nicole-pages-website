import clsx from "clsx";

interface Props {
  variant?:
    | "ds-40-semibold"
    | "ds-40-bold"
    | "ds-50-semibold"
    | "ds-62-semibold"
    | "m-18-mediumitalic"
    | "m-18-medium"
    | "m-19-regular"
    | "m-20-medium"
    | "m-24-semibold"
    | "m-32-regular"
    | "m-32-semibold"
    | "m-36-medium"
    | "m-40-semibold"
    | "m-88-semibold"
    | "m-96-semibold";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?: "black" | "gray" |"white" | "secondary";
  weight?: "regular" | "medium";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "m-19-regular",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  children,
}: Props) => {
  let variantStyles: string = "";

  switch (variant) {
    case "ds-40-semibold":
      variantStyles = "text-red-500";
      break;
    case "ds-40-bold":
      variantStyles = "text-green-500";
      break;
    default:
      break;
  }

  return (
    <Component className={clsx(variantStyles, weight === "medium" && "font=medium", className)}>{children}</Component>
  );
};
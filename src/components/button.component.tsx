import React from "react";
import { Icon } from "../components/icon.component";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: "filled" | "outline";
  text?: string;
  icon?: string;
  iconSize?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
};

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  type = "filled",
  children,
  text,
  icon,
  iconSize,
  ...props
}: ButtonProps) => {
  const className = `${
    type === "filled"
      ? `bg-primary text-white`
      : "border text-primary border-primary"
  } py-2 px-3 rounded-md w-full ${props.disabled ? "opacity-25" : ""}`;

  return (
    <button className={!icon ? className : ""} {...props}>
      {icon && <Icon name={icon} size={iconSize} />}
      {text && text}
      {children}
    </button>
  );
};

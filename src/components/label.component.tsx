import React from "react";
import { IconsSvg } from "./iconsSvg.component";

type LabelProps = React.HTMLProps<HTMLLabelElement> & {
  text: string;
  color?: string;
  fontSize?: "xsmall" | "small" | "medium" | "large";
  icon?: string;
  after?: boolean;
  underline?: boolean;
  addClassName?: string;
};

type NewLabelProps = {
  color?: string;
  fontSize?: "xsmall" | "small" | "medium" | "large";
  bold?: boolean;
};

export const NewLabel: React.FC<React.PropsWithChildren<NewLabelProps>> = (
  props
) => {
  const classNames = {
    xsmall: "text-xs",
    small: "text-sm",
    medium: "text-base",
    large: "text-xl",
  };
  const fontSize = props.fontSize ? classNames[props.fontSize] : "text-sm";

  const textColors: any = {
    primary: "text-primary",
    secondary: "text-gray-500", // change with color when works styles
    alternative: "text-alternative",
    white: "text-white",
  };

  const textColor = props.color ? textColors[props.color] : "text-primary";

  return (
    <label
      className={`${textColor} ${fontSize} ${props.bold ? "font-bold" : null} `}
    >
      {props.children}
    </label>
  );
};

export const Label = ({
  text,
  color = "primary",
  fontSize = "small",
  icon,
  after = false,
  underline = false,
  addClassName,
  ...props
}: LabelProps) => {
  const classNames = {
    xsmall: "text-xs",
    small: "text-sm",
    medium: "text-base",
    large: "text-xl",
  };

  const textColors: any = {
    primary: "text-primary",
    secondary: "text-gray-500", // change with color when works styles
    alternative: "text-alternative",
    white: "text-white",
  };

  const styles = classNames[fontSize];
  const textColor = textColors[color];

  return (
    <label
      className={`${styles} ${
        underline ? "underline" : ""
      } flex items-center gap-x-2 ${textColor} ${addClassName}`}
      {...props}
    >
      {icon && !after && IconsSvg[icon]}
      {text}
      {icon && after && IconsSvg[icon]}
    </label>
  );
};

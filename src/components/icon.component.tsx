import { IconsSvg } from "./iconsSvg.component";
import { keysIcons } from "../management/pages/viewAccount/chooseIcon";
import { useId } from "react";

const sizes = {
  small: "h-3 w-3",
  medium: "h-7 w-7",
  large: "h-12 w-12",
  xlarge: "h-20 w-20",
  xxlarge: "h-24 w-24",
};

export const Icon = ({
  name,
  size = "small",
  addClassName,
  background = false,
}: {
  name: string;
  size?: keyof typeof sizes;
  addClassName?: string;
  background?: boolean;
}) => {
  const id = useId();
  const icon = IconsSvg[name];
  console.log({icon})
  
  const newIcon = {
    ...icon,
    props: { ...icon.props, className: `${sizes[size]} ${addClassName}` },
  };

  
  
  if (background) {
    const backgroundColor = keysIcons.find(
      (icon) => icon.name === name
      )?.backgroundColor;
      console.log({backgroundColor})
    return (
      <div className="flex items-center justify-center">
        <div
          style={{ backgroundColor }}
          className={`p-5 rounded-full`}
        >
          {newIcon}
        </div>
      </div>
    );
  }

  return newIcon;
};

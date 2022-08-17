import React from "react";
import { Button } from "./button.component";
import { Icon } from "./icon.component";

type AlertProps = {
  type?: "success" | "error" | "warning" | "info";
  message: string;
  textButton?: string;
  onClick?: () => void;
};

export const Alert = ({
  type = "error",
  message,
  textButton,
  onClick,
}: AlertProps) => {
  const icon: any = {
    error: "x-circle",
    info: "alert",
  };

  return (
    <div
      style={{ backgroundColor: type === "info" ? "#D8D0FF" : "#FDDFDF" }}
      className="flex items-center justify-between px-2 py-2 mx-2 mt-4 rounded-md gap-x-2 text-primary"
    >
      <Icon name={icon[type]} size="medium" />
      <p className="break-words">{message}</p>
      {textButton && (
        <div className="w-40">
          <Button type="outline" text={textButton} />
        </div>
      )}
    </div>
  );
};

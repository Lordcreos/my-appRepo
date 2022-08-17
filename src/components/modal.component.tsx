import React from "react";
import ResponsiveModal, {
  ModalProps as ResponsiveModalProps,
} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Label } from "./label.component";

type ModalProps = ResponsiveModalProps & {
  title?: string;
  openComponent?: React.ReactNode;
};

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  title,
  openComponent,
  children,
  ...props
}) => {
  return (
    <>
      {openComponent ? openComponent : null}
      {title ? <Label text={title} /> : null}
      <ResponsiveModal {...props}>{children}</ResponsiveModal>
    </>
  );
};

import { useState } from "react";
import { CloseButton, AlertIcon, Transition } from "@components/shared";
import { ambientBox } from "@components/util";
import { cx } from "@twind/core";

const base = {
  container: `p-4 border rounded max-w-xs`,
  title: `flex-auto text-sm font-semibold`,
  description: `mt-1 text-xs`,
};

const types: Record<AlertType, string> = {
  info: ambientBox("gray"),
  success: ambientBox("green"),
  warning: ambientBox("yellow"),
  danger: ambientBox("red"),
};

type Props = {
  text: string | JSX.Element;
  icon?: boolean;
  type?: keyof typeof types;
  styles?: StyleOverride<typeof base>;
  children?: string | JSX.Element;
  closeable?: boolean;
  onClose?: () => void;
};

export const Alert = ({
  children,
  text,
  icon,
  type = "info",
  styles,
  closeable,
  onClose,
}: Props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  return (
    <Transition
      show={show}
      role="alert"
      className={cx(base.container, styles?.container, types[type])}
    >
      <div className={`flex space-x-1.5`}>
        {icon ? <AlertIcon type={type} /> : null}
        <strong className={cx(base.title, styles?.title)}>{text}</strong>
        {closeable ? <CloseButton onClick={handleClose} /> : null}
      </div>

      {children ? <div className={base.description}>{children}</div> : <></>}
    </Transition>
  );
};

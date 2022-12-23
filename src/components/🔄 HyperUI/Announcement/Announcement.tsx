import { useState } from "react";
import { cx } from "@twind/core";
import { CloseButton, Transition } from "@/components/shared";

const base = {
  container: `grid grid-cols-5 px-4 py-3 text-white bg-indigo-600`,
  content: `col-start-2 col-end-5 text-sm font-medium text-center`,
  closeButton: "col-start-5 ml-auto",
};

type Props = {
  children: React.ReactNode;
  closeable?: boolean;
  styles?: StyleOverride<typeof base>;
};

export const Announcement = ({ children, styles, closeable }: Props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <Transition
      show={show}
      onEnter="slideDown"
      onLeave="slideUp"
      className={cx(base.container, styles?.container)}
    >
      <p className={cx(base.content, styles?.content)}>{children}</p>

      {closeable ? (
        <CloseButton
          styles={{ button: base.closeButton }}
          onClick={handleClose}
        />
      ) : (
        <></>
      )}
    </Transition>
  );
};

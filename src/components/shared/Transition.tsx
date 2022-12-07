import { Transition as HeadlessTransition } from "@headlessui/react";

const transitions = {
  onEnter: {
    fadeIn: {
      enter: `transition-opacity duration-75`,
      enterFrom: `opacity-0`,
      enterTo: `opacity-100`,
    },
    slideUp: {
      enter: `transform transition ease-in-out duration-500`,
      enterFrom: `translate-y-24`,
      enterTo: `translate-y-0`,
    },
    slideDown: {
      enter: `transform transition ease-in-out duration-500`,
      enterFrom: `-translate-y-24`,
      enterTo: `translate-y-0`,
    },
  },
  onLeave: {
    fadeOut: {
      leave: `transition-opacity duration-150`,
      leaveFrom: `opacity-100`,
      leaveTo: `opacity-0`,
    },
    slideDown: {
      leave: `transform transition ease-in-out duration-500`,
      leaveFrom: `translate-y-0`,
      leaveTo: `translate-y-24`,
    },
    slideUp: {
      leave: `transform transition ease-in-out duration-500`,
      leaveFrom: `translate-y-0`,
      leaveTo: `-translate-y-24`,
    },
    slideLeft: {
      leave: `transform transition ease-in-out duration-500`,
      leaveFrom: `opacity-100 translate-x-0`,
      leaveTo: `opacity-0 -translate-x-24`,
    },
    slideRight: {
      leave: `transform transition ease-in-out duration-500`,
      leaveFrom: `opacity-100 translate-x-0`,
      leaveTo: `opacity-0 translate-x-24`,
    },
  },
};

type Props = {
  show?: boolean;
  onEnter?: keyof typeof transitions.onEnter;
  onLeave?: keyof typeof transitions.onLeave;
  children: JSX.Element | JSX.Element[];
} & { [key: string]: any };

export const Transition = ({
  show,
  children,
  onEnter = "fadeIn",
  onLeave = "fadeOut",
  ...props
}: Props) => (
  <HeadlessTransition
    show={show}
    {...transitions.onEnter[onEnter]}
    {...transitions.onLeave[onLeave]}
    {...props}
  >
    {children}
  </HeadlessTransition>
);

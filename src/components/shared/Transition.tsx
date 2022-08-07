import React from "react"
import { tw } from "@components/util"
import { Transition as HeadlessTransition } from "@headlessui/react"

const transitions = {
  onEnter: {
    fadeIn: {
      enter: tw`transition-opacity duration-75`,
      enterFrom: tw`opacity-0`,
      enterTo: tw`opacity-100`,
    },
    slideUp: {
      enter: tw`transform transition ease-in-out duration-500`,
      enterFrom: tw`translate-y-24`,
      enterTo: tw`translate-y-0`,
    },
    slideDown: {
      enter: tw`transform transition ease-in-out duration-500`,
      enterFrom: tw`-translate-y-24`,
      enterTo: tw`translate-y-0`,
    },
  },
  onLeave: {
    fadeOut: {
      leave: tw`transition-opacity duration-150`,
      leaveFrom: tw`opacity-100`,
      leaveTo: tw`opacity-0`,
    },
    slideDown: {
      leave: tw`transform transition ease-in-out duration-500`,
      leaveFrom: tw`translate-y-0`,
      leaveTo: tw`translate-y-24`,
    },
    slideUp: {
      leave: tw`transform transition ease-in-out duration-500`,
      leaveFrom: tw`translate-y-0`,
      leaveTo: tw`-translate-y-24`,
    },
    slideLeft: {
      leave: tw`transform transition ease-in-out duration-500`,
      leaveFrom: tw`opacity-100 translate-x-0`,
      leaveTo: tw`opacity-0 -translate-x-24`,
    },
    slideRight: {
      leave: tw`transform transition ease-in-out duration-500`,
      leaveFrom: tw`opacity-100 translate-x-0`,
      leaveTo: tw`opacity-0 translate-x-24`,
    },
  },
}

type Props = {
  show?: boolean
  onEnter?: keyof typeof transitions.onEnter
  onLeave?: keyof typeof transitions.onLeave
  children: JSX.Element | JSX.Element[]
} & { [key: string]: any }

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
)

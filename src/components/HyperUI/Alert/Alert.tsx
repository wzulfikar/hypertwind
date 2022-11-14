import { useState } from "react"
import { CloseButton, AlertIcon, Transition } from "@components/shared"
import { apply, tw, ambientBox } from "@components/util"

const base = {
  container: apply`p-4 border rounded max-w-xs`,
  title: apply`flex-auto text-sm font-medium`,
  description: apply`mt-1 text-xs`,
}

const types: Record<AlertType, string> = {
  info: ambientBox("gray"),
  success: ambientBox("green"),
  warning: ambientBox("yellow"),
  danger: ambientBox("red"),
}

type Props = {
  text: string | JSX.Element
  icon?: boolean
  type?: keyof typeof types
  styles?: StyleOverride<typeof base>
  children?: string | JSX.Element
  closeable?: boolean
  onClose?: () => void
}

export const Alert = ({
  children,
  text,
  icon,
  type = "info",
  styles,
  closeable,
  onClose,
}: Props) => {
  const [show, setShow] = useState(true)
  const handleClose = () => {
    setShow(false)
    if (onClose) onClose()
  }

  return (
    <Transition
      show={show}
      role="alert"
      className={tw(base.container, styles?.container, types[type])}
    >
      <div className={tw`flex space-x-1.5`}>
        {icon ? <AlertIcon type={type} /> : null}
        <strong className={tw(base.title, styles?.title)}>{text}</strong>
        {closeable ? <CloseButton onClick={handleClose} /> : null}
      </div>

      {children ? (
        <div className={tw(base.description)}>{children}</div>
      ) : (
        <></>
      )}
    </Transition>
  )
}

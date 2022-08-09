import { useState } from "react"
import { apply, tw } from "@components/util"
import { CloseButton, Transition } from "@components/shared"

const base = {
  container: apply`flex justify-center px-4 py-3 text-white bg-indigo-600`,
  content: apply`text-sm font-medium text-center`,
  closeButton: "ml-auto",
}

type Props = {
  children: React.ReactNode
  closeable?: boolean
  styles?: StyleOverride<typeof base>
}

export const Announcement = ({ children, styles, closeable }: Props) => {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)

  return (
    <Transition
      show={show}
      onEnter="slideDown"
      onLeave="slideUp"
      className={tw(base.container, styles?.container)}
    >
      <p className={tw(base.content, styles?.content)}>{children}</p>

      {closeable ? (
        <CloseButton
          styles={{ button: base.closeButton }}
          onClick={handleClose}
        />
      ) : (
        <></>
      )}
    </Transition>
  )
}

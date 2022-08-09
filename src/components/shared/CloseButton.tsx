import { apply, tw } from "@components/util"
import * as SvgPaths from "@components/shared/SvgPaths"

const base = {
  button: apply`opacity-90`,
}

type Props = {
  styles?: StyleOverride<typeof base>
  onClick: () => void
}

export const CloseButton = ({ onClick, styles }: Props) => (
  <button
    className={tw(base.button, styles?.button)}
    aria-label="close"
    type="button"
    onClick={onClick}
  >
    <svg
      className={tw`w-4 h-4`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      {SvgPaths.x}
    </svg>
  </button>
)

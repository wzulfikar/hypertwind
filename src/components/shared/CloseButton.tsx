import { tw } from "@components/util"
import * as SvgPaths from "@components/shared/SvgPaths"

type Props = {
  onClick: () => void
}

export const CloseButton = ({ onClick }: Props) => (
  <button
    className={tw`opacity-90`}
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

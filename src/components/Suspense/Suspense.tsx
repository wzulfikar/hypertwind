import { apply, tw } from "@components/util"

const base = {
  spinner: apply`animate-spin h-5 w-5`,
}

const colors = {
  light: "text-white",
  dark: "text-gray-600",
}

type Props = {
  isLoading: boolean
  error?: string
  children?: React.ReactNode
  spinnerColor?: "light" | "dark"
}

const Spinner = ({ spinnerColor = "dark" }: Pick<Props, "spinnerColor">) => (
  <svg
    className={tw(base.spinner, colors[spinnerColor])}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className={tw`opacity-25`}
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      className={tw`opacity-75`}
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
)

export const Suspense = ({
  isLoading,
  error,
  spinnerColor,
  children,
}: Props) => {
  if (isLoading) return <Spinner spinnerColor={spinnerColor} />
  if (error) return <span>Error: {error}</span>

  return <>{children}</>
}

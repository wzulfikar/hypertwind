import { apply, tw } from "@components/util"

const base = {
  container: apply`bg-gray-100 inline-flex items-center px-3 py-1.5 space-x-2 rounded-full`,
  text: apply`text-[12px] font-medium`,
  image: apply`object-cover w-6 h-6 rounded-full`,
}

const imageLayouts = {
  left: "-ml-1.5 mr-.5",
  right: "ml-1.5 -mr-1.5",
}

type Props = {
  children: string
  image?: string
  imageLayout?: "left" | "right"
  styles?: StyleOverride<typeof base>
}

export const Pill = ({
  children,
  styles,
  image,
  imageLayout = "left",
}: Props) => {
  return (
    <strong
      className={tw(
        base.container,
        imageLayout === "right" && "flex-row-reverse",
        imageLayout === "right" ? "pl-2" : "pl-3",
        styles?.container
      )}
    >
      {image ? (
        <img
          className={tw(base.image, imageLayouts[imageLayout])}
          src={image}
          alt={children}
        />
      ) : (
        <></>
      )}
      <span className={tw(base.text)}>{children}</span>
    </strong>
  )
}

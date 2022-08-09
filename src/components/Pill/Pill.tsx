import { apply, tw } from "@components/util"

const base = {
  container: apply`bg-gray-100 inline-flex items-center px-4 py-1.5 space-x-2 rounded-full`,
  text: apply`text-[12px] font-medium`,
  image: apply`object-cover w-6 h-6 rounded-full`,
}

const imageLayouts = {
  left: "-ml-2.5 mr-2.5",
  right: "ml-2.5 -mr-2.5",
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

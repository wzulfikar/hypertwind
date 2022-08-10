import { story } from "@storybook-util"
import { tw } from "@components/util"
import { MultiStep } from "."

export default story(MultiStep)

const steps: React.ComponentProps<typeof MultiStep>["steps"] = [
  {
    name: "1. Create account",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "done",
  },
  {
    name: "2. Profile information",
    description: "Cursus semper viverra facilisis et et some more.",
    href: "#",
    status: "doing",
  },
  {
    name: "3. Business information",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "todo",
  },
  {
    name: "4. Theme",
    description: "Faucibus nec enim leo et.",
    href: "#",
    status: "todo",
  },
  {
    name: "5. Preview",
    description: "Iusto et officia maiores porro ad non quas.",
    href: "#",
    status: "todo",
  },
]

export const Basic = () => <MultiStep steps={steps} />

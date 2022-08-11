import { story } from "@storybook-util"
import { HiEye, HiAtSymbol } from "react-icons/hi"
import { tw } from "@components/util"
import { StackedForm } from "."

export default story(StackedForm)

const fields = [
  { name: "email", type: "email" as const, Icon: HiAtSymbol, required: true },
  { name: "password", type: "password" as const, Icon: HiEye, required: true },
  { name: "phone" },
]

export const Basic = () => (
  <StackedForm
    onSubmit={(data) => console.log("form submitted:", data)}
    title="Sign in to continue"
    fields={fields}
  >
    <button
      type="submit"
      className={tw(
        "block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
      )}
    >
      Sign in
    </button>

    <p className={tw("text-sm text-center text-gray-500")}>
      No account?
      <a className={tw("underline")} href="">
        Sign up
      </a>
    </p>
  </StackedForm>
)

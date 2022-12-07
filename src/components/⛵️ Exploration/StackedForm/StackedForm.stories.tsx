import { story } from "@storybook-util";
import { HiEye, HiAtSymbol } from "react-icons/hi";
import { StackedForm } from ".";

export default story(StackedForm);

const fields = [
  {
    name: "email",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    type: "email" as const,
    Icon: HiAtSymbol,
    required: true,
  },
  { name: "password", type: "password" as const, Icon: HiEye, required: true },
  { name: "phone" },
];

export const Basic = () => (
  <StackedForm
    onSubmit={(data) => console.log("form submitted:", data)}
    title="Sign in to Acme Corp"
    description="Lorem Ipsum has been the industry standard dummy text ever since the 1500s."
    fields={fields}
  >
    <button
      type="submit"
      className={
        "block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
      }
    >
      Sign in
    </button>

    <p className={"text-sm text-center text-gray-500"}>
      No account?
      <a className={"underline"} href="">
        Sign up
      </a>
    </p>
  </StackedForm>
);

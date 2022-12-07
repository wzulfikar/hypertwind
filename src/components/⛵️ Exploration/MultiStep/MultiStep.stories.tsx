import { story } from "@storybook-util";
import { MultiStep } from ".";

export default story(MultiStep);

const steps: React.ComponentProps<typeof MultiStep>["steps"] = [
  {
    name: "1. Create account",
    description: "Vitae sed mi luctus laoreet.",
    status: "done",
  },
  {
    name: "2. Profile information",
    description: "Cursus semper viverra facilisis et et some more.",
    status: "doing",
  },
  {
    name: "3. Business information",
    description: "Penatibus eu quis ante.",
    status: "todo",
  },
  {
    name: "4. Theme",
    description: "Faucibus nec enim leo et.",
    status: "todo",
  },
  {
    name: "5. Preview",
    description: "Iusto et officia maiores porro ad non quas.",
    status: "todo",
  },
];

export const Basic = () => (
  <MultiStep steps={steps}>
    {({ step, idx }) => <div>Current step: {idx + 1}</div>}
  </MultiStep>
);

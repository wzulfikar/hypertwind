import { Alert } from ".";
import { story } from "@storybook-util";

export default story(Alert);

export const AlertTypes = () => (
  <div className={`space-y-2`}>
    <Alert text="Post has been published!" />
    <Alert type="success" text="Post has been published!" />
    <Alert type="warning" text="Post has been published!" />
    <Alert type="danger" text="Post has been deleted!" />
  </div>
);

export const WithIcon = () => (
  <div className={`space-y-2`}>
    <Alert icon text="Post has been published!" />
    <Alert icon type="success" text="Post has been published!" />
    <Alert icon type="warning" text="Post has been published!" />
    <Alert icon type="danger" text="Post has been deleted!" />
  </div>
);

export const WithStyleOverride = () => (
  <Alert
    type="danger"
    text="Post has been deleted!"
    styles={{ container: "text-center" }}
  />
);

export const WithDescription = () => (
  <Alert type="success" text="Post has been published!">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iderat
    eu nisl lobortis pretium.
  </Alert>
);

export const WithCloseButton = () => (
  <Alert
    type="success"
    text="Post has been published!"
    closeable
    onClose={() => console.log("closed!")}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iderat
    eu nisl lobortis pretium.
  </Alert>
);

export const WithCloseButtonAndIcon = () => (
  <Alert
    type="success"
    text="Post has been published!"
    icon
    closeable
    onClose={() => console.log("closed!")}
  >
    With icon
  </Alert>
);

export const WithList = () => (
  <Alert type="success" text="Post has been published!">
    <ul className={`mt-1 ml-2 text-xs list-disc list-inside`}>
      <li>Lorem ipsum dolor sit</li>
      <li>Lorem ipsum dolor sit amet</li>
      <li>Lorem ipsum dolor sit amet consectetur</li>
    </ul>
  </Alert>
);

export const WithLongText = () => (
  <Alert
    type="success"
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
);

export const DarkMode = () => (
  <div className="dark">
    <Alert type="success" text="Post has been published!">
      <ul className={`mt-1 ml-2 text-xs list-disc list-inside`}>
        <li>This is dark mode</li>
      </ul>
    </Alert>
  </div>
);

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { useState } from "react";
import WinBox, { WinBoxPropType } from "react-winbox";
import { Button } from "@ui/design/Button";
import { Link } from "@ui/design/Link";
import { P } from "@ui/typography/Paragraph";

type Variants = VariantProps<typeof style>;
export type WinboxProps = Variants & {};

export const style = cva([], {});

export const Winbox = ({ ...variants }: WinboxProps) => {
  const baseProps = {
    x: "center",
    y: "center",
  };
  const [windows, setWindows] = useState<WinBoxPropType[]>([
    {
      ...baseProps,
      id: "1",
      title: "Window 1 – use `icon` prop to show icon",
      icon: "https://icongr.am/feather/calendar.svg?size=128&color=ffffff",
    },
    {
      ...baseProps,
      id: "2",
      title: "Window 2 – use `url` prop to load example.com in iframe",
      url: "https://example.com",
      width: "50%",
      height: "50%",
    },
    {
      ...baseProps,
      id: "3",
      title: "Window 3 – custom children",
      children: (
        <div className="h-full grid justify-center items-center text-lg text-blue-500">
          Hello world!
        </div>
      ),
    },
    {
      ...baseProps,
      id: "4",
      title: "Window 4 – no shadow",
      noShadow: true,
    },
  ]);

  // State to determine if window is opened
  const [isWindowOpen, setIsWindowOpen] = useState<Record<string, boolean>>({});

  const handleClose = (force: boolean, windowId: string) => {
    setIsWindowOpen((state) => ({ ...state, [windowId]: false }));
  };

  const handleOpenWindow = (windowId: number) => {
    setIsWindowOpen((state) => ({ ...state, [windowId]: true }));
  };

  return (
    <div>
      <P>
        This is a demo of Winbox in React.{" "}
        <Link href="https://github.com/nextapps-de/winbox">Winbox library</Link>{" "}
        is framework-agnostic. This demo uses{" "}
        <Link
          href="https://github.com/rickonono3/react-winbox"
          format="github"
        />{" "}
        which wraps Winbox library in React.
        <br />
        Click the button to open a window:
      </P>
      <br />
      <div>
        <ol className="grid gap-3">
          {windows.map((window, i) => (
            <li key={window.id}>
              <Button onClick={() => handleOpenWindow(window.id)}>
                {window.title}
              </Button>
            </li>
          ))}
        </ol>
      </div>
      <br />

      {windows.map(({ id, ...props }) =>
        isWindowOpen[id] ? (
          <WinBox
            key={id}
            id={id}
            onclose={(force) => handleClose(force, id)}
            {...props} // assign any props you want to WinBox
          >
            {props.children || <div>Some children</div>}
          </WinBox>
        ) : null
      )}
    </div>
  );
};

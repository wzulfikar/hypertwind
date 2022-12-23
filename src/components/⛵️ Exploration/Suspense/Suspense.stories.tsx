import { story } from "@storybook-util";
import { useState, useEffect } from "react";
import { Suspense } from ".";
import { Button } from "@/components";

export default story(Suspense);

const useWait = (delayMs: number, onFinish: () => void) =>
  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, delayMs);
  }, []);

export const Basic = () => {
  const [isLoading, setIsLoading] = useState(true);
  useWait(1000, () => setIsLoading(false));

  if (isLoading) return <Suspense isLoading={isLoading} />;

  return <div>Loaded!</div>;
};

export const AsWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);
  useWait(1000, () => setIsLoading(false));

  return (
    <Suspense isLoading={isLoading}>
      <div>Loaded!</div>
    </Suspense>
  );
};

export const Loading = () => {
  return (
    <Suspense isLoading={true}>
      <div>This content will not be shown</div>
    </Suspense>
  );
};

export const WithError = () => {
  const [isLoading, setIsLoading] = useState(true);
  useWait(1000, () => setIsLoading(false));

  return (
    <Suspense isLoading={isLoading} error="Something went wrong">
      <div>This content will not be shown</div>
    </Suspense>
  );
};

export const WithButton = () => {
  return (
    <Button styles={{ button: "flex gap-1 items-center" }}>
      <Suspense isLoading={true} spinnerColor="light" />
      Processing..
    </Button>
  );
};

export const DarkMode = () => {
  return (
    <div className="dark">
      <Button styles={{ button: "flex gap-1 items-center" }}>
        <Suspense isLoading={true} spinnerColor="light" />
        Processing..
      </Button>
    </div>
  );
};

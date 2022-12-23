import { Spinner } from "@/components/shared";

type Props = {
  isLoading: boolean;
  error?: string;
  children?: React.ReactNode;
  spinnerColor?: React.ComponentProps<typeof Spinner>["color"];
};

export const Suspense = ({
  isLoading,
  error,
  spinnerColor,
  children,
}: Props) => {
  if (isLoading) return <Spinner color={spinnerColor} />;
  if (error) return <span>Error: {error}</span>;

  return <>{children}</>;
};

declare type StyleOverride<TBaseStyle extends string> = Partial<
  Record<TBaseStyle, string>
>;

declare type AlertType = "info" | "success" | "warning" | "danger";

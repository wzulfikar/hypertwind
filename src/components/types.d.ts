declare type StyleOverride<TBaseStyle> = Partial<
  Record<keyof TBaseStyle, string>
>

declare type AlertType = "info" | "success" | "warning" | "danger"

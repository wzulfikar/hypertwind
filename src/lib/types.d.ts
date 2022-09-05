declare type Suggest<T extends string> =
  | T
  | Omit<string, T>

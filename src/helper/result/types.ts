export type Result<TOk, TError extends Error> = TOk | TError;

export type Ok<T> = {
  ok: true;
} & T;

export type ErrorFunc<T extends ErrorMap> = (kind: keyof T, ctx?: string) => Error<T>;

export type ErrorMap = Readonly<Record<string, string>>;

type Error<TErrorMap extends ErrorMap = any> = {
  ok: false;
  error: {
    kind: keyof TErrorMap;
    message: TErrorMap[keyof TErrorMap];
  };
};

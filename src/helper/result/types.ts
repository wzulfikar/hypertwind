export type Result<TOk, TError extends Error> = TOk | TError;

export type Ok<T> = {
  ok: true;
} & T;

export type ErrorMap<TMap extends Record<string, string> = any> = Readonly<TMap>;

export type ErrorFunc<TErrorMap extends ErrorMap> = <TKind extends keyof TErrorMap, TArgs extends [kind: TKind, ctx?: string]>(...args: TArgs) => {
  ok: false,
  error: TArgs[1] extends string ? {
    kind: TArgs[0],
    message: TErrorMap[TArgs[0]],
    ctx: TArgs[1]
  } : {
    kind: TArgs[0],
    message: TErrorMap[TArgs[0]],
  }
};

type Error = ReturnType<ErrorFunc<any>>

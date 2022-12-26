import type { Ok, ErrorFunc } from "./types";

export type { Ok, Result } from "./types";

/**
 * Return successful result indicated by `ok: true`
 * and the corresponding data.
 */
export const ok = <TOk>(result: TOk): Ok<TOk> => ({
  ok: true as const,
  ...result
})

/**
 * Define possible errors and return an `error` function.
 */
export const defineErrors = <
  Key extends string,
  Value extends string,
  TErrorMap extends Record<Key, Value>
>(
  errorMap: TErrorMap
): ErrorFunc<TErrorMap> => {
  return (kind, ctx?: string) => ({
    ok: false as const,
    error: {
      kind: kind,
      message: errorMap[kind],
      ctx: ctx
    }
  });
};

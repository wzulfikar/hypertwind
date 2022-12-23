import type { Ok, ErrorFunc, ErrorMap } from "./types";

export type { Ok, Result } from "./types";

/**
 * Return successful result indicated by `ok: true`
 * and the corresponding data.
 */
export function ok<TOk>(result: TOk): Ok<TOk> {
  return {
    ok: true as const,
    ...result
  };
}

/**
 * Define possible errors and return an `error` function.
 */
export const defineErrors = <TErrorMap extends ErrorMap>(
  errorMap: TErrorMap
): ErrorFunc<TErrorMap> => {
  return (kind: keyof TErrorMap, context?: string) => ({
    ok: false as const,
    error: {
      kind: kind,
      message: errorMap[kind],
      context: context
    }
  });
};

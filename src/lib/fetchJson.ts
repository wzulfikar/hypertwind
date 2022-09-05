import { z } from "zod"

type ApiResult<TData extends z.AnyZodObject = any> =
  | (TData extends any
      ? { success: true }
      : { success: true; data: z.infer<TData> })
  | { success: false; error: string }

type Args<TSchema extends z.AnyZodObject = any> = {
  body?: z.infer<TSchema>["body"]
  authorization?: string
  authToken?: string
  signal?: AbortSignal
}

export const fetchJson = async <
  TSchema extends z.AnyZodObject,
  TResponse extends z.AnyZodObject = any
>(
  url: string,
  { body, authorization = "", authToken, signal }: Args<TSchema> = {}
): Promise<TResponse extends z.AnyZodObject ? ApiResult<TResponse> : any> => {
  const result = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      authorization: authToken ? `Bearer ${authToken}` : authorization,
    },
    method: body ? "POST" : "GET",
    body: body ? JSON.stringify(body) : undefined,
    signal: signal,
  })
  const json = await result.json()

  return json
}

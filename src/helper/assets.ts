import { url } from "./url"

export const assets = <T extends string>(path: T) => url(`/assets/${path}`)

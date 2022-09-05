import * as appConfig from "@config/app"
import { faker } from "@faker-js/faker"
import * as factories from "@test/factories"
import fetch from "isomorphic-unfetch"
import { z } from "zod"

import * as date from "@lib/date"
import { fetchJson } from "@lib/fetchJson"

// Expose factories as `factory.user`, `factory.event`, etc.
const factory = {}
for (const key in factories) {
  factory[key.replace("Factory", "")] = factories[key]
}

// Create function to load config object. Include `app` config by default.
const config = (config: string) => import(`@configs/${config}`)
config.app = appConfig

// Create function to load lib packages. Include `date` lib by default.
const lib = (lib: string) => import(`@lib/${lib}`)
lib.date = date

const replContext = {
  faker,
  fetch,
  fetchJson,
  config,
  print: console.log,
  factory,
  lib,
  service: (service: string) => import(`@services/${service}`),
  z,
}

;(global as any).replContext

for (const ctx in replContext) {
  global[ctx] = replContext[ctx]
}

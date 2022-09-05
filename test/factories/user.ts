import { faker } from "@faker-js/faker"
import { Factory } from "fishery"

type User = {
  id: string
  name: string
  avatar: string
}

export const userFactory = Factory.define<User>(({ sequence }) => {
  return {
    id: sequence.toString(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
  }
})

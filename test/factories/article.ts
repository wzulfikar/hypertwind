import { faker } from "@faker-js/faker"
import { Factory } from "fishery"

type Article = {
  id: string
  website: string
  title: string
  description: string
  image: string
}

export const articleFactory = Factory.define<Article>(({ sequence }) => {
  return {
    id: sequence.toString(),
    website: faker.internet.domainName(),
    title: faker.lorem.lines(1),
    description: faker.lorem.paragraph(),
    image: faker.image.business(640, 480, true),
  }
})

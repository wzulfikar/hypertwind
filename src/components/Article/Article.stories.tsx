import { story } from "@storybook-util"
import { tw } from "@components/util"
import { Article } from "."

export default story(Article)

export const Basic = () => (
  <Article
    href="#"
    ticker="website.com"
    title="How to position your furniture for positivity"
    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid accusamus? Sint, sequi voluptas."
    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  />
)

export const Multiple = () => {
  return (
    <div
      className={tw`grid grid-cols-1 space-y-4 sm:(grid-cols-2 gap-2 grid-flow-row place-content-center) max-w-2xl`}
    >
      {Array(5)
        .fill(null)
        .map(() => (
          <Article
            href="#"
            ticker="website.com"
            title="How to position your furniture for positivity"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid accusamus? Sint, sequi voluptas."
            image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            styles={{ container: "m-3" }}
          />
        ))}
    </div>
  )
}

export const DarkMode = () => (
  <div className="dark">
    <Article
      href="#"
      ticker="website.com"
      title="How to position your furniture for positivity"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid accusamus? Sint, sequi voluptas."
      image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    />
  </div>
)

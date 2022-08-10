import { useState } from "react"
import { css } from "twind/css"
import { apply, tw } from "@components/util"

import { HiCheck, HiChevronUp, HiChevronDown } from "react-icons/hi"

const base = {
  nav: apply`flex gap-1 items-center`,
  container: apply`relative flex items-start group`,
  step: apply`relative z-10 w-8 h-8 flex items-center justify-center hidden sm:flex`,
  stepLine: apply`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300 hidden sm:flex`,
  stepContainer: apply`h-9 flex items-center`,
  stepContent: apply`ml-2 sm:ml-4 min-w-0 flex flex-col`,
  stepLabel: apply`text-xs font-semibold tracking-wide uppercase`,
  stepLabelDone: apply`text-indigo-600`,
  stepDescription: apply`text-sm`,
  mobileButton: apply`w-5 h-5 text-gray-400 hover:text-gray-500 bg-gray-200 rounded`,
}

const hideStepsInMobile = css({
  ".current": apply`flex`,
})

const colors = {
  red: "text-red-500",
  green: "text-green-500",
}

type Step = {
  name: string
  description?: string
  href: string
  status: "todo" | "doing" | "done"
}

type Props = {
  steps: Step[]
  color?: keyof typeof colors
  styles?: StyleOverride<typeof base>
}

export function MultiStep({ steps }: Props) {
  const [currentStep, setCurrentStep] = useState(
    steps.map(({ status }) => status).indexOf("doing") + 1
  )

  console.log("currentStep:", currentStep)

  return (
    <nav aria-label="Progress" className={tw(base.nav)}>
      <ol role="list" className={tw(hideStepsInMobile, "overflow-hidden w-64")}>
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={tw("relative hidden sm:flex", {
              current: stepIdx + 1 === currentStep,
              "sm:pb-10": stepIdx !== steps.length - 1,
            })}
          >
            {step.status === "done" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className={tw(base.stepLine, "bg-indigo-600")}
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className={tw(base.container)}>
                  <span className={tw(base.stepContainer)}>
                    <span
                      className={tw(
                        base.step,
                        "bg-indigo-600 rounded-full group-hover:bg-indigo-800"
                      )}
                    >
                      <HiCheck
                        className={tw("w-5 h-5 text-white")}
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className={tw(base.stepContent)}>
                    <span className={tw(base.stepLabel, base.stepLabelDone)}>
                      {step.name}
                    </span>
                    {step.description ? (
                      <span className={tw(base.stepDescription)}>
                        {step.description}
                      </span>
                    ) : (
                      <></>
                    )}
                  </span>
                </a>
              </>
            ) : step.status === "doing" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className={tw(base.stepLine)} aria-hidden="true" />
                ) : null}
                <a
                  href={step.href}
                  className={tw(base.container)}
                  aria-current="step"
                >
                  <span className={tw(base.stepContainer)} aria-hidden="true">
                    <span
                      className={tw(
                        base.step,
                        "bg-white border-2 border-indigo-600 rounded-full"
                      )}
                    >
                      <span
                        className={tw("h-2.5 w-2.5 bg-indigo-600 rounded-full")}
                      />
                    </span>
                  </span>
                  <span className={tw(base.stepContent)}>
                    <span className={tw(base.stepLabel, base.stepLabelDone)}>
                      {step.name}
                    </span>
                    <span className={tw(base.stepDescription)}>
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className={tw(base.stepLine)} aria-hidden="true" />
                ) : null}
                <a href={step.href} className={tw(base.container)}>
                  <span className={tw(base.stepContainer)} aria-hidden="true">
                    <span
                      className={tw(
                        base.step,
                        "bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400"
                      )}
                    >
                      <span
                        className={tw(
                          "h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                        )}
                      />
                    </span>
                  </span>
                  <span
                    className={tw(
                      base.stepContent,
                      "text-gray-500 group-hover:text-gray-600"
                    )}
                  >
                    <span className={tw(base.stepLabel)}>{step.name}</span>
                    <span className={tw(base.stepDescription)}>
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>

      <div className={tw("grid grid-rows-2 gap-2 sm:hidden")}>
        <button
          onClick={() =>
            setCurrentStep(currentStep > 1 ? currentStep - 1 : currentStep)
          }
        >
          <HiChevronUp className={tw(base.mobileButton)} aria-hidden="true" />
        </button>
        <button
          onClick={() =>
            setCurrentStep(
              currentStep < steps.length ? currentStep + 1 : currentStep
            )
          }
        >
          <HiChevronDown className={tw(base.mobileButton)} aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}

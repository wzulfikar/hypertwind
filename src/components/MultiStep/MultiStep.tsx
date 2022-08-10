import { useState, useCallback } from "react"
import { css } from "twind/css"
import { apply, tw } from "@components/util"

import { HiCheck, HiChevronUp, HiChevronDown } from "react-icons/hi"

const base = {
  nav: apply`flex gap-1 items-center`,
  link: apply`relative flex items-start group cursor-pointer`,
  step: apply`relative z-10 w-8 h-8 flex items-center justify-center hidden sm:flex border-gray-300 group-hover:border-gray-400 transition step`,
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
  ".current .step": apply`border-indigo-600`, // TODO: replace indigo-600 with accent from props
})

const colors = {
  red: "text-red-500",
  green: "text-green-500",
}

type Step = {
  name: string
  description?: string
  status: "todo" | "doing" | "done"
}

type Props = {
  steps: Step[]
  accent?: string
  color?: keyof typeof colors
  styles?: StyleOverride<typeof base>
  children?: any
}

export function MultiStep({ steps, accent = "indigo-600", children }: Props) {
  const [currentStep, setCurrentStep] = useState(
    steps.map(({ status }) => status).indexOf("doing") + 1
  )

  const currentIdx = currentStep - 1
  const ChildComponent = children
  console.log("currentStep:", currentStep)

  const updateStep = useCallback(
    (stepIdx: number) => () => {
      setCurrentStep(stepIdx + 1)
    },
    []
  )

  return (
    <section className={tw("grid grid-rows-2 sm:grid-cols-2 gap-1")}>
      <nav aria-label="Progress" className={tw(base.nav)}>
        <ol
          role="list"
          className={tw(hideStepsInMobile, "overflow-hidden w-64")}
        >
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
                      className={tw(base.stepLine, `bg-${accent}`)}
                      aria-hidden="true"
                    />
                  ) : null}
                  <a className={tw(base.link)} onClick={updateStep(stepIdx)}>
                    <span className={tw(base.stepContainer)}>
                      <span
                        className={tw(
                          base.step,
                          `bg-${accent} group-hover:bg-indigo-800`,
                          "rounded-full"
                        )}
                      >
                        <HiCheck
                          className={tw("w-5 h-5 text-white")}
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                    <span className={tw(base.stepContent)}>
                      <span className={tw(base.stepLabel, `text-${accent}`)}>
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
                    className={tw(base.link)}
                    aria-current="step"
                    onClick={updateStep(stepIdx)}
                  >
                    <span className={tw(base.stepContainer)} aria-hidden="true">
                      <span
                        className={tw(
                          base.step,
                          "bg-white border-2 rounded-full"
                        )}
                      >
                        <span
                          className={tw(
                            "h-2.5 w-2.5 bg-indigo-600 rounded-full"
                          )}
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
                  <a className={tw(base.link)} onClick={updateStep(stepIdx)}>
                    <span className={tw(base.stepContainer)} aria-hidden="true">
                      <span
                        className={tw(
                          base.step,
                          "bg-white border-2 rounded-full"
                        )}
                      >
                        <span
                          className={tw(
                            "h-2.5 w-2.5 rounded-full group-hover:bg-gray-300 transition",
                            stepIdx + 1 === currentStep
                              ? "bg-gray-300"
                              : "bg-transparent"
                          )}
                        />
                      </span>
                    </span>
                    <span
                      className={tw(
                        base.stepContent,
                        stepIdx + 1 === currentStep
                          ? "text-gray-600"
                          : "text-gray-500",
                        "group-hover:text-gray-600"
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
            <HiChevronDown
              className={tw(base.mobileButton)}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
      <div>
        <ChildComponent step={steps[currentIdx]} idx={currentIdx} />
      </div>
    </section>
  )
}

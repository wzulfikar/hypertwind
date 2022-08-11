import { useForm, FieldErrors } from "react-hook-form"
import { IconType } from "react-icons/lib"
import { apply, tw, capitalize } from "@components/util"

const base = {
  input: apply`w-full p-4 pr-12 text-sm border-gray-300 rounded-lg border`,
  inputField: apply`relative mt-1`,
  inputIconSuffixContainer: apply`absolute inset-y-0 inline-flex items-center right-4`,
  inputIconSuffix: apply`w-5 h-5 text-gray-400`,
  label: apply`text-sm font-medium`,
  fieldError: apply`text-sm text-red-600`,
}

export type Field = {
  name: string
  label?: string
  type?: "text" | "email" | "password"
  required?: boolean
  placeholder?: string
  Icon?: IconType
}

type FieldsetProps = Field & {
  register: ReturnType<typeof useForm>["register"]
  errors: FieldErrors<{ [key: string]: unknown }>
}

export const Fieldset = ({
  register,
  name,
  errors,
  type = "text",
  required = false,
  label: _label,
  placeholder: _placeholder,
  Icon,
}: FieldsetProps) => {
  const label = _label || capitalize(name)
  const placeholder = _placeholder || `Enter ${label.toLowerCase()}`

  return (
    <fieldset>
      <label htmlFor={label} className={tw(base.label)}>
        {label}
      </label>

      <div className={tw(base.inputField)}>
        <input
          type={type}
          id={label} // convert to kebab case
          className={tw(base.input)}
          placeholder={placeholder}
          {...register(name, { required })}
        />

        <span className={tw(base.inputIconSuffixContainer)}>
          {Icon ? <Icon className={tw(base.inputIconSuffix)} /> : null}
        </span>
      </div>

      {errors?.[name] ? (
        <span className={tw(base.fieldError)}>
          {errors[name]!.type === "required" && `${label} is required`}
        </span>
      ) : null}
    </fieldset>
  )
}

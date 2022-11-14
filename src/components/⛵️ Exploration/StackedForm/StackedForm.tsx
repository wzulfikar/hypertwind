import { useForm } from "react-hook-form"
import { apply, tw } from "@components/util"
import { Fieldset, Field } from "./Fieldset"

const base = {
  form: apply`sm:(p-8 rounded-lg border border-gray-300) mt-6 mb-0 space-y-4 max-w-md`,
}

type Props = {
  children: React.ReactNode
  title?: string
  description?: string
  styles?: StyleOverride<typeof base>
  onSubmit: (data: unknown) => void
  fields: Field[]
}

export const StackedForm = ({
  children,
  title,
  description,
  fields,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <form className={tw(base.form)} onSubmit={handleSubmit(onSubmit)}>
      {title ? <p className={tw("text-lg font-medium")}>{title}</p> : null}
      {description ? <p className={tw("text-sm")}>{description}</p> : null}

      {fields.map((field) => (
        <Fieldset
          key={field.name}
          register={register}
          errors={errors}
          {...field}
        />
      ))}

      {children}
    </form>
  )
}

import { useForm } from "react-hook-form"
import { apply, tw } from "@components/util"
import { Fieldset, Field } from "./Fieldset"

const base = {
  container: apply`space-y-8 divide-y divide-gray-200`,
  form: apply`p-8 mt-6 mb-0 space-y-4 rounded-lg border border-gray-300 max-w-md`,
}

type Props = {
  children: React.ReactNode
  title: string
  styles?: StyleOverride<typeof base>
  onSubmit: (data: unknown) => void
  fields: Field[]
}

export const StackedForm = ({ children, title, fields, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <form className={tw(base.form)} onSubmit={handleSubmit(onSubmit)}>
      <p className={tw("text-lg font-medium")}>{title}</p>

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

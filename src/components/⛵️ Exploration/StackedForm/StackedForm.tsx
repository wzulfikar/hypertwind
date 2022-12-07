import { useForm } from "react-hook-form";
import { Fieldset, Field } from "./Fieldset";

const base = {
  form: `sm:(p-8 rounded-lg border border-gray-300) mt-6 mb-0 space-y-4 max-w-md`,
};

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  styles?: StyleOverride<typeof base>;
  onSubmit: (data: unknown) => void;
  fields: Field[];
};

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
  } = useForm();

  return (
    <form className={base.form} onSubmit={handleSubmit(onSubmit)}>
      {title ? <p className={"text-lg font-medium"}>{title}</p> : null}
      {description ? <p className={"text-sm"}>{description}</p> : null}

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
  );
};

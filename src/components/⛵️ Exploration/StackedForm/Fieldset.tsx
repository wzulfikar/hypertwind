import { useForm, FieldErrors } from "react-hook-form";
import { IconType } from "react-icons/lib";
import { capitalize } from "@components/util";

const base = {
  input: `w-full p-4 pr-12 text-sm border-gray-300 rounded-lg border`,
  inputField: `relative mt-1`,
  inputIconSuffixContainer: `absolute inset-y-0 inline-flex items-center right-4`,
  inputIconSuffix: `w-5 h-5 text-gray-400`,
  label: `text-sm font-medium`,
  description: `text-xs text-gray-500`,
  fieldError: `text-xs text-red-600`,
};

export type Field = {
  name: string;
  label?: string;
  description?: string;
  type?: "text" | "email" | "password";
  required?: boolean;
  placeholder?: string;
  Icon?: IconType;
};

type FieldsetProps = Field & {
  register: ReturnType<typeof useForm>["register"];
  errors: FieldErrors<{ [key: string]: unknown }>;
};

export const Fieldset = ({
  register,
  name,
  errors,
  type = "text",
  required = false,
  label: _label,
  description,
  placeholder: _placeholder,
  Icon,
}: FieldsetProps) => {
  const label = _label || capitalize(name);
  const placeholder = _placeholder || `Enter ${label.toLowerCase()}`;

  return (
    <fieldset>
      <label htmlFor={label} className={base.label}>
        {label}
      </label>

      {description ? <p className={base.description}>{description}</p> : null}

      <div className={base.inputField}>
        <input
          type={type}
          id={label} // convert to kebab case
          className={base.input}
          placeholder={placeholder}
          {...register(name, { required })}
        />

        <span className={base.inputIconSuffixContainer}>
          {Icon ? <Icon className={base.inputIconSuffix} /> : null}
        </span>
      </div>

      {errors?.[name] ? (
        <span className={base.fieldError}>
          {errors[name]!.type === "required" && `${label} is required`}
        </span>
      ) : null}
    </fieldset>
  );
};

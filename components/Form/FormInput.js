import { useFormContext } from "react-hook-form";

import FormError from "./FormError";

function FormInput({
  label,
  name,
  type = "text",
  required = false,
  validation = {},
  ...props
}) {
  const { register } = useFormContext();

  const isRequired = required ? `${label || name} is required` : false;

  return (
    <div className="py-2">
      <input
        ref={register({ required: isRequired, ...validation })}
        id={name}
        name={name}
        type={type}
        className="appearance-none bg-transparent placeholder-faded-black border border-gray-500 focus:border-pink-500 focus:outline-none border-t-0 border-l-0 border-r-0 w-full text-base px-1.5 py-1"
        {...props}
      />
      <FormError name={name} />
    </div>
  );
}

export default FormInput;

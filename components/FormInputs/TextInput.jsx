import React from "react";
export default function TextInput({
  labelText,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-sm block font-medium leading-6 dark:text-slate-50 text-gray-900 mb-2 py-3 "
      >
        {labelText}
      </label>
      <div className="mt-2">
        <input
          {...register(name, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="block w-full focus:ring-lime-700 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1   ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
          placeholder={`Type the ${labelText.toLowerCase()}`}
        />
        {errors[name] && (
          <span className="text-sm text-red-600">{labelText} is required</span>
        )}
      </div>
    </div>
  );
}

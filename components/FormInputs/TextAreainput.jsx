"use client";
export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = false,
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-white mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(name, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className="block w-full focus:ring-lime-700 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-inset dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
          defaultValue={defaultValue}
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[name] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}

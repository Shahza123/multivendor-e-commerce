export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="text-sm block font-medium leading-6 dark:text-slate-50 text-gray-900 mb-2 py-3"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(name)}
          multiple={multiple}
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="block w-full  rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  focus:ring-indigo-600  sm:max-w-xs sm:text-sm  sm:leading-6 "
        >
          {options.map((Option, i) => {
            return (
              <option key={i} value={Option.id}>
                {Option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

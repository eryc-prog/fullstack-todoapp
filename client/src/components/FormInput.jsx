import React from "react";

const FormInput = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;

import React from "react";

interface GlobalLayoutProps {
  type: string;
  id: string;
  value: string;
  onChange?: (event: any) => void;
  isReadOnly: boolean;
  isDefaultValue?: string;
}

export default function InputItem({
  type,
  id,
  value,
  onChange,
  isReadOnly,
  isDefaultValue,
}: GlobalLayoutProps) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      defaultValue={isDefaultValue}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      readOnly={isReadOnly === true ? true : false}
      required
    />
  );
}

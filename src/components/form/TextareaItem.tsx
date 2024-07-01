import React from "react";

interface GlobalLayoutProps {
  id: string;
  value: string;
  onChange?: (event: any) => void;
  isReadOnly: boolean;
  isDefaultValue?: string;
}

export default function TextareaItem({
  id,
  value,
  onChange,
  isReadOnly,
  isDefaultValue,
}: GlobalLayoutProps) {
  return (
    <textarea
      id={id}
      value={value}
      defaultValue={isDefaultValue}
      onChange={onChange}
      className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
      readOnly={isReadOnly === true ? true : false}
      required
    ></textarea>
  );
}

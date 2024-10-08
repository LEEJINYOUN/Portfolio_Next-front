import { TextareaItemModel } from "@/model/ContactModel";
import React from "react";

export default function TextareaItem({
  id,
  name,
  value,
  onChange,
  isReadOnly,
  isDefaultValue,
}: TextareaItemModel) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      defaultValue={isDefaultValue}
      onChange={onChange}
      className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
      readOnly={isReadOnly === true ? true : false}
      required
    ></textarea>
  );
}

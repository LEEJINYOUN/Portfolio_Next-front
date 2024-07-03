import { InputLabelModel } from "@/model/ContactModel";
import React from "react";

export default function InputLabel({ isFor, title }: InputLabelModel) {
  return (
    <label
      htmlFor={isFor}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {title}
    </label>
  );
}

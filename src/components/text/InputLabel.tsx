import React from "react";

interface GlobalLayoutProps {
  isFor: string;
  title: string;
}

export default function InputLabel({ isFor, title }: GlobalLayoutProps) {
  return (
    <label
      htmlFor={isFor}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {title}
    </label>
  );
}


import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {
  label: string;
  id: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  error?: string;
  touched?: boolean;
  placeholder: string;
  rows: number;
};

function CustomTextArea({
  handleChange,
  value,
  error,
  touched,
  id,
  label,
  placeholder,
  rows,
}: Props) {
  return (
    <div className="my-3">
      <Label
        htmlFor={id}
        className="ms-1 font-normal dark:text-gray-400 text-gray-600 mb-2"
      >
        {label}
      </Label>
      <Textarea
        rows={rows}
        onChange={handleChange}
        value={value}
        id={id}
        placeholder={placeholder}
        className={`${
          error && touched ? "border-red-500 dark:border-red-600" : ""
        }w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
      />
      {error && touched && (
        <span className="text-red-500 dark:text-red-600 text-sm block">{error}</span>
      )}
    </div>
  );
}

export default CustomTextArea;

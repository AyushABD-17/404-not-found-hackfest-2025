import { Label } from "@/components/ui/label";
import React from "react";

type Props = {
  label: string;
  id: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  error?: string;
  touched?: boolean;
  min?: number;
  max?: number;
  step?: number;
};

function CustomRangeInput({ 
  label, 
  id, 
  handleChange, 
  value, 
  error, 
  touched,
  min = 0,
  max = 100,
  step = 1
}: Props) {
  return (
    <div className="my-3">
      <div className="flex justify-between items-center mb-2">
        <Label
          htmlFor={id}
          className="ms-1 font-normal dark:text-gray-300 text-gray-600"
        >
          {label}
        </Label>
        <span className="text-sm text-gray-400">{value}%</span>
      </div>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className={`w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer ${
          error && touched ? "border-red-500 dark:border-red-600" : ""
        }`}
      />
      {error && touched && (
        <span className="text-red-500 text-sm block dark:text-red-600">{error}</span>
      )}
    </div>
  );
}

export default CustomRangeInput; 
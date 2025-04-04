import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type Props = {
  label: string;
  id: string;
  setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void;
  value: string;
  error?: string;
  touched?: boolean;
  list: string[]; 
};

function CustomSelector({ value, error, touched, id, label, setFieldValue, list }: Props) {
  return (
    <div className="my-3">
      <Label htmlFor={id} className="ms-1 font-normal dark:text-gray-400 text-gray-600 linec">
        {label}
      </Label>
      <Select onValueChange={(e) => setFieldValue(id, e, true)} value={value}>
        <SelectTrigger
          className={`${
            error && touched ? "border-red-500 dark:border-red-600" : ""
          } w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
        >
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent>
          {list.map((name) => (
            <SelectItem key={name} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && touched && <span className="text-red-500 dark:text-red-600 text-sm block">{error}</span>}
    </div>
  );
}

export default CustomSelector;

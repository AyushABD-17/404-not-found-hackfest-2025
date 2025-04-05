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
};

const timeIntervals = [
  { label: "Realtime", value: "realtime" },
  { label: "Every 5 minutes", value: "5min" },
  { label: "Every 15 minutes", value: "15min" },
  { label: "Every 30 minutes", value: "30min" },
  { label: "Hourly", value: "hourly" },
  { label: "Every 2 hours", value: "2hours" },
  { label: "Every 4 hours", value: "4hours" },
  { label: "Daily", value: "daily" }
];

function CustomTimeIntervalSelector({ 
  label, 
  id, 
  setFieldValue, 
  value, 
  error, 
  touched 
}: Props) {
  return (
    <div className="my-3">
      <Label htmlFor={id} className="ms-1 font-normal dark:text-gray-300 text-gray-600">
        {label}
      </Label>
      <Select onValueChange={(e) => setFieldValue(id, e, true)} value={value} >
        <SelectTrigger
          className={`${
            error && touched ? "border-red-500 dark:border-red-600" : ""
          } w-full px-4 py-3 my-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
        >
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border border-gray-700">
          {timeIntervals.map((interval) => (
            <SelectItem 
              key={interval.value} 
              value={interval.value}
              className="text-white hover:bg-gray-700 focus:bg-gray-700"
            >
              {interval.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && touched && (
        <span className="text-red-500 text-sm block dark:text-red-600">{error}</span>
      )}
    </div>
  );
}

export default CustomTimeIntervalSelector; 
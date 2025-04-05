import { Label } from "@/components/ui/label";
import React from "react";

interface CustomAlertMethodSelectorProps {
  id: string;
  label: string;
  value: string[];
  error?: any;
  touched?: any;
  setFieldValue: (field: string, value: any) => void;
}

const alertMethods = [
  { label: "Email Alert", value: "email" },
  { label: "In-App Alert", value: "inapp" },
  { label: "SMS Alert", value: "sms" },
  { label: "Push Notification", value: "push" },
  { label: "Webhook", value: "webhook" }
];

function CustomAlertMethodSelector({ 
  id, 
  label, 
  value, 
  error, 
  touched, 
  setFieldValue 
}: CustomAlertMethodSelectorProps) {
  const handleSelect = (method: string) => {
    if (value.includes(method)) {
      setFieldValue(id, value.filter((selected) => selected !== method));
    } else {
      setFieldValue(id, [...value, method]);
    }
  };

  return (
    <div className="my-3">
      <Label className="ms-1 font-normal dark:text-gray-300 text-gray-600">
        {label}
      </Label>
      <div className="flex flex-wrap gap-2 my-1">
        {alertMethods.map((method) => (
          <button
            key={method.value}
            type="button"
            onClick={() => handleSelect(method.value)}
            className={`px-4 py-2 rounded-lg border border-gray-300 dark:border-white/10 text-sm transition-all ${
              value.includes(method.value)
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-white/5 dark:text-gray-300 hover:dark:bg-white/10"
            }`}
          >
            {method.label}
          </button>
        ))}
      </div>
      {error && touched && (
        <p className="text-red-500 dark:text-red-600 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}

export default CustomAlertMethodSelector; 
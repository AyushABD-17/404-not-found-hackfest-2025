import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface CustomMultiSelectorProps {
  id: string;
  label: string;
  value: string[];
  error?: any;
  touched?: any;
  setFieldValue: (field: string, value: any) => void;
  list: { label: string; value: string }[];
}

function CustomMultiSelector({
  id,
  label,
  value,
  error,
  touched,
  setFieldValue,
  list,
}: CustomMultiSelectorProps) {
  const [customValue, setCustomValue] = useState("");

  const handleSelect = (item: string) => {
    if (value.includes(item)) {
      setFieldValue(id, value.filter((selected) => selected !== item));
    } else {
      setFieldValue(id, [...value, item]);
    }
  };

  const handleAddCustom = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && customValue.trim()) {
      e.preventDefault();
      if (!value.includes(customValue.trim())) {
        setFieldValue(id, [...value, customValue.trim()]);
      }
      setCustomValue("");
    }
  };

  const handleRemove = (item: string) => {
    setFieldValue(id, value.filter((selected) => selected !== item));
  };

  return (
    <div className="my-6 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <Label className="ms-1 font-semibold text-lg dark:text-gray-300 text-gray-600">
        {label}
      </Label>
      
      {/* Predefined options */}
      <div className="flex flex-wrap gap-2 my-2">
        {list.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => handleSelect(item.value)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full bg-gray-700 text-white text-sm hover:bg-gray-600 border border-gray-600 ${
              value.includes(item.value)
                ? "  text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-white/5 dark:text-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Custom input */}
      <div className="mt-2">
        <Input
          type="text"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          onKeyDown={handleAddCustom}
          placeholder="Type and press Enter to add custom keyword"
          className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Selected items display */}
      {value.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-gray-400 mb-2">Selected Keywords:</p>
          <div className="flex flex-wrap gap-2">
            {value.map((item) => (
              <div
                key={item}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-700 text-white text-sm"
              >
                <span>{item}</span>
                <button
                  type="button"
                  onClick={() => handleRemove(item)}
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && touched && (
        <p className="text-red-500 dark:text-red-600 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}

export default CustomMultiSelector;

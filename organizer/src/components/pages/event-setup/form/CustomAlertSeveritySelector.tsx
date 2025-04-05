import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import React from "react";

interface CustomAlertSeverityProps {
  id: string;
  label: string;
  color: string;
  enabled: boolean;
  triggerThreshold: string;
  cooldownPeriod: string;
  error?: any;
  touched?: any;
  setFieldValue: (field: string, value: any) => void;
}

const triggerOptions = [
  { label: "Any technical issue mention", value: "technical_issue" },
  { label: "Negative sentiment > 50%", value: "negative_50" },
  { label: "Negative sentiment > 40%", value: "negative_40" },
  { label: "Negative sentiment > 30%", value: "negative_30" },
  { label: "Sentiment shift of 10%+", value: "shift_10" }
];

const cooldownOptions = [
  { label: "15 minutes", value: "15min" },
  { label: "30 minutes", value: "30min" },
  { label: "1 hour", value: "1hour" },
  { label: "2 hours", value: "2hours" },
  { label: "4 hours", value: "4hours" }
];

function CustomAlertSeveritySelector({
  id,
  label,
  color,
  enabled,
  triggerThreshold,
  cooldownPeriod,
  error,
  touched,
  setFieldValue
}: CustomAlertSeverityProps) {
  const showTriggerError = error?.triggerThreshold;
  const showCooldownError = error?.cooldownPeriod;
  const showEnabledError = error?.enabled;

  return (
    <div className="p-4 rounded-lg border border-gray-700 bg-gray-800/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${color}`} />
          <Label className="text-base font-medium text-white">{label}</Label>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Enabled</span>
            <Switch
              checked={enabled}
              onCheckedChange={(checked) => {
                setFieldValue(`${id}.enabled`, checked);
                if (!checked) {
                  setFieldValue(`${id}.triggerThreshold`, "");
                  setFieldValue(`${id}.cooldownPeriod`, "");
                }
              }}
              className={`data-[state=checked]:bg-blue-600 ${showEnabledError ? 'border-red-500' : ''}`}
            />
          </div>
          {showEnabledError && (
            <p className="text-red-500 text-xs">
              {error?.enabled}
            </p>
          )}
        </div>
      </div>

      <div className={`space-y-4 ${!enabled ? 'opacity-50 pointer-events-none' : ''}`}>
        <div>
          <Label className="block mb-2 text-sm text-gray-300">
            Trigger Threshold
            {enabled && <span className="text-red-500 ml-1">*</span>}
          </Label>
          <Select
            value={triggerThreshold}
            onValueChange={(value) => setFieldValue(`${id}.triggerThreshold`, value)}
            disabled={!enabled}
          >
            <SelectTrigger 
              className={`w-full bg-gray-700/50 border-gray-600 text-white ${
                showTriggerError ? 'border-red-500 focus:ring-red-500' : ''
              }`}
            >
              <SelectValue placeholder="Select trigger threshold" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border border-gray-700">
              {triggerOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-white hover:bg-gray-700 focus:bg-gray-700"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showTriggerError && enabled && (
            <p className="text-red-500 text-sm mt-1">
              {error?.triggerThreshold}
            </p>
          )}
        </div>

        <div>
          <Label className="block mb-2 text-sm text-gray-300">
            Cooldown Period
            {enabled && <span className="text-red-500 ml-1">*</span>}
          </Label>
          <Select
            value={cooldownPeriod}
            onValueChange={(value) => setFieldValue(`${id}.cooldownPeriod`, value)}
            disabled={!enabled}
          >
            <SelectTrigger 
              className={`w-full bg-gray-700/50 border-gray-600 text-white ${
                showCooldownError ? 'border-red-500 focus:ring-red-500' : ''
              }`}
            >
              <SelectValue placeholder="Select cooldown period" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border border-gray-700">
              {cooldownOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="text-white hover:bg-gray-700 focus:bg-gray-700"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showCooldownError && enabled && (
            <p className="text-red-500 text-sm mt-1">
              {error?.cooldownPeriod}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomAlertSeveritySelector; 
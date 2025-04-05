import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import React from "react";

interface CustomNotificationMethodSelectorProps {
  id: string;
  label: string;
  description?: string;
  enabled: boolean;
  critical: boolean;
  warning: boolean;
  info: boolean;
  phoneNumber?: string;
  toEventTeam?: boolean;
  error?: any;
  touched?: any;
  setFieldValue: (field: string, value: any) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomNotificationMethodSelector({
  id,
  label,
  description,
  enabled,
  critical,
  warning,
  info,
  phoneNumber,
  error,
  touched,
  setFieldValue,
  handleChange
}: CustomNotificationMethodSelectorProps) {
  const showPhoneNumberError = error?.phoneNumber && touched?.phoneNumber;

  return (
    <div className="flex items-start justify-between py-2 border-b border-gray-700">
      <div className="flex items-center gap-4">
        <Switch
          checked={enabled}
          onCheckedChange={(checked) => {
            setFieldValue(`${id}.enabled`, checked);
            if (!checked) {
              setFieldValue(`${id}.Critical`, false);
              setFieldValue(`${id}.Warning`, false);
              setFieldValue(`${id}.Info`, false);
              if (phoneNumber !== undefined) {
                setFieldValue(`${id}.phoneNumber`, "");
              }
            }
          }}
          className="data-[state=checked]:bg-blue-600"
        />
        <div>
          <Label className="text-base font-medium text-white">{label}</Label>
          {description && (
            <p className="text-sm text-gray-400">{description}</p>
          )}
          {id.includes("SMS") && enabled && (
            <div className="mt-2">
              <Input
                type="text"
                placeholder="+1 (555) 123-4567"
                value={phoneNumber}
                onChange={handleChange}
                name={`${id}.phoneNumber`}
                className={`bg-gray-700/50 border-gray-600 text-white w-48 ${
                  showPhoneNumberError ? 'border-red-500' : ''
                }`}
              />
              {showPhoneNumberError && (
                <p className="text-red-500 text-xs mt-1">{error.phoneNumber}</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Switch
            checked={critical}
            onCheckedChange={(checked) => setFieldValue(`${id}.Critical`, checked)}
            disabled={!enabled}
            className="data-[state=checked]:bg-red-500"
          />
          <span className="text-sm text-gray-300">Critical</span>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            checked={warning}
            onCheckedChange={(checked) => setFieldValue(`${id}.Warning`, checked)}
            disabled={!enabled}
            className="data-[state=checked]:bg-yellow-500"
          />
          <span className="text-sm text-gray-300">Warning</span>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            checked={info}
            onCheckedChange={(checked) => setFieldValue(`${id}.Info`, checked)}
            disabled={!enabled}
            className="data-[state=checked]:bg-blue-500"
          />
          <span className="text-sm text-gray-300">Info</span>
        </div>
      </div>
    </div>
  );
}

export default CustomNotificationMethodSelector; 
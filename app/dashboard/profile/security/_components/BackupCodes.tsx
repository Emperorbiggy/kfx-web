"use client";

import React from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { FiShield, FiCopy } from "react-icons/fi";

interface BackupCodesProps {
  onBack: () => void;
}

const ToggleSwitch = ({ 
  checked, 
  onChange, 
  disabled = false 
}: { 
  checked: boolean; 
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}) => (
  <button
    onClick={() => !disabled && onChange(!checked)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
      checked ? "bg-blue-600" : "bg-gray-300"
    } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    disabled={disabled}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        checked ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

export default function BackupCodes({ onBack }: BackupCodesProps) {
  const backupCodes = [
    "DVDHGHGBFGFBG",
    "DVDHGHGBFGFBG", 
    "DVDHGHGBFGFBG",
    "DVDHGHGBFGFBG",
    "DVDHGHGBFGFBG"
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]"></div>
      
      <div className="px-4 sm:px-6">
        <ProfileHeaderCard 
          title="Security & Privacy" 
          variant="default"
          onBack={onBack}
        />
      </div>
      
      <div className="px-4 sm:px-6 mt-6">
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <div className="flex items-center mb-6 lg:mb-8">
            <FiShield className="w-5 h-5 text-gray-600 mr-3" />
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Two-Factor Authentication</h2>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm lg:text-base text-gray-700 font-medium">
              Enable Two-Factor Authentication
            </span>
            <ToggleSwitch 
              checked={true}
              onChange={() => {}}
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Backup Codes</h3>
            <div className="space-y-3">
              {backupCodes.map((code, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <button onClick={() => copyToClipboard(code)}>
                      <FiCopy className="w-4 h-4 text-gray-400" />
                    </button>
                    <span className="font-mono text-gray-700">{code}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
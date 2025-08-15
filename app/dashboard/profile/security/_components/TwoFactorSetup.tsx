"use client";

import React from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { Button } from "@/components/ui/button";
import { FiShield, FiCopy } from "react-icons/fi";

interface TwoFactorSetupProps {
  onBack: () => void;
  onComplete: () => void;
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

export default function TwoFactorSetup({ onBack, onComplete }: TwoFactorSetupProps) {
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
              disabled={true}
            />
          </div>

          <div className="mb-6">
            <span className="text-sm text-gray-600 font-medium">🔒 Authenticator App Setup</span>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center justify-center py-12 mb-6">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                ))}
              </div>
            </div>
            
            <p className="text-center text-gray-600 mb-4 max-w-sm">
              Scan this QR code with Google Authenticator, Authy, or any compatible 2FA app
            </p>
            
            <div className="flex items-center space-x-2 text-blue-600">
              <span className="text-sm font-medium">KFXR EMIT TANC E2FA</span>
              <button onClick={() => copyToClipboard("KFXR EMIT TANC E2FA")}>
                <FiCopy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 px-4 sm:px-6 pb-8">
        <Button
          variant="outline"
          className="flex-1"
          onClick={onBack}
        >
          Cancel
        </Button>
        <Button 
          className="flex-1"
          onClick={onComplete}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
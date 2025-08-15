"use client";

import React, { useState } from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { Button } from "@/components/ui/button";
import { FiGlobe, FiSettings } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import AppHeading from "@/components/texts/Headings";
import { HeadingType } from "@/types/enum";

export default function PreferencePage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedTimezone, setSelectedTimezone] = useState("UTC+1 (West Africa)");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTextSize, setSelectedTextSize] = useState("medium");
  const [defaultSendMethod, setDefaultSendMethod] = useState("bank-transfer");

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

  const TextSizeButton = ({
  size,
  label,
  isSelected,
  onClick,
}: {
  size: "small" | "medium" | "large";
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-10 h-10 rounded-lg font-medium transition-all ${
      isSelected
        ? "bg-blue-600 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]"></div>
      
      {/* Header */}
      <div className="px-4 sm:px-6">
        <ProfileHeaderCard
          variant="default"
          onBack={() => router.push("/dashboard/profile")}
        >
          <AppHeading text="Profile & Settings" type={HeadingType.H4} />
        </ProfileHeaderCard>
      </div>
      
      {/* Main Content */}
      <div className="px-4 sm:px-6 mt-6 space-y-6 max-w-none">
        {/* Language & Region Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <div className="flex items-center mb-6 lg:mb-8">
            <FiGlobe className="w-5 h-5 text-gray-600 mr-3" />
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Language & Region</h2>
          </div>
          
          <div className="space-y-6">
            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Language
              </label>
              <div className="relative">
                <select 
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-3 lg:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white text-gray-700 text-sm lg:text-base"
                >
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Portuguese">Portuguese</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Timezone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Timezone
              </label>
              <div className="relative">
                <select 
                  value={selectedTimezone}
                  onChange={(e) => setSelectedTimezone(e.target.value)}
                  className="w-full px-4 py-3 lg:py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white text-gray-700 text-sm lg:text-base"
                >
                  <option value="UTC+1 (West Africa)">UTC+1 (West Africa)</option>
                  <option value="UTC+0 (GMT)">UTC+0 (GMT)</option>
                  <option value="UTC-5 (EST)">UTC-5 (EST)</option>
                  <option value="UTC-8 (PST)">UTC-8 (PST)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <div className="flex items-center mb-6 lg:mb-8">
            <FiSettings className="w-5 h-5 text-gray-600 mr-3" />
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Accessibility</h2>
          </div>
          
          <div className="space-y-6">
            {/* Dark mode */}
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base text-gray-700 font-medium">Dark mode</span>
              <ToggleSwitch 
                checked={darkMode}
                onChange={setDarkMode}
              />
            </div>

            {/* Text size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Text size
              </label>
              <div className="flex items-center space-x-4">
                <TextSizeButton
                  size="small"
                  label="A"
                  isSelected={selectedTextSize === "small"}
                  onClick={() => setSelectedTextSize("small")}
                />
                <TextSizeButton
                  size="medium"
                  label="A"
                  isSelected={selectedTextSize === "medium"}
                  onClick={() => setSelectedTextSize("medium")}
                />
                <TextSizeButton
                  size="large"
                  label="A"
                  isSelected={selectedTextSize === "large"}
                  onClick={() => setSelectedTextSize("large")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Default Preferences Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6 lg:mb-8">Default Preferences</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Default send method
            </label>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="sendMethod"
                  value="bank-transfer"
                  checked={defaultSendMethod === "bank-transfer"}
                  onChange={(e) => setDefaultSendMethod(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-3 text-sm lg:text-base text-gray-700">Bank Transfer</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="sendMethod"
                  value="cash-pickup"
                  checked={defaultSendMethod === "cash-pickup"}
                  onChange={(e) => setDefaultSendMethod(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-3 text-sm lg:text-base text-gray-700">Cash Pickup</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 px-4 sm:px-6 pb-8">
        <Button
          variant="white"
          className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 lg:py-4 rounded-full text-sm lg:text-base font-medium"
        >
          Cancel
        </Button>
        <Button 
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 lg:py-4 rounded-full font-medium transition-colors text-sm lg:text-base"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
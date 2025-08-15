"use client";

import React, { useState } from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { Button } from "@/components/ui/button";
import { FiBell, FiMail, FiMessageSquare } from "react-icons/fi";
import { useRouter } from "next/navigation";
import AppHeading from "@/components/texts/Headings";
import { HeadingType } from "@/types/enum";

export default function NotificationPage() {
  const router = useRouter();
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [promotionalEmails, setPromotionalEmails] = useState(true);
  const [productUpdates, setProductUpdates] = useState(false);
  const [emailConfirmation, setEmailConfirmation] = useState(true);
  const [smsConfirmation, setSmsConfirmation] = useState(false);

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

  const Checkbox = ({ 
    checked, 
    onChange 
  }: { 
    checked: boolean; 
    onChange: (checked: boolean) => void;
  }) => (
    <button
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {checked && (
        <div className="h-3 w-3 rounded-sm bg-black"></div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]"></div>
      
      {/* Header */}
      <div className="px-6">
        <ProfileHeaderCard
          variant="default"
          onBack={() => router.push("/dashboard/profile")}
        >
          <AppHeading text="Profile & Settings" type={HeadingType.H4} />
        </ProfileHeaderCard>
      </div>
      
      {/* Main Content */}
      <div className="px-6 mt-6 space-y-6 max-w-none">
        {/* Push Notifications Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6 lg:mb-8">Push Notifications</h2>
          
          <div className="space-y-4 lg:space-y-6">
            {/* In-app notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiBell className="w-5 h-5 text-blue-600" />
                <span className="text-sm lg:text-base text-gray-700 font-medium">In-app notifications</span>
              </div>
              <ToggleSwitch 
                checked={inAppNotifications}
                onChange={setInAppNotifications}
              />
            </div>

            {/* SMS notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiMessageSquare className="w-5 h-5 text-green-600" />
                <span className="text-sm lg:text-base text-gray-700 font-medium">SMS notifications</span>
              </div>
              <ToggleSwitch 
                checked={smsNotifications}
                onChange={setSmsNotifications}
              />
            </div>
          </div>
        </div>

        {/* Email Notifications Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6 lg:mb-8">Email Notifications</h2>
          
          <div className="space-y-4 lg:space-y-6">
            {/* Email alerts */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-red-600" />
                <span className="text-sm lg:text-base text-gray-700 font-medium">Email alerts</span>
              </div>
              <ToggleSwitch 
                checked={emailAlerts}
                onChange={setEmailAlerts}
              />
            </div>

            {/* Promotional emails */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  checked={promotionalEmails}
                  onChange={setPromotionalEmails}
                />
                <span className="text-sm lg:text-base text-gray-700 font-medium">Promotional emails</span>
              </div>
            </div>

            {/* Product updates */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  checked={productUpdates}
                  onChange={setProductUpdates}
                />
                <span className="text-sm lg:text-base text-gray-700 font-medium">Product updates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Methods Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6 lg:mb-8">Confirmation Methods</h2>
          
          <div className="space-y-4 lg:space-y-6">
            {/* Email confirmation */}
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base text-gray-700 font-medium">Email confirmation</span>
              <ToggleSwitch 
                checked={emailConfirmation}
                onChange={setEmailConfirmation}
              />
            </div>

            {/* SMS confirmation */}
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base text-gray-700 font-medium">SMS confirmation</span>
              <ToggleSwitch 
                checked={smsConfirmation}
                onChange={setSmsConfirmation}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 px-6 pb-8">
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
"use client";

import React from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { 
  FiShield, 
  FiSmartphone, 
  FiBell,
  FiEdit3,
  FiLogOut
} from "react-icons/fi";
import { FaFingerprint } from "react-icons/fa";

interface MainSecurityPageProps {
  twoFactorEnabled: boolean;
  devices: Array<{
    id: number;
    name: string;
    lastActive: string;
    isCurrent: boolean;
  }>;
  loginActivity: Array<{
    id: number;
    type: string;
    location: string;
    time: string;
    status: string;
  }>;
  onTwoFactorSetup: () => void;
  onViewBackupCodes: () => void;
  onEditDevice: (device: any) => void;
  onDeviceNotifications: () => void;
  setTwoFactorEnabled: (enabled: boolean) => void;
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

export default function MainSecurityPage({
  twoFactorEnabled,
  devices,
  loginActivity,
  onTwoFactorSetup,
  onViewBackupCodes,
  onEditDevice,
  onDeviceNotifications,
  setTwoFactorEnabled
}: MainSecurityPageProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]"></div>
      
      {/* Header */}
      <div className="px-4 sm:px-6">
        <ProfileHeaderCard 
          title="Security & Privacy" 
          variant="default"
          onBack={() => router.push("/dashboard/profile")}
        />
      </div>
      
      {/* Main Content */}
      <div className="px-4 sm:px-6 mt-6 space-y-6 max-w-none">
        
        {/* Two-Factor Authentication Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <div className="flex items-center mb-6 lg:mb-8">
            <FiShield className="w-5 h-5 text-gray-600 mr-3" />
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Two-Factor Authentication</h2>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm lg:text-base text-gray-700 font-medium">
              Enable Two-Factor Authentication
            </span>
            {twoFactorEnabled ? (
              <ToggleSwitch 
                checked={twoFactorEnabled}
                onChange={setTwoFactorEnabled}
              />
            ) : (
              <button 
                onClick={onTwoFactorSetup}
                className="text-blue-600 font-medium text-sm lg:text-base hover:text-blue-700 transition-colors"
              >
                Setup
              </button>
            )}
          </div>

          {twoFactorEnabled && (
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base text-gray-700 font-medium">
                Backup Codes
              </span>
              <button 
                onClick={onViewBackupCodes}
                className="text-blue-600 font-medium text-sm lg:text-base hover:text-blue-700 transition-colors"
              >
                View all
              </button>
            </div>
          )}
        </div>

        {/* Biometric Authentication Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <div className="flex items-center mb-6 lg:mb-8">
            <FaFingerprint className="w-5 h-5 text-gray-600 mr-3" />
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Biometric Authentication</h2>
          </div>
          
          <div className="space-y-4 lg:space-y-6">
            {/* Face ID */}
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base text-gray-700 font-medium">Face ID</span>
              <button className="text-blue-600 font-medium text-sm lg:text-base hover:text-blue-700 transition-colors">
                Setup
              </button>
            </div>

            {/* Fingerprint */}
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base text-gray-700 font-medium">Fingerprint</span>
              <button className="text-blue-600 font-medium text-sm lg:text-base hover:text-blue-700 transition-colors">
                Setup
              </button>
            </div>
          </div>
        </div>

        {/* Device Management Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Device Management</h2>
            <button onClick={onDeviceNotifications}>
              <FiBell className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <div className="space-y-4 lg:space-y-6">
            {devices.map((device) => (
              <div key={device.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FiSmartphone className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm lg:text-base font-medium text-gray-900">
                        {device.name}
                      </span>
                      <button onClick={() => onEditDevice(device)}>
                        <FiEdit3 className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <p className="text-xs lg:text-sm text-gray-500">
                      Last active: {device.lastActive}
                    </p>
                  </div>
                </div>
                
                {device.isCurrent ? (
                  <span className="text-xs lg:text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    Current
                  </span>
                ) : (
                  <button className="text-xs lg:text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">
                    Remove
                  </button>
                )}
              </div>
            ))}
            
            {/* Log out from all devices */}
            <div className="pt-4 border-t border-gray-200">
              <button className="flex items-center text-red-600 font-medium text-sm lg:text-base hover:text-red-700 transition-colors">
                <FiLogOut className="w-4 h-4 mr-2" />
                Log out from all devices
              </button>
            </div>
          </div>
        </div>

        {/* Login Activity Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6 lg:mb-8">Login Activity</h2>
          
          <div className="space-y-4 lg:space-y-6">
            {loginActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm lg:text-base font-medium text-gray-900">
                    {activity.type}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-500">
                    {activity.location} • {activity.time}
                  </p>
                </div>
                
                <span className="text-xs lg:text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  Success
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 px-4 sm:px-6 pb-8">
        <Button
          variant="outline"
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
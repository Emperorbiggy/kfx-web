"use client";

import React, { useState } from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import AppHeading from "@/components/texts/Headings";
import { HeadingType } from "@/types/enum";

interface RenameDeviceProps {
  device: {
    id: number;
    name: string;
    lastActive: string;
    isCurrent: boolean;
  } | null;
  onBack: () => void;
  onSave: (newName: string) => void;
}

export default function RenameDevice({
  device,
  onBack,
  onSave,
}: RenameDeviceProps) {
  const [deviceName, setDeviceName] = useState(device?.name || "");
  const router = useRouter();

  const handleSave = () => {
    onSave(deviceName);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]"></div>

      {/* Header */}
      <div className="px-4 sm:px-6">
        <ProfileHeaderCard variant="default" onBack={onBack || (() => router.back())}>
          <AppHeading text="Rename Device" type={HeadingType.H4} />
        </ProfileHeaderCard>
      </div>

      {/* Input Section */}
      <div className="px-4 sm:px-6 mt-6">
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Device Name
            </label>
            <input
              type="text"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              placeholder="Enter device name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 px-4 sm:px-6 pb-8">
        <Button
          variant="white"
          className="flex-1"
          onClick={onBack}
        >
          Cancel
        </Button>
        <Button
          className="flex-1"
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}

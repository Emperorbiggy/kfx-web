"use client";

import React, { useState } from "react";

// Import all components
import MainSecurityPage from "./_components/MainSecurityPage";
import TwoFactorSetup from "./_components/TwoFactorSetup";
import BackupCodes from "./_components/BackupCodes";
import RenameDevice from "./_components/RenameDevice";
import DeviceNotifications from "./_components/DeviceNotifications";

export default function SecurityPage() {
  // State management
  const [currentView, setCurrentView] = useState<'main' | 'twoFactorSetup' | 'backupCodes' | 'renameDevice' | 'deviceNotifications'>('main');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  
  // Device data
  const [devices] = useState([
    {
      id: 1,
      name: "iPhone 14 Pro",
      lastActive: "2 hours ago",
      isCurrent: true
    },
    {
      id: 2,
      name: "MacBook Pro",
      lastActive: "1 day ago",
      isCurrent: false
    }
  ]);

  // Login activity data
  const [loginActivity] = useState([
    {
      id: 1,
      type: "Successful login",
      location: "Lagos, Nigeria",
      time: "2 hours ago",
      status: "success"
    },
    {
      id: 2,
      type: "Successful login", 
      location: "Lagos, Nigeria",
      time: "1 day ago",
      status: "success"
    }
  ]);

  // Device notifications state
  const [deviceNotifications, setDeviceNotifications] = useState({
    iPhone: {
      transactional: true,
      login: false,
      promotional: false
    },
    MacBook: {
      transactional: true,
      login: false,
      promotional: false
    }
  });

  // Event handlers
  const handleTwoFactorSetup = () => {
    setCurrentView('twoFactorSetup');
  };

  const handleTwoFactorComplete = () => {
    setTwoFactorEnabled(true);
    setCurrentView('main');
  };

  const handleViewBackupCodes = () => {
    setCurrentView('backupCodes');
  };

  const handleEditDevice = (device: any) => {
    setSelectedDevice(device);
    setCurrentView('renameDevice');
  };

  const handleDeviceNotifications = () => {
    setCurrentView('deviceNotifications');
  };

  const handleSaveDeviceName = (newName: string) => {
    // Update device name logic here
    setCurrentView('main');
    setSelectedDevice(null);
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedDevice(null);
  };

  // Render based on current view
  switch (currentView) {
    case 'twoFactorSetup':
      return (
        <TwoFactorSetup
          onBack={handleBackToMain}
          onComplete={handleTwoFactorComplete}
        />
      );

    case 'backupCodes':
      return (
        <BackupCodes
          onBack={handleBackToMain}
        />
      );

    case 'renameDevice':
      return (
        <RenameDevice
          device={selectedDevice}
          onBack={handleBackToMain}
          onSave={handleSaveDeviceName}
        />
      );

    case 'deviceNotifications':
      return (
        <DeviceNotifications
          deviceNotifications={deviceNotifications}
          onBack={handleBackToMain}
          onUpdateNotifications={setDeviceNotifications}
        />
      );

    default:
      return (
        <MainSecurityPage
          twoFactorEnabled={twoFactorEnabled}
          devices={devices}
          loginActivity={loginActivity}
          onTwoFactorSetup={handleTwoFactorSetup}
          onViewBackupCodes={handleViewBackupCodes}
          onEditDevice={handleEditDevice}
          onDeviceNotifications={handleDeviceNotifications}
          setTwoFactorEnabled={setTwoFactorEnabled}
        />
      );
  }
}
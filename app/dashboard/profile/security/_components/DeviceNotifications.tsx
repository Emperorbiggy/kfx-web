import React from 'react';

// Type definitions for device notifications
type NotificationSettings = {
  transactional: boolean;
  login: boolean;
  promotional: boolean;
};

export type DeviceNotificationsData = {
  iPhone: NotificationSettings;
  MacBook: NotificationSettings;
};

interface DeviceNotificationsProps {
  deviceNotifications: DeviceNotificationsData;
  onBack: () => void;
  onUpdateNotifications: (notifications: DeviceNotificationsData) => void;
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
      checked ? 'bg-blue-600' : 'bg-gray-300'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    disabled={disabled}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

// Mock Button component
const Button = ({
  variant,
  className,
  onClick,
  children
}: {
  variant?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
      variant === 'outline'
        ? 'border border-gray-300 text-gray-700 hover:bg-gray-50'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    } ${className}`}
  >
    {children}
  </button>
);

// Mock ProfileHeaderCard component
const ProfileHeaderCard = ({
  title,
  onBack
}: {
  title: string;
  onBack: () => void;
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    <button
      onClick={onBack}
      className="text-blue-600 hover:text-blue-700 font-medium"
    >
      ← Back
    </button>
  </div>
);

export default function DeviceNotificationsComponent({
  deviceNotifications,
  onBack,
  onUpdateNotifications
}: DeviceNotificationsProps) {
  const updateNotification = (
    device: keyof DeviceNotificationsData,
    type: keyof NotificationSettings,
    value: boolean
  ) => {
    const updated: DeviceNotificationsData = {
      ...deviceNotifications,
      [device]: {
        ...deviceNotifications[device],
        [type]: value
      }
    };
    onUpdateNotifications(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]"></div>

      <div className="px-4 sm:px-6">
        <ProfileHeaderCard title="Device Notification" onBack={onBack} />
      </div>

      <div className="px-4 sm:px-6 mt-6 space-y-6">
        {/* iPhone 14 Pro */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            iPhone 14 Pro
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                Transactional alerts
              </span>
              <ToggleSwitch
                checked={deviceNotifications.iPhone.transactional}
                onChange={(checked) =>
                  updateNotification('iPhone', 'transactional', checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Login activity</span>
              <ToggleSwitch
                checked={deviceNotifications.iPhone.login}
                onChange={(checked) =>
                  updateNotification('iPhone', 'login', checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                Promotional updates
              </span>
              <ToggleSwitch
                checked={deviceNotifications.iPhone.promotional}
                onChange={(checked) =>
                  updateNotification('iPhone', 'promotional', checked)
                }
              />
            </div>
          </div>
        </div>

        {/* MacBook Pro */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            MacBook Pro
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                Transactional alerts
              </span>
              <ToggleSwitch
                checked={deviceNotifications.MacBook.transactional}
                onChange={(checked) =>
                  updateNotification('MacBook', 'transactional', checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Login activity</span>
              <ToggleSwitch
                checked={deviceNotifications.MacBook.login}
                onChange={(checked) =>
                  updateNotification('MacBook', 'login', checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                Promotional updates
              </span>
              <ToggleSwitch
                checked={deviceNotifications.MacBook.promotional}
                onChange={(checked) =>
                  updateNotification('MacBook', 'promotional', checked)
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 px-4 sm:px-6 pb-8">
        <Button variant="outline" className="flex-1" onClick={onBack}>
          Cancel
        </Button>
        <Button className="flex-1">Save Changes</Button>
      </div>
    </div>
  );
}

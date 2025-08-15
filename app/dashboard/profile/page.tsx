"use client";

import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { useRouter } from "next/navigation";
import AppHeading from "@/components/texts/Headings";
import { HeadingType } from "@/types/enum";
import {
  FaCheckCircle,
  FaCog,
  FaBell,
  FaUser,
  FaLock,
  FaLink,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUserCheck,
  FaShieldAlt,
  FaChevronRight,
  FaCamera,
} from "react-icons/fa";

export default function ProfilePage() {
  const router = useRouter();
  
  const handleProfilePictureUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log('Selected file:', file);
      }
    };
    input.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <ProfileHeaderCard variant="default" onBack={() => router.back()}>
          <AppHeading text="Profile & Settings" type={HeadingType.H4} />
        </ProfileHeaderCard>

        <div className="mt-6 space-y-6">
          {/* Profile Overview Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="relative mr-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium text-xl">
                  JD
                </div>
                {/* Camera Icon for Upload */}
                <button
                  onClick={handleProfilePictureUpload}
                  className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                >
                  <FaCamera className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
                <p className="text-gray-500 text-sm">john.doe@example.com</p>
                <div className="flex items-center mt-2 space-x-2">
                  <span className="flex items-center text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    <FaCheckCircle className="w-3 h-3 mr-1" /> Verified
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Profile 85% complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
            
            <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <FaUserCheck className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-gray-900 font-medium">Complete Profile Setup</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <FaShieldAlt className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium">Enable Two-Factor Auth</span>
                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                  </div>
                </div>
                <button
                  onClick={() => router.push("/dashboard/profile/security")}
                  className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                >
                  Setup
                </button>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
            {[
              {
                icon: FaUser,
                title: "Profile Information",
                description: "Manage your personal details and verification",
                badge: "85% Complete",
                badgeColor: "bg-green-100 text-green-800",
                onClick: () => router.push("/dashboard/profile/information"),
              },
              {
                icon: FaBell,
                title: "Notifications",
                description: "Control how you receive updates and alerts",
                onClick: () => router.push("/dashboard/profile/notifications"),
              },
              {
                icon: FaCog,
                title: "Preferences",
                description: "Language, timezone, and accessibility settings",
                onClick: () => router.push("/dashboard/profile/preference"),
              },
              {
                icon: FaLock,
                title: "Security & Privacy",
                description: "Manage your security settings and devices",
                onClick: () => router.push("/dashboard/profile/security"),
              },
              {
                icon: FaLink,
                title: "Linked Accounts",
                description: "Connect and manage social accounts",
                onClick: () => router.push("/dashboard/profile/accounts"),
              },
              {
                icon: FaQuestionCircle,
                title: "Help and Support",
                description: "Get the help you need with our comprehensive support center",
                onClick: () => router.push("/dashboard/profile/supports"),
              },
            ].map((section, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={section.onClick}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <section.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-gray-900 font-medium mr-2">
                        {section.title}
                      </h3>
                      {section.badge && (
                        <span
                          className={`text-xs px-2 py-1 rounded ${section.badgeColor}`}
                        >
                          {section.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {section.description}
                    </p>
                  </div>
                </div>
                <FaChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>

          {/* Sign Out Button */}
          <div className="bg-white rounded-lg shadow-sm">
            <button className="flex items-center w-full p-4 text-red-600 font-medium hover:bg-red-50 transition-colors rounded-lg">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <FaSignOutAlt className="w-4 h-4 text-red-600" />
              </div>
              <span>Sign Out</span>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 space-y-1 py-4">
            <div>KFX Remittance v2.1.0</div>
            <div>© 2025 KFX Financial Services</div>
          </div>
        </div>
      </div>
    </div>
  );
}
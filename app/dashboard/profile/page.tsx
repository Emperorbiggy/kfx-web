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
        // Handle file upload logic here
        console.log('Selected file:', file);
      }
    };
    input.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]" />

      <div className="px-4 sm:px-6">
        <ProfileHeaderCard variant="default" onBack={() => router.back()}>
          <AppHeading text="Profile & Settings" type={HeadingType.H4} />
        </ProfileHeaderCard>
      </div>

      <div className="px-4 sm:px-6 mt-6 space-y-6">
        {/* Profile Overview Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className="relative mr-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-secondary-grey-300 flex items-center justify-center text-white font-medium text-xl">
                  JD
                </div>
                {/* Camera Icon for Upload */}
                <button
                  onClick={handleProfilePictureUpload}
                  className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <FaCamera className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1">
                <AppHeading text="John Doe" type={HeadingType.H4} />
                <p className="text-secondary-grey-600 text-sm mt-1">
                  john.doe@example.com
                </p>
                <div className="flex items-center mt-3 space-x-2">
                  <span className="flex items-center text-xs bg-secondary-green-100 text-secondary-green-800 px-2 py-1 rounded-full">
                    <FaCheckCircle className="w-3 h-3 mr-1" /> Verified
                  </span>
                  <span className="flex items-center text-xs bg-secondary-blue-100 text-secondary-blue-800 px-2 py-1 rounded-full">
                    Premium
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-secondary-grey-600 font-medium">
                Profile 85% complete
              </span>
              <span className="text-sm text-secondary-grey-600 font-medium">
                85%
              </span>
            </div>
            <div className="w-full bg-secondary-grey-200 rounded-full h-2">
              <div
                className="bg-secondary-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-primary-black text-lg">Quick Actions</h3>

          <div className="bg-white rounded-lg shadow-sm divide-y divide-secondary-grey-100">
            <div className="flex items-center justify-between p-4 hover:bg-secondary-grey-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary-grey-100 flex items-center justify-center mr-3">
                  <FaUserCheck className="w-5 h-5 text-secondary-grey-600" />
                </div>
                <div>
                  <button
                    onClick={() =>
                      router.push("/dashboard/profile/information")
                    }
                    className="text-primary-black font-medium text-left"
                  >
                    Complete Profile Setup
                  </button>
                </div>
              </div>
              <FaChevronRight className="w-4 h-4 text-secondary-grey-400" />
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-secondary-grey-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary-grey-100 flex items-center justify-center mr-3">
                  <FaShieldAlt className="w-5 h-5 text-secondary-grey-600" />
                </div>
                <div>
                  <span className="font-medium text-primary-black">
                    Enable Two-Factor Auth
                  </span>
                  <p className="text-sm text-secondary-grey-500 mt-1">
                    Add an extra layer of security
                  </p>
                </div>
              </div>
              <button
                onClick={() => router.push("/dashboard/profile/security")}
                className="text-secondary-blue-600 font-medium text-sm hover:text-secondary-blue-700 transition-colors"
              >
                Setup
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow-sm divide-y divide-secondary-grey-100">
          {[
            {
              icon: FaUser,
              title: "Profile Information",
              description: "Manage your personal details and verification",
              badge: "85% Complete",
              badgeColor: "bg-secondary-green-100 text-secondary-green-800",
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
              className="flex items-center justify-between p-4 hover:bg-secondary-grey-50 cursor-pointer transition-colors"
              onClick={section.onClick}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary-grey-100 flex items-center justify-center mr-3">
                  <section.icon className="w-5 h-5 text-secondary-grey-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-medium text-primary-black mr-2">
                      {section.title}
                    </h3>
                    {section.badge && (
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${section.badgeColor}`}
                      >
                        {section.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-secondary-grey-500 mt-1">
                    {section.description}
                  </p>
                </div>
              </div>
              <FaChevronRight className="w-4 h-4 text-secondary-grey-400" />
            </div>
          ))}
        </div>

        {/* Sign Out Button */}
        <div className="bg-white rounded-lg shadow-sm">
          <button className="flex items-center justify-between w-full p-4 text-secondary-red-600 font-medium hover:bg-secondary-red-50 transition-colors rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-secondary-red-100 flex items-center justify-center mr-3">
                <FaSignOutAlt className="w-5 h-5 text-secondary-red-600" />
              </div>
              <span>Sign Out</span>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-secondary-grey-500 mt-8 space-y-1 pb-8">
          <div>KFX Remittance v2.1.0</div>
          <div>© 2025 KFX Financial Services</div>
        </div>
      </div>
    </div>
  );
}
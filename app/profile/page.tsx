import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { 
  FaCheckCircle, 
  FaStar, 
  FaCog, 
  FaBell, 
  FaUser, 
  FaLock, 
  FaLink, 
  FaQuestionCircle, 
  FaSignOutAlt,
  FaUserCheck,
  FaShieldAlt,
  FaChevronRight
} from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div className="mx-5">
      <div className="h-[20px]"></div>
      <ProfileHeaderCard 
        title="Profile & Settings" 
        variant="default"
      />
      
      <div className="px-5 pb-5 mt-5 space-y-4">
        {/* Profile Overview Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium text-xl mr-4">
                JD
              </div>
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-600">john.doe@example.com</p>
                <div className="flex items-center mt-2 space-x-2">
                  <span className="flex items-center text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    <FaCheckCircle className="w-3 h-3 mr-1" /> Verified
                  </span>
                  <span className="flex items-center text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Premium
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600 font-medium">Profile 85% complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Quick Actions</h3>
          
          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <FaUserCheck className="w-4 h-4 text-gray-600" />
                </div>
                <span className="font-medium text-gray-900">Complete Profile Setup</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <FaShieldAlt className="w-4 h-4 text-gray-600" />
                </div>
                <span className="font-medium text-gray-900">Enable Two-Factor Auth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow-sm">
          {[
            { 
              icon: FaUser, 
              title: "Profile Information", 
              description: "Manage your personal details and verification",
              badge: "85% Complete",
              badgeColor: "bg-green-100 text-green-800"
            },
            { 
              icon: FaBell, 
              title: "Notifications", 
              description: "Control how you receive updates and alerts" 
            },
            { 
              icon: FaCog, 
              title: "Preferences", 
              description: "Language, timezone, and accessibility settings" 
            },
            { 
              icon: FaLock, 
              title: "Security & Privacy", 
              description: "Manage your security settings and devices" 
            },
            { 
              icon: FaLink, 
              title: "Linked Accounts", 
              description: "Connect and manage social accounts" 
            },
            { 
              icon: FaQuestionCircle, 
              title: "Help and Support", 
              description: "Get the help you need with our comprehensive support center" 
            },
          ].map((section, index) => (
            <div key={index} className={`flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer ${index !== 5 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <section.icon className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium text-gray-900 mr-2">{section.title}</h3>
                    {section.badge && (
                      <span className={`text-xs px-2 py-1 rounded ${section.badgeColor}`}>
                        {section.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                </div>
              </div>
              <FaChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Sign Out Button */}
        <div className="bg-white rounded-lg shadow-sm">
          <button className="flex items-center justify-between w-full p-4 text-red-600 font-medium hover:bg-red-50">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <FaSignOutAlt className="w-4 h-4 text-red-600" />
              </div>
              <span>Sign Out</span>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8 space-y-1">
          <div>KFX Remittance v2.1.0</div>
          <div>© 2025 KFX Financial Services</div>
        </div>
      </div>
    </div>
  );
}
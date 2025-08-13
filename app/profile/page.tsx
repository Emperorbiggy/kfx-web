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
  FaShieldAlt
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
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
              <div className="flex items-center mt-1 space-x-2">
                <span className="flex items-center text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  <FaCheckCircle className="w-3 h-3 mr-1" /> verified
                </span>
                <span className="flex items-center text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  <FaStar className="w-3 h-3 mr-1" /> Premium
                </span>
              </div>
            </div>
           
          </div>
          
          <div className="mt-6">
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-700 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400 font-medium">Profile 85% complete</span>
            </div>
          </div>
        </div>
        <h3 className="font-medium mb-4 flex items-center">
            {/* <FaCog className="w-4 h-4 mr-2 text-gray-500" /> */}
            Quick Actions
          </h3>

        {/* Quick Actions Card */}
        <div className="bg-white rounded-lg shadow-sm p-2">
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaUserCheck className="w-4 h-4 mr-3 text-gray-500" />
              <span>Complete Profile Setup</span>
            </li>
            
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-2">
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaShieldAlt className="w-4 h-4 mr-3 text-gray-500" />
              <span>Enable Two-Factor Auth</span>
            </li>
            
          </ul>
        </div>

        {/* Other Section Cards */}
        {[
           { 
    icon: FaUser, 
    title: (
      <>
        Profile Information{" "}
        <span className="text-sm font-medium">88% Complete</span>
      </>
    ), 
    description: "Manage your personal details and verification" 
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
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <section.icon className="w-4 h-4 mr-2 text-gray-500" />
              <h3 className="font-medium">{section.title}</h3>
            </div>
            <p className="text-sm text-gray-500 mt-1 ml-6">{section.description}</p>
          </div>
        ))}

        {/* Sign Out Button */}
        <div className="bg-white rounded-lg shadow-sm p-2">
          <button className="flex items-center w-full text-red-600 font-medium">
            <FaSignOutAlt className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <div>KPX Rainlimited v2.1.0</div>
          <div>© 2023 KPX Financial Services</div>
        </div>
      </div>
    </div>
  );
}
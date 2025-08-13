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
  FaSignOutAlt 
} from "react-icons/fa";

export default function PrefrencePage() {
  return (
    <div className="mx-5">
      <div className="h-[20px]"></div>
      <ProfileHeaderCard 
        title="Notifications" 
        variant="default"
      />
      
      <div className="px-5 pb-5 mt-5 space-y-4">
        {/* Profile Overview Card */}
        
      </div>
    </div>
  );
}
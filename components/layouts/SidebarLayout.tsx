import React from "react";
import Image from "next/image";
import {kfxLogoColored} from "@/assets/img";
import { FiHome, FiSend, FiClock, FiUser } from "react-icons/fi";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <>
      {/* Sidebar - Standalone component */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-0 flex flex-col">
        {/* Logo Section */}
        <div className="px-6 py-4 border-b border-gray-200">
          <Image 
            src={kfxLogoColored} 
            alt="KFX Logo" 
            width={173}
            height={63}
            className="object-contain"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg bg-gradient-main text-white font-medium">
                <FiHome className="mr-3 text-lg" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
                <FiSend className="mr-3 text-lg" />
                <span>Send Money</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
                <FiClock className="mr-3 text-lg" />
                <span>Transaction History</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
                <FiUser className="mr-3 text-lg" />
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium mr-3">
              E
            </div>
            <div>
              <p className="font-medium text-gray-900">Emmanuel Samuel</p>
              <p className="text-sm text-gray-500">Premium Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Children content will be rendered where this component is used */}
      {children}
    </>
  );
}
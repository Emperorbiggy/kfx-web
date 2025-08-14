import { kfxLogoColored } from "@/assets/img";
import Image from "next/image";
import {
  PAGE_PADDING,
  SIDEBAR_WIDTH_COLLAPSED,
  SIDEBAR_WIDTH_OPEN,
} from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { IUser } from "@/types/user";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function SideBar({
  navigationItems,
  user,
  isOpen,
  toggleSidebar,
}: {
  navigationItems: Array<{
    icon: React.ElementType;
    label: string;
    href: string;
    active?: boolean;
  }>;
  user: IUser;
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white shadow-sm transition-all duration-300 flex flex-col z-40`}
      style={{
        width: isOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_COLLAPSED,
        padding: PAGE_PADDING,
      }}
    >
      {/* Toggle button */}
      <button
        className="absolute z-40 top-[30%] right-[-10px] rounded-full h-5 w-5 flex items-center justify-center bg-gradient-main text-white p-1 font-semibold"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <MdOutlineKeyboardArrowLeft />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )}
      </button>

      {/* Logo */}
      <div className={`${isOpen ? "" : "flex justify-center"}`}>
        {isOpen ? (
          <Image src={kfxLogoColored} alt="KFX Logo" priority />
        ) : (
          <div className="w-8 h-8 bg-gradient-main rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="py-8 space-y-2 gap-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center ${isOpen ? "space-x-3 px-4" : "justify-center px-2"} py-3 rounded-xl transition-all duration-200 ${
                item.active
                  ? "bg-gradient-main text-white shadow-lg"
                  : "text-primary-blackLight hover:bg-gray-100 hover:text-gray-900"
              }`}
              title={!isOpen ? item.label : undefined}
            >
              <Icon size={20} />
              {isOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="flex-none mt-auto pt-4 border-t w-full">
        <div
          className={`flex items-center ${isOpen ? "space-x-3" : "justify-center"} rounded-xl hover:bg-gray-50 transition-colors cursor-pointer`}
        >
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">
              {user.firstName?.charAt(0) || "J"}
            </span>
          </div>
          {isOpen && (
            <div className="flex-1">
              <div className="font-medium text-gray-900 text-sm">
                {user.firstName}
              </div>
              <div className="text-xs text-gray-500">{user.plan} Member</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

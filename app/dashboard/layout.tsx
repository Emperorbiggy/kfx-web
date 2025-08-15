"use client"
import React, { useLayoutEffect, useState } from "react";
import {
  Home,
  Send,
  Clock,
  User,
} from "lucide-react";
import SideBar from "@/components/layouts/SideBar";
import Header from "@/components/layouts/Header";
import dummyUsers from "@/utils/dummy";
import { SIDEBAR_WIDTH_COLLAPSED, SIDEBAR_WIDTH_OPEN } from "@/utils/constants";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useLayoutEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true); // open on desktop
      } else {
        setIsSidebarOpen(false); // closed on mobile
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Update isSidebarOpen based on window width
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
      // setSidebarWidth(sideBarRef.current?.offsetWidth || 0);
    };

    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationItems = [
    { icon: Home, label: "Dashboard", href: "/", active: true },
    { icon: Send, label: "Send Money", href: "/send-money" },
    { icon: Clock, label: "Transaction History", href: "/transactions" },
    { icon: User, label: "Profile", href: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-primary-grey-100">
      {/* Sidebar */}
      <SideBar
        navigationItems={navigationItems}
        user={dummyUsers[0]}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {/* Main Content */}
      <div style={{ marginLeft: isSidebarOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_COLLAPSED }}>
        {/* Header */}
        <Header user={dummyUsers[0]} />

        {/* Page Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

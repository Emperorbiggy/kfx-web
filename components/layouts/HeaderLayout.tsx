"use client";

import React, { useState, useEffect } from "react";
import { FiSettings, FiBell, FiMenu } from "react-icons/fi";
import { WiSunrise, WiDaySunny, WiSunset, WiNightClear } from "react-icons/wi";
import ReactCountryFlag from "react-country-flag";

interface HeaderLayoutProps {
  children?: React.ReactNode;
  withSidebar?: boolean;
  onMenuToggle?: () => void; // Add this prop for mobile menu toggle
}

export default function HeaderLayout({ 
  children, 
  withSidebar = false, 
  onMenuToggle 
}: HeaderLayoutProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const currentHour = currentTime.getHours();
  let greeting = "Good morning";
  let DaytimeIcon = WiSunrise;
  let iconColor = "text-orange-400";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
    DaytimeIcon = WiSunrise;
    iconColor = "text-orange-400";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good afternoon";
    DaytimeIcon = WiDaySunny;
    iconColor = "text-yellow-500";
  } else if (currentHour >= 17 && currentHour < 20) {
    greeting = "Good evening";
    DaytimeIcon = WiSunset;
    iconColor = "text-orange-500";
  } else {
    greeting = "Good night";
    DaytimeIcon = WiNightClear;
    iconColor = "text-indigo-500";
  }

  return (
    <>
      <header className={`bg-white border-b border-gray-200 py-6 px-4 ${withSidebar ? 'md:ml-64' : ''}`}>
        <div className="flex justify-between items-center">
          {/* Left side - Mobile menu and greeting */}
          <div className="flex items-center space-x-2">
            {/* Mobile menu button - only shows on small screens */}
            <button 
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={onMenuToggle}
            >
              <FiMenu className="h-5 w-5" />
            </button>
            
            <div className="flex items-center">
              
              <div>
                <h1 className="text-lg md:text-xl font-semibold text-gray-900">
                  {greeting}, Emmanuel!
                </h1>
                <p className="text-xs md:text-sm text-gray-500 hidden md:block">
                  Ready to make your next transfer?
                </p>
              </div>
             <DaytimeIcon className={`text-3xl w-10 h-10 ${iconColor} mr-6`} />
            </div>
          </div>

          {/* Right side - Icons and User info */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 pr-4">
              <ReactCountryFlag
                countryCode="NG"
                svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                  borderRadius: '2px',
                }}
                className="border border-gray-100"
                title="Nigeria"
                aria-label="Nigeria flag"
              />
              <span className="text-sm font-medium text-gray-700 hidden lg:inline-block border-r border-gray-200 pr-4">
                Nigeria
              </span>
            </div>
            
            <div className="relative">
              <FiBell className="text-gray-600 h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-gray-500 text-white text-xs flex items-center justify-center border-2 border-white">
                3
              </span>
            </div>
            
            <FiSettings className="text-gray-600 h-5 w-5 hidden md:block" />
            
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              E
            </div>
          </div>
        </div>
      </header>

      {children && (
        <main className={`flex-1 ${withSidebar ? 'md:ml-64' : ''}`}>
          {children}
        </main>
      )}
    </>
  );
}
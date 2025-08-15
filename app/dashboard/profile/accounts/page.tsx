"use client";

import React, { useState } from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function LinkedAccountsPage() {
  const router = useRouter();
  const [accounts, setAccounts] = useState({
    facebook: {
      connected: false,
      name: "Facebook"
    },
    google: {
      connected: true,
      name: "Google"
    }
  });

  const handleConnect = (platform: string) => {
    setAccounts(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform as keyof typeof prev],
        connected: true
      }
    }));
  };

  const handleDisconnect = (platform: string) => {
    setAccounts(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform as keyof typeof prev],
        connected: false
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]"></div>
      
      {/* Header */}
      <div className="px-4 sm:px-6">
        <ProfileHeaderCard 
          title="Linked Accounts" 
          variant="default"
          onBack={() => router.push("/dashboard/profile")}
        />
      </div>
      
      {/* Main Content */}
      <div className="px-4 sm:px-6 mt-6 space-y-6 max-w-none">
        {/* Social Accounts Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <div className="flex items-center mb-6 lg:mb-8">
            <FiLink className="w-5 h-5 text-gray-600 mr-3" />
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Social Accounts</h2>
          </div>
          
          <div className="space-y-4 lg:space-y-6">
            {/* Facebook */}
            <div className="flex items-center justify-between p-4 lg:p-6 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaFacebook className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                    {accounts.facebook.name}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-500">
                    {accounts.facebook.connected ? "Connected" : "Not connected"}
                  </p>
                </div>
              </div>
              
              {accounts.facebook.connected ? (
                <button
                  onClick={() => handleDisconnect('facebook')}
                  className="px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Disconnect
                </button>
              ) : (
                <button
                  onClick={() => handleConnect('facebook')}
                  className="px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Connect
                </button>
              )}
            </div>

            {/* Google */}
            <div className="flex items-center justify-between p-4 lg:p-6 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <FaGoogle className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                    {accounts.google.name}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-500">
                    {accounts.google.connected ? "Connected" : "Not connected"}
                  </p>
                </div>
              </div>
              
              {accounts.google.connected ? (
                <button
                  onClick={() => handleDisconnect('google')}
                  className="px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Disconnect
                </button>
              ) : (
                <button
                  onClick={() => handleConnect('google')}
                  className="px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Connect
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 px-4 sm:px-6 pb-8">
        <Button
          variant="outline"
          className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 lg:py-4 rounded-full text-sm lg:text-base font-medium"
          onClick={() => router.push("/profile")}
        >
          Cancel
        </Button>
        <Button 
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 lg:py-4 rounded-full font-medium transition-colors text-sm lg:text-base"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
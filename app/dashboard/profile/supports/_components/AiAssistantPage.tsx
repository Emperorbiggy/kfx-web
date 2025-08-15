"use client";

import React, { useState } from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { FiSend, FiPaperclip, FiSmile } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

interface AiAssistantPageProps {
  onBack: () => void;
}

export default function AiAssistantPage({ onBack }: AiAssistantPageProps) {
  const [newMessage, setNewMessage] = useState("");

  const supportOptions = [
    "Account Verification/KYC",
    "Funds Under Review",
    "Deposit and Funding",
    "Report Unauthorized Account Access/Hacked Account",
    "Account Profile Update, Login and OTP issues",
    "Account Suspension"
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Handle message sending
      setNewMessage("");
    }
  };

  const handleOptionClick = (option: string) => {
    // Handle option selection
    console.log("Selected option:", option);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-[20px]"></div>
      
      <div className="px-4 sm:px-6">
        <ProfileHeaderCard 
          title="AI Assistant (Zuri)" 
          variant="default"
          onBack={onBack}
        />
      </div>
      
      <div className="flex-1 px-4 sm:px-6 mt-6 pb-6">
        <div className="bg-white rounded-lg shadow-sm h-full flex flex-col">
          {/* AI Welcome Message */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaRobot className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 text-sm leading-relaxed">
                  Hello Emmanuel, This is Zuri from KFX Remittance, for any issue or request, kindly 
                  select the option below that best suit your needs
                </p>
              </div>
            </div>
          </div>

          {/* Support Options */}
          <div className="flex-1 p-6">
            <div className="space-y-3">
              {supportOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-right p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <span className="text-blue-600 text-sm font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiSmile className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiPaperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type here"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
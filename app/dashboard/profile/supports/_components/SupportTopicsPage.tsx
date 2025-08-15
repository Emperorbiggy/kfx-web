"use client";

import React from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { FiChevronRight } from "react-icons/fi";

interface SupportTopicsPageProps {
  onBack: () => void;
}

export default function SupportTopicsPage({ onBack }: SupportTopicsPageProps) {
  const supportTopics = [
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide",
    "Verifying your KFC Remittance Account: Step-by-step guide"
  ];

  const handleTopicClick = (topic: string) => {
    // Handle topic selection
    console.log("Selected topic:", topic);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]"></div>
      
      <div className="px-4 sm:px-6">
        <ProfileHeaderCard 
          title="Support Topics" 
          variant="default"
          onBack={onBack}
        />
      </div>
      
      <div className="px-4 sm:px-6 mt-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Choose Your Preferred Support Method</h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {supportTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => handleTopicClick(topic)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-gray-700 text-sm pr-4">{topic}</span>
                <FiChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
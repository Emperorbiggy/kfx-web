"use client";

import React from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { useRouter } from "next/navigation";
import AppHeading from "@/components/texts/Headings";
import { HeadingType } from "@/types/enum";
import {
  FiMessageCircle,
  FiMail,
  FiHelpCircle,
  FiChevronRight,
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

interface MainSupportPageProps {
  onSubmitRequest: () => void;
  onLiveChat: () => void;
  onAiAssistant: () => void;
  onBrowseTopics: () => void;
}

export default function MainSupportPage({
  onSubmitRequest,
  onLiveChat,
  onAiAssistant,
  onBrowseTopics,
}: MainSupportPageProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[20px]"></div>

      {/* Header */}
      <div className="px-4 sm:px-6">
        <ProfileHeaderCard
          variant="default"
          onBack={() => router.push("/dashboard/profile")}
        >
          <AppHeading text="Profile & Settings" type={HeadingType.H4} />
        </ProfileHeaderCard>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 mt-6 space-y-6 max-w-none">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">
            How can we help you today?
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Choose the option that works
            <br />
            best for you
          </p>
        </div>

        {/* Live Support Status */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Live support available
                </h3>
                <p className="text-sm text-gray-600">
                  Monday - Friday: 9AM - 6PM EST
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Online Now
              </span>
              <p className="text-xs text-gray-500 mt-1">
                Average wait: 2 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Support Methods */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Choose Your Preferred Support Method
          </h2>

          {/* Live Chat Support */}
          <div
            onClick={onLiveChat}
            className="bg-white rounded-lg shadow-sm p-4 lg:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FiMessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Live Chat Support
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get instant help from our team
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">2 min</span>
                    <span className="inline-flex items-center text-xs text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      Available
                    </span>
                  </div>
                </div>
              </div>
              <FiChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* AI Assistant */}
          <div
            onClick={onAiAssistant}
            className="bg-white rounded-lg shadow-sm p-4 lg:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaRobot className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                  <p className="text-sm text-gray-600">
                    Quick answers to questions
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">Instant</span>
                    <span className="inline-flex items-center text-xs text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      Available
                    </span>
                  </div>
                </div>
              </div>
              <FiChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Browse Help Topics */}
          <div
            onClick={onBrowseTopics}
            className="bg-white rounded-lg shadow-sm p-4 lg:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FiHelpCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Browse Help Topics
                  </h3>
                  <p className="text-sm text-gray-600">
                    Find answers in our knowledge base
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">Self-service</span>
                    <span className="inline-flex items-center text-xs text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      Available
                    </span>
                  </div>
                </div>
              </div>
              <FiChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Submit Request */}
          <div
            onClick={onSubmitRequest}
            className="bg-white rounded-lg shadow-sm p-4 lg:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FiMail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Submit Request</h3>
                  <p className="text-sm text-gray-600">
                    Send us a detailed message
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">24h response</span>
                    <span className="inline-flex items-center text-xs text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      Available
                    </span>
                  </div>
                </div>
              </div>
              <FiChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import AppHeading from "@/components/texts/Headings";
import { HeadingType } from "@/types/enum";

export default function ProfileInformationPage() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState("Male");
  const [makeProfilePublic, setMakeProfilePublic] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 px-6">
      {/* Header with back button */}
      <div className="h-[20px]"></div>
      <ProfileHeaderCard
          variant="default"
          onBack={() => router.push("/dashboard/profile")}
        >
          <AppHeading text="Profile & Settings" type={HeadingType.H4} />
        </ProfileHeaderCard>
      {/* Main Content */}
      <div className="w-full">
        
          <div className="p-8 w-full">
            {/* Basic Information Section */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-8">Basic Information</h2>
              
              <div className="space-y-8">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-blue-600 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-blue-600 text-base"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <input
                    type="text"
                    defaultValue="Frequent sender to family abroad"
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-500 text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-blue-600 text-base"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="tel"
                      defaultValue="+234 801 234 5678"
                      className="flex-1 px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-blue-600 text-base"
                    />
                    <button className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-blue-600 font-medium hover:bg-gray-50 transition-colors text-sm">
                      Verify
                    </button>
                  </div>
                </div>

                {/* Nationality & DOB */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white text-gray-700 text-base">
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Kenya">Kenya</option>
                      </select>
                      <svg
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      defaultValue="01 / 01 / 1990"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-700 text-base"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Gender
                  </label>
                  <div className="space-y-4">
                    {["Male", "Female", "Other"].map((gender) => (
                      <label
                        key={gender}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <div className="relative">
                          <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={selectedGender === gender}
                            onChange={(e) => setSelectedGender(e.target.value)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              selectedGender === gender
                                ? "border-gray-900 bg-gray-900"
                                : "border-gray-300"
                            }`}
                          >
                            {selectedGender === gender && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>
                        <span className="text-gray-700">{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Profession */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profession
                  </label>
                  <input
                    type="text"
                    defaultValue="Software Engineer"
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-blue-600 text-base"
                  />
                </div>

                {/* Emergency Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact
                  </label>
                  <input
                    type="tel"
                    defaultValue="+234 802 345 6789"
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-blue-600 text-base"
                  />
                </div>

                {/* Make profile public toggle */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setMakeProfilePublic(!makeProfilePublic)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      makeProfilePublic ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        makeProfilePublic ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span className="text-gray-700 font-medium">Make profile public</span>
                </div>
              </div>
            </div>

            {/* Document Verification Section */}
            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">Document Verification</h3>

              <div className="space-y-6">
                {/* Upload National ID */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xl font-light text-gray-400">+</span>
                    </div>
                    <span className="font-medium text-gray-700">Upload National ID</span>
                    <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                {/* Upload Proof of Address */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xl font-light text-gray-400">+</span>
                    </div>
                    <span className="font-medium text-gray-700">Upload Proof of Address</span>
                    <p className="text-sm text-gray-500">Utility bill or bank statement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 mt-10 pt-8 border-t border-gray-200">
              <Button
                variant="white"
                className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-full text-base font-medium"
              >
                Cancel
              </Button>
              <Button 
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-full font-medium transition-colors text-base"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    
  );
}
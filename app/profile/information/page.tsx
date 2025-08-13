"use client";

import React, { useState } from "react";
import { ProfileHeaderCard } from "@/components/ui/ProfileHeaderCard";
import { Button } from "@/components/ui/button";

export default function App() {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [makeProfilePublic, setMakeProfilePublic] = useState(false);

  return (
    <div className="flex flex-col h-full max-w-4xl mx-5">
      {/* Top Spacer */}
      <div className="h-[20px]" />

      {/* Profile Header */}
      <ProfileHeaderCard title="Basic Information" variant="default" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-5 pb-5 mt-5 space-y-6">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              First Name
            </label>
            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
              <p className="text-gray-600">John</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Last Name
            </label>
            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
              <p className="text-gray-600">Doe</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Bio
          </label>
          <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
            <p className="text-gray-400">Frequent sender to family abroad</p>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Mobile Number
          </label>
          <div className="flex items-center gap-3">
            <div className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white">
              <p className="text-gray-600">+234 801 234 5678</p>
            </div>
            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Verify
            </button>
          </div>
        </div>

        {/* Nationality & DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Nationality
            </label>
            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white flex items-center justify-between">
              <p className="text-gray-600">Nigeria</p>
              <svg
                className="w-4 h-4 text-gray-400"
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
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Date of Birth
            </label>
            <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white flex items-center justify-between">
              <p className="text-gray-600">01 / 01 / 1990</p>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">
            Gender
          </label>
          <div className="space-y-3">
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
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedGender === gender
                        ? "border-gray-900"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedGender === gender && (
                      <div className="w-2 h-2 rounded-full bg-gray-900"></div>
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
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Profession
          </label>
          <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
            <p className="text-gray-400">Software Engineer</p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Emergency Contact
          </label>
          <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white">
            <p className="text-gray-400">+234 802 345 6789</p>
          </div>
        </div>

        {/* Make profile public toggle */}
        <div className="flex items-center gap-3">
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
          <span className="text-gray-700">Make profile public</span>
        </div>

        {/* Document Verification */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Document Verification</h3>

          {/* Upload National ID */}
          <div className="mt-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-2xl font-light text-gray-400">+</span>
                <span className="font-medium text-gray-700">
                  Upload National ID
                </span>
                <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>

          {/* Upload Proof of Address */}
          <div className="mt-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-2xl font-light text-gray-400">+</span>
                <span className="font-medium text-gray-700">
                  Upload Proof of Address
                </span>
                <p className="text-sm text-gray-500">
                  Utility bill or bank statement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-5 pb-8 mt-8">
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button variant="primary" className="flex-1">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

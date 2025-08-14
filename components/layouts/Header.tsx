import { IUser } from '@/types/user';
import { PAGE_PADDING } from '@/utils/constants';
import { Bell, Settings } from 'lucide-react';
import React from 'react'

function Header({ user }: { user: IUser }) {
  return (
      <header className="bg-white border-b border-gray-200 shadow-sm"
      style={{padding: PAGE_PADDING}}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            Good morning, {user.firstName}!
            {/* <span className="ml-2">📊</span> */}
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to make your next transfer?
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Country/Location */}
          <div className="flex items-center space-x-2 text-sm text-primary-blackLight rounded-full border border-primary-grey p-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>{user.location}</span>
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              9
            </span>
          </button>

          {/* Settings */}
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings size={20} />
          </button>

          {/* Profile */}
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-white font-medium text-sm">{user.firstName.charAt(0)}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
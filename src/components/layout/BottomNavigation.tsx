import React from 'react';
import { Home, Clock, User, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Clock, label: 'History' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
];

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between py-3">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex flex-col items-center px-3 py-1 text-gray-600 hover:text-indigo-600"
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
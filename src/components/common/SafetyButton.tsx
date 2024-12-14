import React, { useState } from 'react';
import { AlertCircle, Phone } from 'lucide-react';

export default function SafetyButton() {
  const [showEmergencyOptions, setShowEmergencyOptions] = useState(false);

  const handleEmergencyCall = () => {
    // In a real app, this would trigger an emergency protocol
    window.location.href = 'tel:999';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowEmergencyOptions(true)}
        className="fixed bottom-20 right-4 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
      >
        <AlertCircle className="w-6 h-6" />
      </button>

      {showEmergencyOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Emergency Options</h3>
            <div className="space-y-3">
              <button
                onClick={handleEmergencyCall}
                className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700"
              >
                <Phone className="w-5 h-5" />
                <span>Call Emergency Services</span>
              </button>
              <button
                onClick={() => setShowEmergencyOptions(false)}
                className="w-full py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
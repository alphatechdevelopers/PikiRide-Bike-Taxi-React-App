import React from 'react';

interface LocationInfoProps {
  icon: React.ReactNode;
  label: string;
  address: string;
}

export const LocationInfo: React.FC<LocationInfoProps> = ({ icon, label, address }) => (
  <div className="flex items-start space-x-3">
    {icon}
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm text-gray-600">{address}</p>
    </div>
  </div>
);

export default LocationInfo;
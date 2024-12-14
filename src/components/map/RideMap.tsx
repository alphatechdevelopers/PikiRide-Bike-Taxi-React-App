import React from 'react';
import { MapPin } from 'lucide-react';
import type { Location } from '../../types';

interface RideMapProps {
  pickup?: Location;
  destination?: Location;
  currentLocation?: Location;
}

export default function RideMap({ pickup, destination, currentLocation }: RideMapProps) {
  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-8 h-8 text-indigo-600 mx-auto" />
          <p className="mt-2 text-sm text-gray-600">Map integration will be implemented here</p>
        </div>
      </div>
    </div>
  );
}
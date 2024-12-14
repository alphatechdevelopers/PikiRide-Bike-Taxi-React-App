import React from 'react';
import { Clock, Navigation, MapPin } from 'lucide-react';
import type { Ride } from '../../types';
import { formatTimeAgo } from '../../utils/date';
import { formatCurrency } from '../../utils/currency';
import { formatDistance } from '../../utils/distance';
import { RideStatusBadge } from './RideStatusBadge';
import { LocationInfo } from '../common/LocationInfo';

interface RideHistoryCardProps {
  ride: Ride;
}

export const RideHistoryCard: React.FC<RideHistoryCardProps> = ({ ride }) => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center space-x-2">
        <Clock className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-500">{formatTimeAgo(ride.createdAt)}</span>
      </div>
      <RideStatusBadge status={ride.status} />
    </div>
    
    <div className="space-y-2">
      <LocationInfo
        icon={<Navigation className="w-5 h-5 text-indigo-600 mt-1" />}
        label="From"
        address={ride.pickup.address}
      />
      
      <LocationInfo
        icon={<MapPin className="w-5 h-5 text-indigo-600 mt-1" />}
        label="To"
        address={ride.destination.address}
      />
    </div>
    
    <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-3 gap-4">
      <div>
        <p className="text-xs text-gray-500">Fare</p>
        <p className="text-sm font-medium">{formatCurrency(ride.fare, 'KES')}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Distance</p>
        <p className="text-sm font-medium">{formatDistance(ride.distance)}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500">Duration</p>
        <p className="text-sm font-medium">{Math.round(ride.duration / 60)} mins</p>
      </div>
    </div>
  </div>
);

export default RideHistoryCard;
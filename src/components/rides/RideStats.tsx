import React from 'react';
import { DollarSign, Navigation } from 'lucide-react';
import { formatCurrency } from '../../utils/currency';
import { formatDistance } from '../../utils/distance';

interface RideStatsProps {
  fare: number;
  distance: number;
}

const RideStats: React.FC<RideStatsProps> = ({ fare, distance }) => (
  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
    <div className="flex items-center space-x-3">
      <DollarSign className="w-5 h-5 text-indigo-600" />
      <div>
        <p className="text-sm font-medium">Estimated Fare</p>
        <p className="text-sm text-gray-600">{formatCurrency(fare, 'KES')}</p>
      </div>
    </div>
    
    <div className="flex items-center space-x-3">
      <Navigation className="w-5 h-5 text-indigo-600" />
      <div>
        <p className="text-sm font-medium">Distance</p>
        <p className="text-sm text-gray-600">{formatDistance(distance)}</p>
      </div>
    </div>
  </div>
);

export default RideStats;
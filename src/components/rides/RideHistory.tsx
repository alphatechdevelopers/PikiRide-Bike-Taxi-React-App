import React from 'react';
import { Clock, Navigation, MapPin } from 'lucide-react';
import type { Ride } from '../../types';
import { formatTimeAgo } from '../../utils/date';
import { formatCurrency } from '../../utils/currency';
import { formatDistance } from '../../utils/distance';
import RideHistoryCard from './RideHistoryCard';

interface RideHistoryProps {
  rides: Ride[];
}

export const RideHistory: React.FC<RideHistoryProps> = ({ rides }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold mb-4">Recent Rides</h2>
    {rides.map((ride) => (
      <RideHistoryCard key={ride.id} ride={ride} />
    ))}
  </div>
);

export default RideHistory;
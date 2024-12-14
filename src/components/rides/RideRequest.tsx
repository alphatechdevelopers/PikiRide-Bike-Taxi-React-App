import React from 'react';
import { Clock, Navigation, DollarSign, MapPin, CheckCircle, XCircle } from 'lucide-react';
import type { RideRequest as RideRequestType } from '../../types';
import { formatCurrency } from '../../utils/currency';
import { formatTimeAgo } from '../../utils/date';
import { formatDistance } from '../../utils/distance';
import LocationInfo from './LocationInfo';
import ActionButton from '../common/ActionButton';
import RideStats from './RideStats';

interface RideRequestProps {
  request: RideRequestType;
  onAccept: () => void;
  onDecline: () => void;
  loading?: boolean;
}

const RideRequest: React.FC<RideRequestProps> = ({ 
  request, 
  onAccept, 
  onDecline,
  loading = false 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">New Ride Request</h3>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-500">{formatTimeAgo(new Date())}</span>
        </div>
      </div>

      <div className="space-y-4">
        <LocationInfo
          icon={<Navigation className="w-5 h-5 text-indigo-600 mt-1" />}
          label="Pickup Location"
          address={request.pickup.address}
        />

        <LocationInfo
          icon={<MapPin className="w-5 h-5 text-indigo-600 mt-1" />}
          label="Destination"
          address={request.destination.address}
        />

        <RideStats
          fare={request.estimatedFare}
          distance={request.estimatedDistance}
        />
      </div>

      <div className="mt-6 flex space-x-3">
        <ActionButton
          onClick={onAccept}
          variant="primary"
          label="Accept"
          disabled={loading}
          icon={<CheckCircle />}
        />
        <ActionButton
          onClick={onDecline}
          variant="secondary"
          label="Decline"
          disabled={loading}
          icon={<XCircle />}
        />
      </div>
    </div>
  );
};

export default RideRequest;
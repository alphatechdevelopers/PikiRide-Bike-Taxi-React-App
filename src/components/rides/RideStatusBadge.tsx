import React from 'react';
import type { Ride } from '../../types';

interface RideStatusBadgeProps {
  status: Ride['status'];
}

const statusStyles = {
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  pending: 'bg-yellow-100 text-yellow-800',
  accepted: 'bg-indigo-100 text-indigo-800',
} as const;

export const RideStatusBadge: React.FC<RideStatusBadgeProps> = ({ status }) => (
  <span className={`px-2 py-1 rounded-full text-xs ${statusStyles[status]}`}>
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
);

export default RideStatusBadge;
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'rider' | 'customer' | 'admin';
  profileImage?: string;
}

export interface Ride {
  id: string;
  customerId: string;
  riderId: string;
  pickup: Location;
  destination: Location;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
  fare: number;
  distance: number;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface RideRequest {
  pickup: Location;
  destination: Location;
  customerId: string;
  estimatedFare: number;
  estimatedDistance: number;
}
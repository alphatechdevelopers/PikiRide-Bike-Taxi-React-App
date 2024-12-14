import React from 'react';
import Header from './components/layout/Header';
import BottomNavigation from './components/layout/BottomNavigation';
import RideMap from './components/map/RideMap';
import RideRequest from './components/rides/RideRequest';
import RideHistory from './components/rides/RideHistory';
import SafetyButton from './components/common/SafetyButton';
import { useRideRequest } from './hooks/useRideRequest';

function App() {
  const { loading, error, handleAccept, handleDecline } = useRideRequest({
    onAcceptSuccess: () => alert('Ride accepted successfully!'),
    onDeclineSuccess: () => alert('Ride declined successfully!'),
  });

  const sampleRequest = {
    pickup: {
      latitude: -1.2921,
      longitude: 36.8219,
      address: "CBD, Nairobi"
    },
    destination: {
      latitude: -1.2975,
      longitude: 36.7924,
      address: "Westlands, Nairobi"
    },
    customerId: "1",
    estimatedFare: 250,
    estimatedDistance: 5.2
  };

  const sampleRides = [
    {
      id: "1",
      customerId: "1",
      riderId: "2",
      pickup: {
        latitude: -1.2921,
        longitude: 36.8219,
        address: "CBD, Nairobi"
      },
      destination: {
        latitude: -1.2975,
        longitude: 36.7924,
        address: "Westlands, Nairobi"
      },
      status: "completed",
      fare: 250,
      distance: 5.2,
      duration: 1800,
      createdAt: new Date(Date.now() - 3600000),
      updatedAt: new Date()
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RideMap
              pickup={sampleRequest.pickup}
              destination={sampleRequest.destination}
            />
            <div className="mt-8">
              <RideHistory rides={sampleRides} />
            </div>
          </div>
          <div>
            <RideRequest
              request={sampleRequest}
              onAccept={() => handleAccept(sampleRequest)}
              onDecline={() => handleDecline(sampleRequest)}
              loading={loading}
            />
          </div>
        </div>
      </main>
      <SafetyButton />
      <BottomNavigation />
    </div>
  );
}

export default App;
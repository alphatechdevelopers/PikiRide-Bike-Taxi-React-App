import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  onRate?: (rating: number) => void;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
} as const;

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  onRate,
}) => (
  <div className="flex space-x-1">
    {[...Array(maxRating)].map((_, index) => (
      <button
        key={index}
        onClick={() => onRate?.(index + 1)}
        className={`${onRate ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <Star
          className={`
            ${sizeClasses[size]}
            ${index < rating
              ? 'text-yellow-400 fill-current'
              : 'text-gray-300'
            }
            transition-colors
          `}
        />
      </button>
    ))}
  </div>
);

export default RatingStars;
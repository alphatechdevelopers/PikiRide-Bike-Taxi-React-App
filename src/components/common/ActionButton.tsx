import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
  variant: 'primary' | 'secondary';
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  onClick, 
  variant, 
  label, 
  disabled = false,
  icon
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      flex items-center justify-center gap-2
      flex-1 py-2 px-4 rounded-md
      transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${
        variant === 'primary'
          ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500'
      }
    `}
  >
    {icon && <span className="w-5 h-5">{icon}</span>}
    {label}
  </button>
);

export default ActionButton;
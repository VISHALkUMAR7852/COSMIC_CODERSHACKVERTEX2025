import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface EmergencyBannerProps {
  visible: boolean;
  onClose: () => void;
}

const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="bg-red-500 text-white p-4 relative animate-slideDown">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-white" />
          <p className="font-medium">
            For medical emergencies, call 911 or your local emergency number immediately.
          </p>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-red-100 transition-colors"
          aria-label="Close emergency banner"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default EmergencyBanner;
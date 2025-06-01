import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Mic, Shield } from 'lucide-react';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation effect on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for fade-out animation to complete
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div 
        className={`bg-white rounded-xl shadow-xl max-w-md w-full transform transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Welcome to Rural Health Assistant</h2>
            <button 
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close welcome modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-gray-600 mb-6">
            I'm your AI-powered health assistant designed to help with medical questions and guide you to appropriate resources.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <MessageSquare className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-800">Ask Medical Questions</h3>
                <p className="text-gray-600 text-sm">Type any health-related question to get information and guidance.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mic className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-800">Voice Interface</h3>
                <p className="text-gray-600 text-sm">Use the microphone button to speak your questions instead of typing.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-800">Important Disclaimer</h3>
                <p className="text-gray-600 text-sm">This tool provides general information only and is not a substitute for professional medical advice.</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleClose}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg transition-colors font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
import React, { useState, useEffect } from 'react';
import { X, Heart, Brain, FirstAid } from 'lucide-react';

const WelcomeNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: 'AI-Powered Health Assistant',
      description: 'Get instant answers to your health questions'
    },
    {
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      title: 'Smart Symptom Analysis',
      description: 'Advanced AI to understand your health concerns'
    },
    {
      icon: <FirstAid className="h-6 w-6 text-green-500" />,
      title: 'Emergency Guidance',
      description: '24/7 support for medical situations'
    }
  ];

  useEffect(() => {
    // Show notification after a short delay
    setTimeout(() => setIsVisible(true), 1000);

    // Rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm w-full bg-white rounded-lg shadow-xl border border-green-100 p-4 transform transition-all duration-500 ease-in-out translate-y-0 opacity-100 z-50">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {features[currentFeature].icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">
            {features[currentFeature].title}
          </p>
          <p className="text-sm text-gray-500">
            {features[currentFeature].description}
          </p>
        </div>
      </div>

      <div className="mt-3 flex justify-center space-x-1">
        {features.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-3 rounded-full transition-all duration-300 ${
              index === currentFeature ? 'bg-green-500 w-6' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WelcomeNotification;
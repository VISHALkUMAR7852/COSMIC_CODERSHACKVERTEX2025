import React from 'react';
import { Info, Heart, Activity, Brain } from 'lucide-react';

const HealthInfo: React.FC = () => {
  const healthTips = [
    {
      id: 1,
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: 'Heart Health',
      content: 'Regular exercise and a balanced diet can help maintain heart health.',
    },
    {
      id: 2,
      icon: <Activity className="h-6 w-6 text-green-500" />,
      title: 'Physical Activity',
      content: 'Aim for at least 30 minutes of moderate physical activity daily.',
    },
    {
      id: 3,
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      title: 'Mental Wellness',
      content: 'Practice mindfulness and seek support when needed for mental health.',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Info className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold text-gray-800">Health Information</h2>
      </div>
      
      <div className="space-y-4">
        {healthTips.map(tip => (
          <div key={tip.id} className="border-l-4 border-primary pl-4 py-2">
            <div className="flex items-center gap-2 mb-1">
              {tip.icon}
              <h3 className="font-medium text-gray-800">{tip.title}</h3>
            </div>
            <p className="text-gray-600">{tip.content}</p>
          </div>
        ))}
      </div>
      
      <p className="mt-6 text-sm text-gray-500">
        This information is general in nature and should not replace professional medical advice.
      </p>
    </div>
  );
};

export default HealthInfo;
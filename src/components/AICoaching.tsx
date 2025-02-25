import React from 'react';
import { Brain, TrendingUp, Target } from 'lucide-react';

const AICoaching = () => {
  const insights = [
    {
      id: 1,
      title: 'Goal Achievement Pattern',
      description: 'You tend to be more productive in the morning. Consider scheduling important tasks before noon.',
      icon: Target,
    },
    {
      id: 2,
      title: 'Habit Formation Analysis',
      description: 'Your meditation streak is impressive! Adding a mindfulness practice before bed could enhance results.',
      icon: Brain,
    },
    {
      id: 3,
      title: 'Growth Opportunity',
      description: 'Based on your reading habit, you might enjoy joining a book club to enhance learning retention.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <div key={insight.id} className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
          <div className="bg-white p-2 rounded-lg">
            <insight.icon className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{insight.title}</h3>
            <p className="text-sm text-gray-600">{insight.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AICoaching; 
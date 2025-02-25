import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const GoalTracker = () => {
  const goals = [
    {
      id: 1,
      title: 'Learn React Native',
      description: 'Complete 3 mobile app projects',
      progress: 65,
      deadline: '2024-06-30',
      category: 'Professional',
    },
    {
      id: 2,
      title: 'Read 24 Books',
      description: '2 books per month',
      progress: 33,
      deadline: '2024-12-31',
      category: 'Personal',
    },
    // Add more goals as needed
  ];

  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <div key={goal.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{goal.title}</h3>
              <p className="text-sm text-gray-600">{goal.description}</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
              {goal.category}
            </span>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{goal.progress}% Complete</span>
              <span>Due: {goal.deadline}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoalTracker; 
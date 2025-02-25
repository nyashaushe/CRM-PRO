import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const HabitTracker = () => {
  const habits = [
    {
      id: 1,
      title: 'Morning Meditation',
      streak: 15,
      completed: true,
    },
    {
      id: 2,
      title: 'Exercise',
      streak: 8,
      completed: false,
    },
    {
      id: 3,
      title: 'Reading',
      streak: 12,
      completed: true,
    },
  ];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <div key={habit.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="font-medium text-gray-900">{habit.title}</h3>
              <p className="text-sm text-gray-600">{habit.streak} day streak</p>
            </div>
            {habit.completed ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-300" />
            )}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-600 mb-1">{day}</div>
                <div className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center ${
                  index <= 4 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitTracker; 
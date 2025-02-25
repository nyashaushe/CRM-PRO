import React, { useState } from 'react';
import { Target, Calendar, Brain, Plus, CheckCircle, Circle, TrendingUp } from 'lucide-react';
import GoalTracker from './GoalTracker';
import HabitTracker from './HabitTracker';
import AICoaching from './AICoaching';
import StatCard from './StatCard';
import { PersonalGrowthProvider } from '../contexts/PersonalGrowthContext';
import GoalForm from './GoalForm';

const PersonalGrowth = () => {
  const [showGoalForm, setShowGoalForm] = useState(false);

  const personalStats = [
    {
      title: 'Goals Completed',
      value: '8/12',
      change: '+2 this month',
      icon: Target,
      color: 'bg-green-500',
    },
    {
      title: 'Habit Streak',
      value: '15 days',
      change: '+5 days',
      icon: Calendar,
      color: 'bg-blue-500',
    },
    {
      title: 'Growth Score',
      value: '85%',
      change: '+12%',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  return (
    <PersonalGrowthProvider>
      <div className="p-6 lg:p-8 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Personal Growth</h1>
            <p className="mt-1 text-gray-600">Track your goals, habits, and personal development</p>
          </div>
          <button
            onClick={() => setShowGoalForm(true)}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Goal
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Goal Tracker */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Goals</h2>
            <GoalTracker />
          </div>

          {/* Habit Tracker */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Habits</h2>
            <HabitTracker />
          </div>
        </div>

        {/* AI Coaching Insights */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Coaching Insights</h2>
          <AICoaching />
        </div>

        {showGoalForm && <GoalForm onClose={() => setShowGoalForm(false)} />}
      </div>
    </PersonalGrowthProvider>
  );
};

export default PersonalGrowth; 
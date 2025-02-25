import React, { useState } from 'react';
import { Play, Pause, Plus, Library, Settings, BarChart, ArrowRight } from 'lucide-react';
import WorkflowLibrary from './WorkflowLibrary';
import WorkflowBuilder from './WorkflowBuilder';
import WorkflowAnalytics from './WorkflowAnalytics';
import StatCard from './StatCard';

const AIWorkflows = () => {
  const [activeTab, setActiveTab] = useState<'library' | 'builder' | 'analytics'>('library');
  const [showNewWorkflow, setShowNewWorkflow] = useState(false);

  const workflowStats = [
    {
      title: 'Active Workflows',
      value: '12',
      change: '+3 this month',
      icon: Play,
      color: 'bg-green-500',
    },
    {
      title: 'Tasks Automated',
      value: '1,234',
      change: '+256 this week',
      icon: Settings,
      color: 'bg-blue-500',
    },
    {
      title: 'Time Saved',
      value: '45h',
      change: '+8h this week',
      icon: BarChart,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Workflows</h1>
          <p className="mt-1 text-gray-600">Create and manage automated workflows</p>
        </div>
        <button
          onClick={() => setShowNewWorkflow(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Workflow
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workflowStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('library')}
            className={`${
              activeTab === 'library'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            <Library className="w-5 h-5 inline-block mr-2" />
            Workflow Library
          </button>
          <button
            onClick={() => setActiveTab('builder')}
            className={`${
              activeTab === 'builder'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            <Settings className="w-5 h-5 inline-block mr-2" />
            Workflow Builder
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`${
              activeTab === 'analytics'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            <BarChart className="w-5 h-5 inline-block mr-2" />
            Analytics
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow">
        {activeTab === 'library' && <WorkflowLibrary onCreateWorkflow={() => setShowNewWorkflow(true)} />}
        {activeTab === 'builder' && <WorkflowBuilder />}
        {activeTab === 'analytics' && <WorkflowAnalytics />}
      </div>
    </div>
  );
};

export default AIWorkflows; 
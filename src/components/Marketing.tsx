import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Target, Users, BarChart, Mail, Plus, Filter } from 'lucide-react';
import StatCard from './StatCard';
import CampaignList from './CampaignList';
import CampaignForm from './CampaignForm';
import MarketingAnalytics from './MarketingAnalytics';

const Marketing = () => {
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'campaigns' | 'analytics'>('campaigns');

  const marketingStats = [
    {
      title: 'Active Campaigns',
      value: '12',
      change: '+3 this month',
      icon: Target,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Reach',
      value: '45.2K',
      change: '+12.5%',
      icon: Users,
      color: 'bg-green-500',
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.8%',
      icon: BarChart,
      color: 'bg-purple-500',
    },
    {
      title: 'Email Opens',
      value: '28.6%',
      change: '+2.1%',
      icon: Mail,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Marketing</h1>
          <p className="mt-1 text-gray-600">Manage your marketing campaigns and strategies</p>
        </div>
        <button
          onClick={() => setShowCampaignForm(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Campaign
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketingStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`${
              activeTab === 'campaigns'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Campaigns
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`${
              activeTab === 'analytics'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Analytics
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow">
        {activeTab === 'campaigns' && <CampaignList />}
        {activeTab === 'analytics' && <MarketingAnalytics />}
      </div>

      {/* Campaign Form Modal */}
      {showCampaignForm && (
        <CampaignForm onClose={() => setShowCampaignForm(false)} />
      )}
    </div>
  );
};

export default Marketing; 
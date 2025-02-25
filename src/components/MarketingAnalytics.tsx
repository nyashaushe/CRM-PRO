import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

const MarketingAnalytics = () => {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Reach',
        data: [12000, 15000, 18000, 22000, 25000, 30000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Conversions',
        data: [300, 450, 600, 750, 900, 1200],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const channelData = {
    labels: ['Email', 'Social Media', 'Search', 'Direct', 'Other'],
    datasets: [{
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#6366F1',
        '#EC4899',
      ],
    }],
  };

  return (
    <div className="p-6 space-y-6">
      {/* Performance Chart */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Campaign Performance</h3>
        <Line data={performanceData} options={{ responsive: true }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Channel Distribution */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Channel Distribution</h3>
          <div className="w-full max-w-md mx-auto">
            <Doughnut data={channelData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Key Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average CTR</span>
              <span className="font-semibold">2.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Email Open Rate</span>
              <span className="font-semibold">28.6%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Social Engagement</span>
              <span className="font-semibold">12.4K</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cost per Conversion</span>
              <span className="font-semibold">$4.52</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingAnalytics; 
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Clock, CheckCircle, XCircle, Activity } from 'lucide-react';

const WorkflowAnalytics = () => {
  const executionData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Successful Executions',
        data: [65, 72, 68, 84, 78, 82, 90],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Failed Executions',
        data: [8, 5, 7, 3, 6, 4, 2],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const metrics = [
    {
      title: 'Average Runtime',
      value: '2.3s',
      icon: Clock,
      color: 'text-blue-500',
    },
    {
      title: 'Success Rate',
      value: '94.8%',
      icon: CheckCircle,
      color: 'text-green-500',
    },
    {
      title: 'Error Rate',
      value: '5.2%',
      icon: XCircle,
      color: 'text-red-500',
    },
    {
      title: 'Total Executions',
      value: '12,456',
      icon: Activity,
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border">
            <div className="flex items-center">
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
              <h3 className="ml-3 text-sm font-medium text-gray-900">{metric.title}</h3>
            </div>
            <p className="mt-4 text-2xl font-semibold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Execution Chart */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Workflow Executions</h3>
        <Line data={executionData} options={{ responsive: true }} />
      </div>

      {/* Top Workflows Table */}
      <div className="bg-white rounded-lg border">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-medium text-gray-900">Top Performing Workflows</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Workflow
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Executions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Success Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Runtime
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Add your workflow data here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkflowAnalytics; 
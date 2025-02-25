import React from 'react';
import { Users, DollarSign, LineChart, Clock, Calendar, CheckSquare, BarChart } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import StatCard from './StatCard';
import TaskList from './TaskList';
import SalesKanban from './SalesKanban';
import CalendarView from './CalendarView';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Contacts',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+23%',
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      title: 'Tasks Due',
      value: '12',
      change: '-3',
      icon: Clock,
      color: 'bg-orange-500',
    },
    {
      title: 'Sales Performance',
      value: '89%',
      change: '+8%',
      icon: BarChart,
      color: 'bg-purple-500',
    },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [30000, 35000, 32000, 40000, 45000, 50000],
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
      },
      {
        label: 'Deals',
        data: [20, 25, 22, 30, 35, 40],
        fill: true,
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderColor: 'rgb(139, 92, 246)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Nyasha!</h1>
          <p className="mt-1 text-gray-600">Here's what's happening with your contacts today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts and Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h2>
            <Line data={chartData} options={chartOptions} />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Calendar</h2>
            <CalendarView />
          </div>
        </div>

        {/* Tasks and Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Tasks</h2>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                <CheckSquare className="w-4 h-4" />
                Add Task
              </button>
            </div>
            <TaskList />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Pipeline</h2>
            <SalesKanban />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">New contact added</p>
                  <p className="text-sm text-gray-600">John Doe was added to your contacts</p>
                </div>
                <span className="ml-auto text-sm text-gray-500">2h ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
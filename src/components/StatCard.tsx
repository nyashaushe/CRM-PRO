import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, color }) => {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${color}`}>
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${color} text-white`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <div className="flex items-baseline mt-1">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <span className="ml-2 text-sm font-medium text-green-600">{change}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { DollarSign, Plus, FileText, TrendingUp, Filter } from 'lucide-react';
import StatCard from './StatCard';
import TransactionList from './TransactionList';
import InvoiceForm from './InvoiceForm';
import BudgetInsights from './BudgetInsights';

const Finances = () => {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const financialStats = [
    {
      title: 'Total Revenue',
      value: '$45,678',
      change: '+23%',
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      title: 'Expenses',
      value: '$12,345',
      change: '-8%',
      icon: TrendingUp,
      color: 'bg-red-500',
    },
    {
      title: 'Net Profit',
      value: '$33,333',
      change: '+15%',
      icon: DollarSign,
      color: 'bg-blue-500',
    },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [3000, 3500, 4000, 3800, 4200, 4500],
        borderColor: 'rgb(34, 197, 94)',
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: [2000, 2300, 2100, 2400, 2800, 2600],
        borderColor: 'rgb(239, 68, 68)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Financial Management</h1>
          <p className="mt-1 text-gray-600">Track your financial health and performance</p>
        </div>
        <button
          onClick={() => setShowInvoiceForm(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Invoice
        </button>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {financialStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Income vs Expenses</h2>
          <Line data={chartData} options={{ responsive: true }} />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Expense Categories</h2>
          <Doughnut
            data={{
              labels: ['Operations', 'Marketing', 'Salaries', 'Tools', 'Other'],
              datasets: [{
                data: [30, 20, 25, 15, 10],
                backgroundColor: [
                  '#3B82F6',
                  '#10B981',
                  '#F59E0B',
                  '#6366F1',
                  '#EC4899',
                ],
              }],
            }}
            options={{ responsive: true }}
          />
        </div>
      </div>

      {/* Transaction List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
          <TransactionList />
        </div>
      </div>

      {/* Budget Insights */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Budget Insights</h2>
        <BudgetInsights />
      </div>

      {/* Invoice Form Modal */}
      {showInvoiceForm && (
        <InvoiceForm onClose={() => setShowInvoiceForm(false)} />
      )}
    </div>
  );
};

export default Finances; 
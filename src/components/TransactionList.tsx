import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      type: 'income',
      description: 'Client Payment',
      amount: 1500,
      date: '2024-02-20',
      category: 'Services',
    },
    {
      id: 2,
      type: 'expense',
      description: 'Software Subscription',
      amount: 99,
      date: '2024-02-19',
      category: 'Tools',
    },
    // Add more transactions as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {transaction.type === 'income' ? (
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowDownLeft className="w-5 h-5 text-red-500" />
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
              <td className={`px-6 py-4 whitespace-nowrap ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                ${transaction.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList; 
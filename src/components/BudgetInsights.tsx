import React from 'react';
import { Lightbulb } from 'lucide-react';

const BudgetInsights = () => {
  const insights = [
    {
      id: 1,
      title: 'Reduce Software Expenses',
      description: 'Consider consolidating your software subscriptions to save 15% monthly.',
      impact: '+$150/month',
    },
    {
      id: 2,
      title: 'Optimize Marketing Budget',
      description: 'Shift budget allocation to channels showing higher ROI.',
      impact: '+$300/month',
    },
  ];

  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <div key={insight.id} className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
          <Lightbulb className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">{insight.title}</h3>
            <p className="text-sm text-gray-600">{insight.description}</p>
            <span className="text-sm font-medium text-green-600">{insight.impact}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BudgetInsights; 
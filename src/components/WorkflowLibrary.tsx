import React from 'react';
import { Play, Clock, FileText, Mail, Calendar, ArrowRight } from 'lucide-react';

interface WorkflowTemplate {
  id: number;
  title: string;
  description: string;
  icon: any;
  category: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
}

const WorkflowLibrary = ({ onCreateWorkflow }) => {
  const templates: WorkflowTemplate[] = [
    {
      id: 1,
      title: 'Automated Invoice Generation',
      description: 'Generate and send invoices based on completed tasks',
      icon: FileText,
      category: 'Finance',
      complexity: 'Simple',
    },
    {
      id: 2,
      title: 'Task Reminder System',
      description: 'Send automated reminders for upcoming tasks and deadlines',
      icon: Clock,
      category: 'Productivity',
      complexity: 'Medium',
    },
    {
      id: 3,
      title: 'Email Campaign Automation',
      description: 'Schedule and send personalized email campaigns',
      icon: Mail,
      category: 'Marketing',
      complexity: 'Complex',
    },
    {
      id: 4,
      title: 'Meeting Scheduler',
      description: 'Automatically schedule meetings based on availability',
      icon: Calendar,
      category: 'Productivity',
      complexity: 'Medium',
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={onCreateWorkflow}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <template.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="ml-3 text-sm font-medium text-indigo-600">{template.category}</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">{template.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{template.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className={`text-sm px-2 py-1 rounded-full ${
                template.complexity === 'Simple' ? 'bg-green-100 text-green-800' :
                template.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {template.complexity}
              </span>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowLibrary; 
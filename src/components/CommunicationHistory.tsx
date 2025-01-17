import React from 'react';
import { Mail, Phone, MessageSquare, Calendar, User } from 'lucide-react';

interface Communication {
  id: string;
  type: 'email' | 'call' | 'meeting' | 'note';
  title: string;
  content: string;
  date: Date;
  contact: string;
}

const mockCommunications: Communication[] = [
  {
    id: '1',
    type: 'email',
    title: 'Follow-up on proposal',
    content: 'Thank you for considering our proposal. I wanted to follow up...',
    date: new Date('2024-03-18T14:30:00'),
    contact: 'John Smith',
  },
  {
    id: '2',
    type: 'call',
    title: 'Initial consultation',
    content: 'Discussed project requirements and timeline...',
    date: new Date('2024-03-17T11:00:00'),
    contact: 'Sarah Johnson',
  },
  {
    id: '3',
    type: 'meeting',
    title: 'Product demo',
    content: 'Demonstrated new features and gathered feedback...',
    date: new Date('2024-03-16T15:00:00'),
    contact: 'Mike Wilson',
  },
];

const CommunicationHistory = () => {
  const [communications, setCommunications] = React.useState<Communication[]>(mockCommunications);
  const [filter, setFilter] = React.useState<string>('all');

  const getIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'call':
        return <Phone className="w-5 h-5" />;
      case 'meeting':
        return <Calendar className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'email':
        return 'bg-blue-100 text-blue-800';
      case 'call':
        return 'bg-green-100 text-green-800';
      case 'meeting':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCommunications = communications.filter(
    (comm) => filter === 'all' || comm.type === filter
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Communication History</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'all'
                ? 'bg-indigo-100 text-indigo-800'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('email')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'email'
                ? 'bg-blue-100 text-blue-800'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Emails
          </button>
          <button
            onClick={() => setFilter('call')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'call'
                ? 'bg-green-100 text-green-800'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Calls
          </button>
          <button
            onClick={() => setFilter('meeting')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'meeting'
                ? 'bg-purple-100 text-purple-800'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Meetings
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="divide-y">
          {filteredCommunications.map((comm) => (
            <div key={comm.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${getTypeColor(comm.type)}`}>
                  {getIcon(comm.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{comm.title}</h3>
                    <span className="text-sm text-gray-500">
                      {comm.date.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{comm.contact}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{comm.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunicationHistory;
import React from 'react';
import { LayoutDashboard, Users, Calendar, LineChart, Settings, Menu, Mail, FileText, MessageSquare, BarChart } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Contacts from './components/Contacts';
import EmailComposer from './components/EmailComposer';
import DocumentManager from './components/DocumentManager';
import CommunicationHistory from './components/CommunicationHistory';
import AdvancedReports from './components/AdvancedReports';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: 'dashboard' },
    { icon: Users, label: 'Contacts', path: 'contacts' },
    { icon: Mail, label: 'Email', path: 'email' },
    { icon: FileText, label: 'Documents', path: 'documents' },
    { icon: MessageSquare, label: 'Communication', path: 'communication' },
    { icon: BarChart, label: 'Reports', path: 'reports' },
    { icon: Settings, label: 'Settings', path: 'settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        menuItems={menuItems}
        onNavigate={(path) => setCurrentPage(path)}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'contacts' && <Contacts />}
        {currentPage === 'email' && <EmailComposer />}
        {currentPage === 'documents' && <DocumentManager />}
        {currentPage === 'communication' && <CommunicationHistory />}
        {currentPage === 'reports' && <AdvancedReports />}
      </div>
    </div>
  );
}

export default App;
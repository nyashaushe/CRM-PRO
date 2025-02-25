import React from 'react';
import { LayoutDashboard, Users, Calendar, LineChart, Settings, Menu, Mail, FileText, MessageSquare, BarChart, Zap, Briefcase, DollarSign, UserCheck, Grid } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Contacts from './components/Contacts';
import EmailComposer from './components/EmailComposer';
import DocumentManager from './components/DocumentManager';
import CommunicationHistory from './components/CommunicationHistory';
import AdvancedReports from './components/AdvancedReports';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import Projects from './components/Projects';
import Finances from './components/Finances';
import Marketing from './components/Marketing';
import PersonalGrowth from './components/PersonalGrowth';
import AIWorkflows from './components/AIWorkflows';
import ProjectManagement from './components/ProjectManagement';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState('landing');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [showAuth, setShowAuth] = React.useState(false);

  const handleAuth = (type: 'login' | 'signup') => {
    // Here you would typically make an API call to authenticate
    console.log(`Attempting to ${type}`);
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleGetStarted = () => {
    setShowAuth(true);
    setCurrentPage('auth');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Projects / Tasks', path: 'projects' },
    { icon: DollarSign, label: 'Finances', path: 'finances' },
    { icon: BarChart, label: 'Marketing', path: 'marketing' },
    { icon: UserCheck, label: 'Personal Growth', path: 'personal-growth' },
    { icon: Zap, label: 'AI Workflows', path: 'ai-workflows' },
    { icon: Users, label: 'Project Management', path: 'project-management' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {currentPage === 'landing' ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : currentPage === 'auth' ? (
        <Auth onAuth={handleAuth} />
      ) : (
        <>
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
            {currentPage === 'projects' && <Projects />}
            {currentPage === 'finances' && <Finances />}
            {currentPage === 'marketing' && <Marketing />}
            {currentPage === 'personal-growth' && <PersonalGrowth />}
            {currentPage === 'ai-workflows' && <AIWorkflows />}
            {currentPage === 'project-management' && <ProjectManagement />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

interface SidebarProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  onNavigate: (path: string) => void;
  currentPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, menuItems, onNavigate, currentPage }) => {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed lg:relative lg:translate-x-0 z-40 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b">
        <h1 className="text-2xl font-bold text-indigo-600">CRM Pro</h1>
      </div>

      {/* Navigation */}
      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => onNavigate(item.path)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.path
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
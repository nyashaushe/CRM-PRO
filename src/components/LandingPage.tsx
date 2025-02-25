import React from 'react';
import { ArrowRight, CheckCircle, Layout, Brain, Zap, Shield, LayoutDashboard, Target, Workflow } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const features = [
    {
      title: 'Smart Dashboard',
      description: 'Get insights and analytics at a glance with our AI-powered dashboard',
      icon: LayoutDashboard,
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      title: 'Marketing Suite',
      description: 'Create and manage campaigns with advanced targeting and analytics',
      icon: Target,
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      title: 'AI Workflows',
      description: 'Automate your tasks with intelligent workflows and integrations',
      icon: Workflow,
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Personal Growth',
      description: 'Track your goals and habits with AI-powered coaching',
      icon: Brain,
      gradient: 'from-orange-400 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-indigo-600">Pamoja Pro</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#ai" className="text-gray-600 hover:text-indigo-600 transition-colors">AI Technology</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">
            Transform Your Business with AI
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-10">
            Harness the power of artificial intelligence to streamline your workflows, 
            boost productivity, and drive growth with our all-in-one platform.
          </p>
          <button
            onClick={onGetStarted}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-500 hover:to-purple-500 transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline your workflow with our comprehensive suite of tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
              >
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Integration Section */}
      <div id="ai" className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Powered by Advanced AI Technology
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Leverage the power of AI to automate tasks, gain insights, and make better decisions.
              </p>
              <ul className="space-y-6">
                {aiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-w-5 aspect-h-4">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 bg-grid-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your Workflow?
          </h2>
          <button 
            onClick={onGetStarted}
            className="px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg font-medium"
          >
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

const aiFeatures = [
  'Smart task prioritization and scheduling',
  'AI-powered document summarization',
  'Predictive analytics and insights',
  'Automated customer interaction',
  'Intelligent workflow optimization',
];

export default LandingPage; 
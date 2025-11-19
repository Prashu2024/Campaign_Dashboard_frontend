import React from 'react';
import { Home, Users, Megaphone, BarChart3, MessageSquare, Settings, Flag, Shield, Lightbulb, Menu } from 'lucide-react';

const Sidebar = ({ sidebarOpen }) => {
  const navItems = [
    { icon: Home, active: false },
    { icon: Users, active: false },
    { icon: Megaphone, active: true },
    { icon: BarChart3, active: false },
    { icon: MessageSquare, active: false },
    { icon: Settings, active: false },
    { icon: Flag, active: false },
    { icon: Shield, active: false },
    { icon: Lightbulb, active: false }
  ];

  return (
    <aside className={`${sidebarOpen ? 'w-20' : 'w-0'} bg-gray-800 text-white transition-all duration-300 overflow-hidden flex-shrink-0`}>
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
        </div>
        
        <nav className="flex-1 py-4">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full p-4 flex items-center justify-center hover:bg-gray-700 transition-colors ${
                item.active ? 'bg-gray-700 border-l-4 border-blue-500' : ''
              }`}
            >
              <item.icon className="w-6 h-6" />
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button className="w-full p-2 flex items-center justify-center hover:bg-gray-700 rounded transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

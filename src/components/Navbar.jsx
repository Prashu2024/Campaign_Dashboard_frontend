import React from 'react';
import { Menu, HelpCircle, Wallet, User } from 'lucide-react';

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <HelpCircle className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <Wallet className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-2 pl-4 border-l">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <div className="text-sm">
              <div className="text-gray-500">Admin</div>
              <div className="font-medium">Prashant</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
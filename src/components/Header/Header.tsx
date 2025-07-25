import React from 'react';
import { User } from 'lucide-react';
import { useAuth } from '../Auth/AuthContext';

const Header: React.FC = () => {
  const { user, logout, openModal } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <span className="font-bold text-xl">foo-rum</span>
        </div>

        {/* Right: Auth Controls */}
        <div className="flex items-center space-x-3">
          {user ? (
            <>
              <span className="text-sm text-gray-600">Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="text-sm text-blue-500 hover:text-blue-600 px-3 py-1 rounded-md hover:bg-blue-50 transition-all duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => openModal('signin')}
              className="text-sm text-blue-500 hover:text-blue-600 px-3 py-1 rounded-md hover:bg-blue-50 transition-all duration-200 flex items-center space-x-1"
            >
              <User size={16} />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

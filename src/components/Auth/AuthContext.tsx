import React, { useState, useContext, createContext } from 'react';
import type { UserType } from '../../constants/types';
import { TEST_ACCOUNTS } from '../../constants/testAccounts';


type AuthContextType = {
  user: UserType | null;
  login: (email: string, password: string) => { success: boolean; error?: string };
  signup: (email: string, password: string, name: string, username: string) => { success: boolean };
  logout: () => void;
  showModal: boolean;
  modalType: 'signin' | 'signup';
  openModal: (type?: 'signin' | 'signup') => void;
  closeModal: () => void;
  requireAuth: (action?: any) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};



// Auth Provider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'signin' | 'signup'>('signin');

  const login = (email: string, password: string) => {
    const account = TEST_ACCOUNTS.find(acc => acc.email === email && acc.password === password);
    if (account) {
      setUser(account);
      setShowModal(false);
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = (email: string, password: string, name: string, username: string) => {
    // Simple signup simulation
    const newUser = { email, password, name, username };
    setUser(newUser);
    setShowModal(false);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const openModal = (type: 'signin' | 'signup' = 'signin') => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const requireAuth = () => {
    if (!user) {
      openModal('signin');
      return false;
    }
    return true;
  };

  return (
    <AuthContext.Provider value={{
      user, login, signup, logout, showModal, modalType, 
      openModal, closeModal, requireAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
}; 
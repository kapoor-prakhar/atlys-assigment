import React, { useState } from 'react';
import { useAuth } from './AuthContext';


type SignInProps = {
  onSwitchToSignUp: () => void;
};

const SignIn: React.FC<SignInProps> = ({ onSwitchToSignUp }) => {
  const { login, closeModal } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    await new Promise(resolve => setTimeout(resolve, 800));
    const result = login(formData.email, formData.password);
    if (!result.success) {
      setError(result.error!);
    }
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
        <p className="text-gray-600">Sign in to your account</p>
      </div>
      <div className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            'Sign In'
          )}
        </button>
      </div>
      <div className="text-center space-y-2">
        <div className="text-sm text-gray-500">Test accounts:</div>
        <div className="text-xs text-gray-400">
          demo@example.com / password123<br/>
          test@user.com / testpass
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={onSwitchToSignUp}
          className="text-blue-500 hover:text-blue-600 text-sm"
        >
          Don't have an account? Sign up
        </button>
      </div>
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        ×
      </button>
    </div>
  );
};

export default SignIn; 
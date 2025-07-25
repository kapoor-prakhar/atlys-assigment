
import { AuthProvider } from './components/Auth/AuthContext';
import Feed from './components/Feed/Feed';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <div className="font-system">
        <Feed />
      </div>
    </AuthProvider>
  );
};

export default App;

import { createContext, useContext, useState } from 'react';

interface AuthContextData {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  clearName: () => void;
  clearEmail: () => void;
}

const AuthContext = createContext<AuthContextData>({
  name: '',
  email: '',
  setName: () => {},
  setEmail: () => {},
  clearName: () => {},
  clearEmail: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const clearName = () => {
    setName('');
  };

  const clearEmail = () => {
    setEmail('');
  };

  return (
    <AuthContext.Provider value={{ name, email, setName, setEmail, clearName, clearEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
import { createContext, useContext, useState } from 'react';

interface AuthContextData {
  id: string;
  name: string;
  email: string;
  setId: (id: string) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  clearId: () => void;
  clearName: () => void;
  clearEmail: () => void;
}

const AuthContext = createContext<AuthContextData>({
  id:'',
  name: '',
  email: '',
  setId: () => {},
  setName: () => {},
  setEmail: () => {},
  clearId: () => {},
  clearName: () => {},
  clearEmail: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC = ({ children }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const clearId = () => {
    setId('');
  };

  const clearName = () => {
    setName('');
  };

  const clearEmail = () => {
    setEmail('');
  };

  return (
    <AuthContext.Provider value={{ id, name, email, setId, setName, setEmail, clearName, clearEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
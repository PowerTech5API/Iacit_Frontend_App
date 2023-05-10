import { createContext, useContext, useState } from 'react';

interface AuthContextData {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
}

const AuthContext = createContext<AuthContextData>({
  name: '',
  email: '',
  setName: () => {},
  setEmail: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <AuthContext.Provider value={{ name, email, setName, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
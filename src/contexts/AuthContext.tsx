import { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to parse stored user:', err);
      }
    }
    setIsLoading(false);
  }, []);

  // Simple login logic using localStorage
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This is a mock implementation - in a real app, this would be an API call
      // For demo purposes, accept any non-empty credentials
      if (email && password) {
        const user = {
          id: Math.random().toString(36).substring(2, 11),
          email,
          name: email.split('@')[0]
        };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Simple registration logic using localStorage
  const register = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This is a mock implementation - in a real app, this would be an API call
      if (email && password) {
        const user = {
          id: Math.random().toString(36).substring(2, 11),
          email,
          name: email.split('@')[0]
        };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        throw new Error('Invalid registration data');
      }
    } catch (err) {
      setError('Registration failed. Please try again with a different email.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout logic
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
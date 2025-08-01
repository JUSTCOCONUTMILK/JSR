import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface RegisterFormProps {
  onSuccess?: () => void;
  onBack?: () => void;
}

export default function RegisterForm({ onSuccess, onBack }: RegisterFormProps) {
  const { t } = useLanguage();
  const { register, error: authError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password || !confirmPassword) {
      setError(t('fillAllFields'));
      return;
    }
    
    if (password !== confirmPassword) {
      setError(t('passwordsDoNotMatch'));
      return;
    }
    
    // Reset error
    setError(null);
    setIsLoading(true);
    
    try {
      await register(email, password);
      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/');
      }
    } catch (err) {
      // Error is handled by the AuthContext
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="animate-slide-in">
        <div className="space-y-4">
          {(error || authError) && (
            <div className="bg-red-900/30 text-red-400 p-3 rounded-md text-sm border border-red-800/50 animate-fade-in">
              {error || authError}
            </div>
          )}
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">
              {t('email')}
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800/80 border-gray-700 text-white focus:border-red-500/50 focus:ring-red-500/20 transition-all"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-300">
              {t('password')}
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-800/80 border-gray-700 text-white focus:border-red-500/50 focus:ring-red-500/20 transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-300">
              {t('confirmPassword')}
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-800/80 border-gray-700 text-white focus:border-red-500/50 focus:ring-red-500/20 transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>
        
        <div className="flex flex-col mt-6">
          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 font-semibold"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                {t('loading')}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                {t('register')}
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
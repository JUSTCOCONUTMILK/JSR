import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/language-switcher';
import AuthModal from '@/components/auth/AuthModal';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface NavbarProps {
  onSearch: (query: string) => void;
}

export function Navbar({ onSearch }: NavbarProps) {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const openLoginModal = () => {
    setAuthModalMode('login');
    setAuthModalOpen(true);
  };

  const openRegisterModal = () => {
    setAuthModalMode('register');
    setAuthModalOpen(true);
  };

  return (
    <div className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-md">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-red-600">NETFLIX</Link>
          <nav className="hidden ml-10 space-x-4 md:flex">
            <Link className="text-gray-300 transition-colors hover:text-white" to="/">{t('home')}</Link>
            <Link className="text-gray-300 transition-colors hover:text-white" to="#">{t('tvShows')}</Link>
            <Link className="text-gray-300 transition-colors hover:text-white" to="#">{t('movies')}</Link>
            <Link className="text-gray-300 transition-colors hover:text-white" to="#">{t('newAndPopular')}</Link>
            <Link className="text-gray-300 transition-colors hover:text-white" to="#">{t('myList')}</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder={t('searchPlaceholder')}
              className="pl-8 bg-gray-900 border-gray-700 w-[180px] text-sm focus-visible:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          
          <LanguageSwitcher />
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 bg-gray-700">
                    <AvatarFallback className="bg-red-600 text-white">
                      {user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end">
                <DropdownMenuLabel className="text-gray-300">{user.name || user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem 
                  onClick={handleLogout}
                  className="text-gray-300 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                >
                  {t('signOut')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white"
                onClick={openLoginModal}
              >
                {t('signIn')}
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={openRegisterModal}
              >
                {t('register')}
              </Button>
            </div>
          )}
        </div>
      </div>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode={authModalMode} 
      />
    </div>
  );
}
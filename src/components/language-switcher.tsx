import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { GlobeIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-400 hover:text-white"
          title={t('language')}
        >
          <GlobeIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
        <DropdownMenuItem 
          onClick={() => setLanguage('en')} 
          className={`${language === 'en' ? 'bg-gray-800 text-white' : 'text-gray-300'} hover:bg-gray-800 hover:text-white`}
        >
          🇬🇧 {t('english')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('ru')}
          className={`${language === 'ru' ? 'bg-gray-800 text-white' : 'text-gray-300'} hover:bg-gray-800 hover:text-white`}
        >
          🇷🇺 {t('russian')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
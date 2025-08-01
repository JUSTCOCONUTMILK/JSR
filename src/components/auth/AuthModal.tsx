import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>(initialMode);

  const handleSuccess = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-800 text-white rounded-lg overflow-hidden">
        <DialogHeader className="relative border-b border-gray-800 pb-2">
          <DialogTitle className="text-xl font-bold text-center">{t('authentication')}</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <Tabs
          defaultValue={initialMode}
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 mb-4 bg-gray-800">
            <TabsTrigger
              value="login"
              className={`
                py-2 data-[state=active]:bg-red-600 data-[state=active]:text-white
                text-gray-300 transition-all duration-200
              `}
            >
              {t('signIn')}
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className={`
                py-2 data-[state=active]:bg-red-600 data-[state=active]:text-white 
                text-gray-300 transition-all duration-200
              `}
            >
              {t('register')}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="mt-0">
            <LoginForm onSuccess={handleSuccess} />
          </TabsContent>
          <TabsContent value="register" className="mt-0">
            <RegisterForm onSuccess={handleSuccess} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
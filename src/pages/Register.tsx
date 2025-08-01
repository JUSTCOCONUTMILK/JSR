import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function Register() {
  const { register: registerUser, error } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await registerUser(data.email, data.password, data.name);
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-90 py-12 px-4 sm:px-6 lg:px-8 bg-[url('/images/Netflix.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <Card className="w-full max-w-md z-10 bg-black bg-opacity-80 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">{t('register')}</CardTitle>
          <CardDescription className="text-gray-400">{t('alreadyHaveAccount')} <Link to="/login" className="text-red-600 hover:underline">{t('loginNow')}</Link></CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="bg-red-900 border-red-800">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-200">{t('name')}</Label>
              <Input
                id="name"
                {...register('name')}
                className="bg-gray-700 border-gray-600 text-white"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">{t('email')}</Label>
              <Input
                id="email"
                {...register('email')}
                type="email"
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="name@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">{t('password')}</Label>
              <Input
                id="password"
                {...register('password')}
                type="password"
                className="bg-gray-700 border-gray-600 text-white"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-200">{t('confirmPassword')}</Label>
              <Input
                id="confirmPassword"
                {...register('confirmPassword')}
                type="password"
                className="bg-gray-700 border-gray-600 text-white"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : t('register')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
import { createContext, useContext, useState, useEffect } from 'react';

// English translations (default)
const enTranslations = {
  // Navigation
  home: 'Home',
  tvShows: 'TV Shows',
  movies: 'Movies',
  newAndPopular: 'New & Popular',
  myList: 'My List',
  searchPlaceholder: 'Search...',
  
  // Authentication
  signIn: 'Sign In',
  register: 'Register',
  signOut: 'Sign Out',
  authentication: 'Authentication',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  loading: 'Loading...',
  
  // Error messages
  fillAllFields: 'Please fill in all fields',
  passwordsDoNotMatch: 'Passwords do not match',
  
  // Home page
  trending: 'Trending',
  popular: 'Popular',
  upcoming: 'Upcoming',
  topRated: 'Top Rated',
  
  // Languages
  english: 'English',
  russian: 'Russian',
  language: 'Language',
  
  // General UI
  watchNow: 'Watch Now',
  addToList: 'Add to List',
  moreInfo: 'More Info',
  viewAll: 'View All',
};

// Russian translations
const ruTranslations = {
  // Navigation
  home: 'Главная',
  tvShows: 'Сериалы',
  movies: 'Фильмы',
  newAndPopular: 'Новинки и популярное',
  myList: 'Мой список',
  searchPlaceholder: 'Поиск...',
  
  // Authentication
  signIn: 'Войти',
  register: 'Регистрация',
  signOut: 'Выйти',
  authentication: 'Аутентификация',
  email: 'Электронная почта',
  password: 'Пароль',
  confirmPassword: 'Подтвердить пароль',
  loading: 'Загрузка...',
  
  // Error messages
  fillAllFields: 'Пожалуйста, заполните все поля',
  passwordsDoNotMatch: 'Пароли не совпадают',
  
  // Home page
  trending: 'Тренды',
  popular: 'Популярное',
  upcoming: 'Скоро',
  topRated: 'Лучшее',
  
  // Languages
  english: 'Английский',
  russian: 'Русский',
  language: 'Язык',
  
  // General UI
  watchNow: 'Смотреть',
  addToList: 'Добавить в список',
  moreInfo: 'Подробнее',
  viewAll: 'Показать все',
};

type TranslationKey = keyof typeof enTranslations;
type LanguageCode = 'en' | 'ru';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Get saved language from localStorage or use browser language or default to English
  const getSavedLanguage = (): LanguageCode => {
    const savedLang = localStorage.getItem('language') as LanguageCode;
    if (savedLang === 'en' || savedLang === 'ru') {
      return savedLang;
    }
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'ru') {
      return 'ru';
    }
    
    return 'en';
  };

  const [language, setLanguageState] = useState<LanguageCode>(getSavedLanguage);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: TranslationKey): string => {
    const translations = language === 'ru' ? ruTranslations : enTranslations;
    return translations[key] || key;
  };

  // Apply RTL direction for languages that need it
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
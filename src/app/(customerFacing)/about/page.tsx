'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import React from 'react';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div>
      <h2>About</h2>
      {language === 'de' && 'deutscher text'}
      {language === 'en' && 'english text'}
    </div>
  );
}

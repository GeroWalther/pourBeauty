'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import { Gem, InfinityIcon, LeafIcon, NutOffIcon, Rabbit } from 'lucide-react';
import React from 'react';

const FeaturesSection = () => {
  const { language } = useLanguage();
  const features = [
    {
      icon: Rabbit,
      title: language == 'de' ? 'Ohne Tierversuche' : 'No animal testing.',
      text:
        language == 'de'
          ? 'Unsere Produkte werden ohne Tierversuche entwickelt und hergestellt.'
          : 'Our products are developed and manufactured without animal testing.',
    },
    {
      icon: LeafIcon,
      title: language == 'de' ? 'Natürlich' : 'Natural',
      text:
        language == 'de'
          ? 'Wir verwenden nur natürliche Inhaltsstoffe in unseren Produkten.'
          : 'We use only natural ingredients in our products.',
    },
    {
      icon: Gem,
      title: language == 'de' ? 'Hip und modern' : 'Trendy and modern',
      text:
        language == 'de'
          ? 'Unsere Produkte sind trendy und entsprechen den neuesten Beauty-Trends.'
          : 'Our products are trendy and align with the latest beauty trends.',
    },
    {
      icon: InfinityIcon,
      title: language == 'de' ? 'Super Ergebnisse' : 'Amazing results',
      text:
        language == 'de'
          ? 'Unsere Kunden sind mit den Ergebnissen unserer Produkte sehr zufrieden.'
          : 'Our customers are very satisfied with the results of our products.',
    },
  ];

  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 p-8 border border-t'>
      {features.map((feature, index) => (
        <div
          key={index}
          className='text-center p-6 bg-white rounded-lg shadow-lg'>
          {feature.icon === Rabbit && <Rabbit />}
          {feature.icon === LeafIcon && <LeafIcon />}
          {feature.icon === InfinityIcon && <InfinityIcon />}
          {feature.icon === Gem && <Gem />}
          <p className='text-xl font-semibold mb-2 text-stone-700'>
            {feature.title}
          </p>
          <p className='text-gray-700'>{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;

import { Gem, InfinityIcon, LeafIcon, NutOffIcon, Rabbit } from 'lucide-react';
import React from 'react';
const features = [
  {
    icon: Rabbit,
    title: 'Ohne Tierversuche',
    text: 'Unsere Produkte werden ohne Tierversuche entwickelt und hergestellt.',
  },
  {
    icon: LeafIcon,
    title: 'Natürlich',
    text: 'Wir verwenden nur natürliche Inhaltsstoffe in unseren Produkten.',
  },
  {
    icon: Gem,
    title: 'Hip und modern',
    text: 'Unsere Produkte sind trendy und entsprechen den neuesten Beauty-Trends.',
  },
  {
    icon: InfinityIcon,
    title: 'Super Ergebnisse',
    text: 'Unsere Kunden sind mit den Ergebnissen unserer Produkte sehr zufrieden.',
  },
];

const FeaturesSection = () => {
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

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productsData = [
  {
    name: 'Revitalizing Serum',
    slug: 'revitalizing-serum',
    priceInCents: 8900,
    image: '/luxury-serum-bottle-on-white-background.jpg',
    images: ['/luxury-serum-bottle-on-white-background.jpg', '/elegant-face-cream-jar-white-background.jpg'],
    descriptionEn: 'Advanced anti-aging formula that reduces fine lines and wrinkles by 64% within one month.',
    descriptionDe: 'Fortschrittliche Anti-Aging-Formel, die feine Linien und Falten innerhalb eines Monats um 64% reduziert.',
    shortDescriptionEn: 'Advanced anti-aging formula that reduces fine lines and wrinkles by 64% within one month.',
    shortDescriptionDe: 'Fortschrittliche Anti-Aging-Formel, die Linien und Falten um 64% reduziert.',
    keyBenefitsEn: [
      'Clinically tested formula',
      'Dermatologically approved',
      'Visible results within weeks',
    ],
    keyBenefitsDe: [
      'Klinisch getestete Formel',
      'Dermatologisch zugelassen',
      'Sichtbare Ergebnisse innerhalb von Wochen',
    ],
    howToUseEn: [
      'Apply to cleansed skin',
      'Gently massage until fully absorbed',
      'Use morning and evening for best results',
    ],
    howToUseDe: [
      'Auf gereinigte Haut auftragen',
      'Sanft einmassieren bis vollständig eingezogen',
      'Morgens und abends verwenden für beste Ergebnisse',
    ],
  },
  {
    name: 'Hydrating Day Cream',
    slug: 'hydrating-day-cream',
    priceInCents: 6900,
    image: '/elegant-face-cream-jar-white-background.jpg',
    images: ['/elegant-face-cream-jar-white-background.jpg'],
    descriptionEn: 'Intense moisture with SPF protection for all-day hydration and sun defense.',
    descriptionDe: 'Intensive Feuchtigkeit mit SPF-Schutz für ganztägige Hydratation und Sonnenschutz.',
    shortDescriptionEn: 'Intense moisture with SPF protection for all-day hydration and sun defense.',
    shortDescriptionDe: 'Intensive Feuchtigkeit mit SPF-Schutz für ganztägige Hydratation.',
    keyBenefitsEn: [
      'Clinically tested formula',
      'Dermatologically approved',
      'Visible results within weeks',
    ],
    keyBenefitsDe: [
      'Klinisch getestete Formel',
      'Dermatologisch zugelassen',
      'Sichtbare Ergebnisse innerhalb von Wochen',
    ],
    howToUseEn: [
      'Apply to cleansed skin',
      'Gently massage until fully absorbed',
      'Use morning and evening for best results',
    ],
    howToUseDe: [
      'Auf gereinigte Haut auftragen',
      'Sanft einmassieren bis vollständig eingezogen',
      'Morgens und abends verwenden für beste Ergebnisse',
    ],
  },
  {
    name: 'Brightening Eye Treatment',
    slug: 'brightening-eye-treatment',
    priceInCents: 7900,
    image: '/eye-cream-tube-minimalist-white-background.jpg',
    images: ['/eye-cream-tube-minimalist-white-background.jpg'],
    descriptionEn: 'Targets dark circles and puffiness while smoothing the delicate eye area. Reduces signs of fatigue and brightens for a refreshed appearance.',
    descriptionDe: 'Zielt auf Augenringe und Schwellungen ab, während es die empfindliche Augenpartie glättet. Reduziert Müdigkeitserscheinungen und hellt auf.',
    shortDescriptionEn: 'Targets dark circles and puffiness while smoothing the delicate eye area.',
    shortDescriptionDe: 'Zielt auf Augenringe und Schwellungen ab und glättet die Augenpartie.',
    keyBenefitsEn: [
      'Clinically tested formula',
      'Dermatologically approved',
      'Visible results within weeks',
    ],
    keyBenefitsDe: [
      'Klinisch getestete Formel',
      'Dermatologisch zugelassen',
      'Sichtbare Ergebnisse innerhalb von Wochen',
    ],
    howToUseEn: [
      'Apply to cleansed skin',
      'Gently massage until fully absorbed',
      'Use morning and evening for best results',
    ],
    howToUseDe: [
      'Auf gereinigte Haut auftragen',
      'Sanft einmassieren bis vollständig eingezogen',
      'Morgens und abends verwenden für beste Ergebnisse',
    ],
  },
  {
    name: 'Purifying Night Mask',
    slug: 'purifying-night-mask',
    priceInCents: 7500,
    image: '/skincare-mask-jar-clean-white-background.jpg',
    images: ['/skincare-mask-jar-clean-white-background.jpg'],
    descriptionEn: 'Overnight treatment that deeply cleanses and rejuvenates while you sleep. Wake up to refreshed, revitalized skin with improved texture and clarity.',
    descriptionDe: 'Nächtliche Behandlung, die tiefenreinigt und verjüngt, während Sie schlafen. Wachen Sie mit frischer, revitalisierter Haut auf.',
    shortDescriptionEn: 'Overnight treatment that deeply cleanses and rejuvenates while you sleep.',
    shortDescriptionDe: 'Nächtliche Behandlung, die tiefenreinigt und verjüngt.',
    keyBenefitsEn: [
      'Clinically tested formula',
      'Dermatologically approved',
      'Visible results within weeks',
    ],
    keyBenefitsDe: [
      'Klinisch getestete Formel',
      'Dermatologisch zugelassen',
      'Sichtbare Ergebnisse innerhalb von Wochen',
    ],
    howToUseEn: [
      'Apply to cleansed skin',
      'Gently massage until fully absorbed',
      'Use morning and evening for best results',
    ],
    howToUseDe: [
      'Auf gereinigte Haut auftragen',
      'Sanft einmassieren bis vollständig eingezogen',
      'Morgens und abends verwenden für beste Ergebnisse',
    ],
  },
];

async function main() {
  console.log('Starting seed...');

  for (const product of productsData) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

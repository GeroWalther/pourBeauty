import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // List all products
  const products = await prisma.product.findMany({
    select: { id: true, name: true, slug: true, priceInCents: true }
  });

  console.log('Current products:');
  products.forEach(p => {
    console.log(`  - ${p.name} (${p.slug}): ${p.priceInCents / 100}€`);
  });

  if (products.length > 0) {
    // Update first product to 1€ (100 cents)
    const firstProduct = products[0];
    const updated = await prisma.product.update({
      where: { id: firstProduct.id },
      data: { priceInCents: 100 } // 1€
    });
    console.log(`\nUpdated "${updated.name}" to 1€ for testing!`);
    console.log('TODO: Change back to original price after testing!');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

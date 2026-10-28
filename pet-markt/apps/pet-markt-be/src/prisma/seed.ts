import { db } from './db';

const products = [
  {
    name: 'Premium Dog Food',
    description: 'Grain-free dry food with real chicken for adult dogs.',
    price: 49.99,
    image: 'https://placehold.co/600x400?text=Dog+Food',
    stripePriceId: 'price_dog_food',
    isFeatured: true,
  },
  {
    name: 'Cat Scratching Post',
    description: 'Sturdy sisal scratching post with a plush perch.',
    price: 34.5,
    image: 'https://placehold.co/600x400?text=Scratching+Post',
    stripePriceId: 'price_scratching_post',
    isFeatured: true,
  },
  {
    name: 'Chew Toy Bundle',
    description: 'Set of three durable rubber chew toys.',
    price: 19.99,
    image: 'https://placehold.co/600x400?text=Chew+Toys',
    stripePriceId: 'price_chew_toys',
    isFeatured: false,
  },
  {
    name: 'Aquarium Starter Kit',
    description: '20L tank with filter, heater and LED lighting.',
    price: 89.0,
    image: 'https://placehold.co/600x400?text=Aquarium',
    stripePriceId: 'price_aquarium_kit',
    isFeatured: false,
  },
];

async function main() {
  for (const product of products) {
    await db.orm.public.Product.create(product);
  }
  console.log(`Seeded ${products.length} products.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => db.close());

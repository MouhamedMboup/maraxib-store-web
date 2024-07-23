'use client';

import ProductCard from './ProductCard';

const featuredProducts = [
  {
    imageSrc: '/assets/product1.jpg',
    title: 'Featured Product 1',
    price: 25,
    rating: 5,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product2.jpg',
    title: 'Featured Product 2',
    price: 30,
    rating: 4.5,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product3.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product4.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product5.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product6.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product7.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product8.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product9.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product10.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product11.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product12.jpg',
    title: 'Featured Product 3',
    price: 20,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
];

const FeaturedCollection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
      Découvrez nos produits
        <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2"></span>
      </h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {featuredProducts.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;

// components/NewCollection.js
'use client';
import ProductCard from './ProductCard';

const products = [
  {
    imageSrc: '/assets/femme/veil3.png',
    title: 'Product 1',
    price: 19,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/njaxass/njaxass6.jpg',
    title: 'Product 2',
    price: 19,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/category3.jpg',
    title: 'Product 3',
    price: 19,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
];

const NewCollection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        New Collection
        <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2"></span>
      </h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {products.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewCollection;

'use client';

import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  imageSrc: string;
  title: string;
  price: number;
  rating: number;
  whatsappLink: string;
}

interface FeaturedCollectionProps {
  title1: string;
  products: Product[];
  className: string;
}


const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ title1, products, className }) => {
  return (
    <section className= {`hero-section ${className} py-12 px-4 bg-white`}>
      <h2 className="text-3xl font-bold text-center mb-8">
        {title1}
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

export default FeaturedCollection;

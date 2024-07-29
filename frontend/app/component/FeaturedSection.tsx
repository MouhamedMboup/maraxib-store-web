'use client';

import React, { useEffect, useState } from 'react';
import axios from '../../lib/axios'; 
import ProductCard from './ProductCard';

interface Product {
  id: number;
  image: string;
  libelle: string;
  prix: number;
  rating: number;
  lien_watshap: string;
}

interface FeaturedCollectionProps {
  title1: string;
  className: string;
}

const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ title1, className }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/produits')
      .then((response: { data: any[]; }) => {
        const fetchedProducts = response.data.map((product: any) => ({
          id: product.id,
          image: product.image,
          libelle: product.name,
          prix: product.price,
          rating: 4, 
          lien_watshap: `https://wa.me/778666064?text=Bienvenu ${product.name}`,
        }));
        setProducts(fetchedProducts);
        setLoading(false);
      })
      .catch((_error: any) => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className={`hero-section ${className} py-12 px-4 bg-white`}>
      <h2 className="text-3xl font-bold text-center mb-8">
        {title1}
        <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2"></span>
      </h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <ProductCard lien_watshapp={''} {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;

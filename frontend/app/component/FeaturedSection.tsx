
"use client";

import React, { useEffect, useState } from "react";
import axios from "../../lib/axios";
import ProductCard from "./ProductCard";
import { PulseLoader } from 'react-spinners';


interface Product {
  id: number;
  image: string;
  libelle: string;
  prix: number;
  rating: number;
  lien_whatsapp: string;
}

interface Category {
  id: number;
  libelle: string;
  produits: Product[];
}

interface FeaturedCollectionProps {
  className: string;
  typeProduit?: string;
  page?: boolean;
}

const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  className,
  typeProduit,
  page = false,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`/produits/${typeProduit}`)
      .then((response: { data: any[] }) => {

        console.log('les produits', response.data);
        
        console.log("la reponse =", response.data);
        const fetchedCategories = response.data.map((category: any) => ({
          id: category.id,
          libelle: category.libelle,
          produits:(page ? category.produits.slice(0, 5): category.produits).map((product: any) => ({
            id: product.id,
            image: `http://127.0.0.1:8000/storage/${product.image}`,
            libelle: product.libelle,
            prix: product.prix,
            rating: 4,
            lien_whatsapp: ` ${product.lien_whatsapp}`,
          })),
        }));
        setCategories(fetchedCategories);
        setLoading(false);
      })
      .catch((_error: any) => {
        setError("Error fetching products");
        console.error(_error);
        setLoading(false);
      });
  }, [typeProduit]);

  if (loading) {
    return <div className="text-center text-green-500 mb-4">
      {/* Loading... */}
      <PulseLoader color="#000000 " loading={loading} size={20} />
      </div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mb-10">{error}</div>;
  }

  return (
    <section className={`hero-section ${className} py-12 px-4 bg-white`}>
      {categories?.map((category) => (
        <div key={category.id} className="category-section mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            {category.libelle}
            <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2"></span>
          </h2>
          <div className="flex flex-wrap justify-center space-x-4">
            {category?.produits.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/5 lg:w-1/6 p-1 mb-2"
              >
                <ProductCard
                  lien_watshapp={"https://wa.me/778666064?text=Bienvenu"}
                  {...product}
                  image={product.image}
                  libelle={product.libelle}
                  prix={product.prix}
                />
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedCollection;


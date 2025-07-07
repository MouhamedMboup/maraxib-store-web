"use client";

import React, { useEffect, useState } from "react";
import axios from "../../lib/axios";
import ProductCard from "./ProductCard";
import { ThreeDot } from "react-loading-indicators";


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
  searchQuery?: string; // Made optional
  page?: boolean;
}

const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  className,
  typeProduit,
  page = false,
  searchQuery = '', // Default value as empty string
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`/produits/${typeProduit}`)
      .then((response: { data: any[] }) => {
        const fetchedCategories = response.data.map((category: any) => ({
          id: category.id,
          libelle: category.libelle,
          produits: (page? category.produits.slice(0, 10) : category.produits).map((product: any) => ({
            id: product.id,
            image: `${process.env.NEXT_PUBLIC_API_URL}/storage/${product.image}`,
            libelle: product.libelle,
            prix: product.prix,
            rating: 4,
            lien_whatsapp: ` ${product.lien_whatsapp}`,
          })),
        }));
        setCategories(fetchedCategories);
        setFilteredCategories(fetchedCategories); // Initially, set filtered to fetched
        setLoading(false);
      })
      .catch((_error: any) => {
        setError("Error fetching products");
        console.error(_error);
        setLoading(false);
      });
  }, [typeProduit]);

  // Filter products based on searchQuery
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCategories(categories);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const newFilteredCategories = categories
        .map((category) => ({
          ...category,
          produits: category.produits.filter(
            (product) =>
              product.libelle?.toLowerCase().includes(lowerCaseQuery) ||
              category.libelle?.toLowerCase().includes(lowerCaseQuery)
          ),
        }))
        .filter((category) => category.produits.length > 0);

      setFilteredCategories(newFilteredCategories);
    }
  }, [searchQuery, categories]);

  if (loading) {
    return (
      <div className="text-center font-bold text-black mb-4 mt-8">
       <ThreeDot color="#020a02" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mb-10">{error}</div>;
  }

  return (
    <section className={`hero-section ${className} py-12 px-4 bg-white`}>
      {filteredCategories?.map((category) => (
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

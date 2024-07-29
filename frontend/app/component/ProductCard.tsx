'use client';
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa6";

interface ProductCardProps {
  image: string;
  libelle: string;
  prix: number;
  rating: number;
  lien_watshapp: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, libelle, prix, rating, lien_watshapp }) => {
  return (
    <div className="bg-white shadow-lg mb-4 rounded-lg overflow-hidden  duration-300 hover:scale-105 ">
      <Image  
        src={image}
        alt={libelle}
        width={300}
        height={300}
        className="w-full h-72 object-scale-down"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.918 5.763 1.396 8.125L12 18.896l-7.346 3.86L6.05 14.973.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            ))}
          </div>
          <a
            href={lien_watshapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contact ${libelle} on WhatsApp`}
            className="text-green-500"
          >
            <FaWhatsapp className="w-10 h-10" />
          </a>
        </div>
        <h3 className="text-lg font-bold">{libelle}</h3>
        <p className="text-gray-700">{prix} Fcfa</p>
      </div>
    </div>
  );
};

export default ProductCard;

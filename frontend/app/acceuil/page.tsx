'use client'

import React from 'react'
import Navbar from '../component/Navbar'
import Herosection from '../component/Herosection'
import FeaturedCollection from '../component/FeaturedSection'
import { FaArrowCircleRight } from 'react-icons/fa'
import Servicesinfo from '../component/Servicesinfo'
import Footer from '../component/Footer'
import useFadeInOnScroll from '../hook/useFadeInOnScroll'

const productsSet1 = [
  {
    imageSrc: '/assets/femme/veil3.png',
    title: 'bayelat',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/njaxass/njaxass6.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/category3.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
];

const productsSet2 = [
  {
    imageSrc: '/assets/product1.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product2.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product3.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product4.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product5.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/product6.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/njaxass/njaxass3.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/njaxass/njaxass4.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/njaxass/njaxass5a.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/kourous/kourous2.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/kourous/kourous3.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
  {
    imageSrc: '/assets/kourous/kourous4.jpg',
    title: 'Laxasaay',
    price: 10000,
    rating: 4,
    whatsappLink: 'https://wa.me/776719785',
  },
];



export default function Acceuil() {

  useFadeInOnScroll();
  
  return (  
    <div className='font-mono'>
      <Navbar/>
      <Herosection/>
      {/* -----card categaories --------- */}
      <FeaturedCollection title1="New Collection" products={productsSet1} className="fade-in"/>
      <FeaturedCollection title1="Découvrez nos produits" products={productsSet2} className="fade-in"/>
      <button className="bg-black text-white py-4 px-6 rounded-full flex items-center justify-center mx-auto animate-bounce ">
              Voir plus &nbsp; <FaArrowCircleRight className='size-5 ' />
      </button>
      <Servicesinfo/>
      <Footer className="fade-in" />       
    </div>
   

  )
}

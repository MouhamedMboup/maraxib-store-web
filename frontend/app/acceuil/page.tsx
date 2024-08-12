'use client'

import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Herosection from '../component/Herosection';
import FeaturedCollection from '../component/FeaturedSection';
import { FaArrowCircleRight } from 'react-icons/fa';
import Servicesinfo from '../component/Servicesinfo';
import Footer from '../component/Footer';
import useFadeInOnScroll from '../hook/useFadeInOnScroll';

export default function Acceuil() {

  useFadeInOnScroll();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="font-mono">
      <Navbar onSearch={handleSearch} />
      <Herosection className="fade-in" />
      <FeaturedCollection typeProduit="homme" className="fade-in" searchQuery={searchQuery} page={true}/>
      <FeaturedCollection typeProduit="femme" className="fade-in" searchQuery={searchQuery} page={true}/>
      <FeaturedCollection typeProduit="accessoire" className="fade-in" searchQuery={searchQuery} page={true}/>
      <button className="bg-black text-white py-4 px-6 rounded-full flex items-center justify-center mx-auto animate-bounce">
        Voir plus &nbsp; <FaArrowCircleRight className="size-5" />
      </button>
      <Servicesinfo />
      <Footer className="fade-in" />
    </div>
  );
}

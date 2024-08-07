'use client'

import React from 'react'
import Navbar from '../component/Navbar'
import Herosection from '../component/Herosection'
import FeaturedCollection from '../component/FeaturedSection'
import { FaArrowCircleRight } from 'react-icons/fa'
import Servicesinfo from '../component/Servicesinfo'
import Footer from '../component/Footer'
import useFadeInOnScroll from '../hook/useFadeInOnScroll'
import NewCollection from '../component/NewCollection'





export default function Acceuil() {

  useFadeInOnScroll();
  
  return (
    <div className="font-mono">
      <Navbar />
      <Herosection className="fade-in" />
      {/* -----card categaories --------- */}
      <NewCollection title="New Collection" />
      <FeaturedCollection typeProduit="homme" className="fade-in" />
      <FeaturedCollection typeProduit="femme" className="fade-in" />
      <FeaturedCollection typeProduit="accessoire" className="fade-in" />

      <button className="bg-black text-white py-4 px-6 rounded-full flex items-center justify-center mx-auto animate-bounce ">
        Voir plus &nbsp; <FaArrowCircleRight className="size-5 " />
      </button>
      <Servicesinfo />
      <Footer className="fade-in" />
    </div>
  );
}

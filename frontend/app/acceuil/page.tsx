'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '../component/Navbar'
import Herosection from '../component/Herosection'
import NewCollection from '../component/NewCollection';
import FeaturedCollection from '../component/FeaturedSection'
import { FaArrowCircleRight } from 'react-icons/fa'
import Servicesinfo from '../component/Servicesinfo'
import Footer from '../component/Footer'

export default function Acceuil() {
  return (

    
    <div className='font-mono'>
      <Navbar/>
      <Herosection/>
      {/* -----card categaories --------- */}
      <NewCollection/>
      <FeaturedCollection/>
      <button className="bg-black text-white py-4 px-6 rounded-full flex items-center justify-center mx-auto">
              Voir plus &nbsp; <FaArrowCircleRight className='size-5' />
      </button>
      <Servicesinfo/>
      <Footer/>


      
    
    


        

    </div>
   

  )
}

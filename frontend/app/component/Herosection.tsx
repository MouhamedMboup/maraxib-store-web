import React from 'react'
import Image from 'next/image'
import { FaArrowCircleRight } from "react-icons/fa";

const Herosection = () => {
  return (
    
    
    <section className=" flex flex-wrap font-mono max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 align-center justify-center ">
       
       <div className="text-center md:text-left mr-auto place-self-center lg:col-span-7 ">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Thioline gou Yiw ak <span className='text-cyan-400'>Maraxib</span> Store </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Commandez tout ce que vous avez besoin dans votre boutique islamique en ligne que ce soit <br />
             Bayelahat, Laxasay, Coran, Xassida, Tapis de priere, chapelet  </p>
            <button className="bg-black text-white py-4 px-6 rounded-full flex items-center ">
              Découvrir &nbsp; <FaArrowCircleRight className='size-5' />
            </button>
        </div>
        <div className=" mt-8 md:mt-0  justify-center">
            <Image src="/assets/image1.jpg" alt="mockup" width={500} height={500} quality={100} className=' top-5 rounded-lg shadow-lg' />
        </div> 
                   
    </section>
  )
}

export default Herosection
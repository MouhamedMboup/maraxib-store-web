import React from 'react'
import Image from 'next/image'
import { FaArrowCircleRight } from "react-icons/fa";
import Link from 'next/link';

interface HerosectionProps {
className?: string;
}

const Herosection : React.FC<HerosectionProps> = ({ className}) => {
  return (
  
    <section  className={`hero-section ${className} flex flex-wrap md:flex-row md:text-left font-mono max-w-screen-xl px-4 py-8 pt-20 mx-auto md:flex lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 align-center justify-between`}>    
       <div className="text-left place-self-center lg:col-span-7  ">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight  md:pt-20 md:text-5xl xl:text-6xl ">Thioline gou Yiw ak <span className='text-cyan-400'>Maraxib</span> Store </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Commandez tout ce dont vous avez besoin dans votre boutique islamique en ligne que ce soit <br />
             Bayelahat, Laxasay, Coran, Xassida, Tapis de priere, chapelet <br /></p>
             <h2 className='text-black'>Vous pouvez aussi commander votre propre modéle de produit  </h2>  
             
           <Link href="/hommes"> <button className="bg-black text-white py-4 px-6 mt-8 rounded-full flex items-center animate-bounce md:mx-0">
              Découvrir &nbsp; <FaArrowCircleRight className='size-5' />
            </button>
            </Link>
        </div>
        <div className=" mt-8 pt-10 md:mt-0  justify-center">
            <Image src="/assets/hommes/accueil.jpg" alt="mockup" priority width={500} height={500} quality={100} className=' top-5 rounded-lg shadow-lg ' />
        </div> 
                   
    </section>
  )
}

export default Herosection
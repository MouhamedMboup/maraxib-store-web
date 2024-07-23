import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
      <footer className=" bg-black text-white pt-12 pb-8 px-4 ">
        <div className="container ml-20 mx-auto flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-cyan-400'>Maraxib</span> Store</h1>
            <p>Lorem lorem lorem lorem</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
           
            <p><MdEmail/> maraxib@gmail.com</p>
            
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Liens rapides</h2>
            <ul>
              <li><Link href="/acceuil" className="hover:underline">Accueil</Link></li>
              <li><Link href="/acceuil" className="hover:underline">Produits</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Suivez nous</h2>
            <div className="flex space-x-4">
              <a href="#"><FaFacebook className="size-11" /></a>
              <a href="#"><AiFillTikTok className="size-12" /></a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 flex flex-wrap justify-between items-center">
          <p className="w-full mx-auto text-center md:w-auto items-center justify-center md:text-left">&copy; 2024 All Right Reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
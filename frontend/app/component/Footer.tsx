import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";


interface FooterProps {
  className: string;
}

const Footer: React.FC<FooterProps> = ({className}) => {
    return (
      <footer className={`hero-section ${className} bg-black flex flex-wrap justify-center items-center text-center  text-white pt-12 pb-8 px-4`}>
    <div className="container mx-auto flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className="text-cyan-400">Maraxib</span> Store</h1>
        <p>Votre Boutique islamique </p>
      </div>
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <a href="mailto:amethmboup99@gmail.com" className="hover:underline"><MdEmail className="inline-block size-7 " /> maraxib@gmail.com</a>
        <p className="mr-16"><BsFillTelephoneInboundFill className="inline-block size-7 mr-2 mt-2"  /> 776719785</p>
      </div>
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h2 className="text-xl font-bold mb-4">Liens rapides</h2>
        <ul>
          <li><Link href="/acceuil" className="hover:underline">Acceuil</Link></li>
          <li><Link href="/hommes" className="hover:underline">Hommes</Link></li>
          <li><Link href="/femmes" className="hover:underline">Femmes</Link></li>
          <li><Link href="/accessoires" className="hover:underline">Accessoires</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <h2 className="text-xl font-bold mb-4">Suivez nous</h2>
        <div className="flex space-x-4 mx-auto items-center justify-center">
          <a href="#"><FaFacebook className="size-11" /></a>
          <a href="#"><AiFillTikTok className="size-12" /></a>
          <a href="#"><FaInstagram className="size-12"/></a>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="w-full text-center mx-auto md:w-auto">&copy; 2024 All Right Reserved</p>
    </div>
</footer>

    );
  };
  
  export default Footer;
  
import { MdDeliveryDining } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";

const ServiceInfo: React.FC = () => {
    return (
      <section className="bg-white text-black py-12 px-4">
        <div className="container mx-auto flex flex-wrap justify-around items-start">
          <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
            <div className="flex justify-center mb-4 items-center rounded relative">
            <MdDeliveryDining className="size-12  bg-black text-white rounded-full px-2 py-2" />
            </div>
            <h3 className="text-lg font-bold">LIVRAISON GRATUITE ET RAPIDE</h3>
            <p>Livraison gratuite pour toute commande 10 000</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
            <div className="flex justify-center mb-4">
            <RiCustomerServiceFill className="size-12  bg-black text-white rounded-full px-2 py-2" />
            </div>
            <h3 className="text-lg font-bold">SERVICE CLIENT 24h/24 et 7j/7</h3>
            <p>Support client convivial 24h/24 et 7j/7</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
            <div className="flex justify-center mb-4">
            <GiMoneyStack className="size-12  bg-black text-white rounded-full px-2 py-2" />
            </div>
            <h3 className="text-lg font-bold">GARANTIE DE REMBOURSEMENT</h3>
            <p>Nous remboursons l'argent dans les 30 jours</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceInfo;
  
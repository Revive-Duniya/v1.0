/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NFT_PAGE } from "../../utils/pages";
import axios from "axios";
import SadFace from '../../assets/images/sadface.png';
import HappyFace from '../../assets/images/happyFace.png'

const Subscription = () => {
  // const { wallet } = useContext(WalletContext);
  const [isSubscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(`http://localhost:3000/api/userSubscribed?address=${wallet.address}`);
  //       setSubscribed(data?.data?.isUserSubscribed);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   if (wallet && wallet.address) {
  //     getData();
  //   }
  // }, [wallet]);

  return (
    <div className="bg-primary w-full center flex-col pb-2">
      <div className="flex-col center gap-16 w-full">
        <div className="w-5/6">
          {isSubscribed ? (
            <div className="p-6 rounded-lg gap-6 flex-col center h-[85vh]">
              <img src={HappyFace} alt="happy face" className="w-[28%]"/>
              <h3 className="oxanium text-[3rem] font-bold leading-[50px] text-center text-white">
                Subscription Bought, Enjoy!
              </h3>
  
              <div className="center">
                  <Link to={NFT_PAGE} className="w-full">
                    <button className="py-4 px-6 font-bold oxanium tracking-wide bg-yellow text-black rounded-md text-sm hover:scale-95 transition duration-300">
                      Play Now
                    </button>
                  </Link>
                </div>
            </div>
          ) : (
            <>
              <div className="p-6 rounded-lg flex flex-col justify-between items-center w-full h-full">
                <img src={SadFace} alt="sad face" className="w-[28%]"/>
                <h3 className="text-[2.5rem] oxanium font-bold leading-[50px] text-center text-white">
                  You currently have no NFT collections
                </h3>

                <div className="center my-6">
                  <Link to={NFT_PAGE} className="w-full">
                    <button className="py-4 px-6 font-bold oxanium tracking-wide bg-yellow text-black rounded-md text-sm hover:scale-95 transition duration-300">
                      Go to Marketplace
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;

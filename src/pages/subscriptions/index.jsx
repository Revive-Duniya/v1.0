import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NFT_PAGE } from "../../utils/pages";
import { AiOutlineCheckSquare } from "react-icons/ai";
import axios from "axios";
import { WalletContext } from "../../context/WalletContext";

const Subscription = () => {
  const { wallet } = useContext(WalletContext);
  const [isSubscribed, setSubscribed] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/userSubscribed?address=${wallet.address}`);
        setSubscribed(data?.data?.isUserSubscribed);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (wallet && wallet.address) {
      getData();
    }
  }, [wallet]);

  return (
    <div className="w-full center flex-col">
      <div className="flex-col center gap-16 w-full">
        <div className="flex h-[400px] gap-16 w-5/6">
          {isSubscribed ? (
            <div className="p-6 bg-white rounded-lg flex flex-col justify-between items-center h-full shadow w-[30%]">
              <p className="uppercase text-black oxanium tracking-widest font-bold mb-4 center">
                Subscription Expiry Time
              </p>
  
              <h3 className="lato text-[3rem] font-bold leading-[50px] text-center text-primary">
                Subscription Bought, Enjoy!
              </h3>
  
              <div className="flex flex-col gap-2">
                <div className="items-start flex gap-3">
                  <AiOutlineCheckSquare color="#460b3e" />
                  <p className="text-[.9rem] text-primary">10$ in DUN tokens</p>
                </div>
              </div>
  
              <button className="py-3 oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm duration-300">
                Play
              </button>
            </div>
          ) : (
            <div className="p-6 bg-white rounded-lg flex flex-col justify-between items-center h-full shadow w-[30%]">
              <p className="uppercase text-black oxanium tracking-widest font-bold mb-4 center">Subscription</p>
              <h3 className="lato text-[3rem] font-bold leading-[50px] text-center text-primary">
                Get your Subscription
              </h3>
  
              <div className="flex flex-col gap-2">
                <div className="items-start flex gap-3">
                  <AiOutlineCheckSquare color="#460b3e" />
                  <p className="text-[.9rem] text-primary">10$ in DUN tokens</p>
                </div>
                <div className="items-start flex gap-3"></div>
              </div>
  
              <Link to={NFT_PAGE} className="w-full">
                <button className="py-3 oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm hover:scale-95 transition duration-300">
                  Buy 1 month subscription
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {wallet && wallet.address && (
        <p className="text-center text-gray-600 mt-4">
          Wallet Address: {wallet.address}
        </p>
      )}
    </div>
  );
};

export default Subscription;

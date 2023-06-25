import { useState } from "react";
import { Link } from "react-router-dom";
import { trendingNFT } from "../utils/trending";
import likeButton from "../assets/icons/like.png";
import closeIcon from "../assets/icons/close.png";

const TrendingNfts = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);

  const openModal = (nft) => {
    setSelectedNFT(nft);
  };

  const closeModal = () => {
    setSelectedNFT(null);
  };

  return (
    <div className="w-[90%] my-28 text-white relative">
      <div>
        <p className="gradient lato font-bold">UNLEASH YOUR POTENTIAL</p>
        <h2 className="text-white text-[3rem] mb-6 leading-32 capitalize oxanium">Find your perfect NFT Character</h2>
      </div>
      <div className="between flex-wrap gap-3">
        {trendingNFT.map((trending, index) => (
          <div key={index} className="w-[24%] p-3 bg-walletGradient rounded-3xl">
            <div className="relative">
              <img src={trending.image} alt="trending image" className="rounded-[20px]" />
              <div className="absolute top-0 right-0 p-2 center gap-2 likeGradient">
                <img src={likeButton} alt="like" />
                <p>{trending.likes}</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex gap-3">
                <div className="w-[50px]">
                  <img src={trending.profileImage} alt="profile image" />
                </div>
                <div>
                  <h3 className="text-white text-md oxanium tracking-wide">{trending.name}</h3>
                  <div className="flex gap-1 items-center">
                    <p className="lato text-sm tracking-wide">By: {trending.author}</p>
                    <div className="w-[15px]">
                      <img src={trending.profileStatus} alt="profile status" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 between">
                <p className="text-sm">🔥 Currently: {trending.status}</p>
                <p className="oxanium text-md">{trending.price} DUN</p>
              </div>
              <button
                className="py-3 bg-primary w-full rounded-xl uppercase text-white border-yellow border mt-6 font-bold text-sm oxanium hover:scale-95 hover:bg-yellow hover:text-black transition duration-300"
                onClick={() => openModal(trending)}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedNFT && (
        <div className="fixed bg-[#fcfcf9] inset-x-0 bottom-0 center w-full rounded-lg h-[90vh] z-50">
          <div className="w-full rounded-lg p-6 center h-full">
              <button
                className="absolute top-3 right-3"
                onClick={closeModal}
              >
                <img src={closeIcon} alt="Close" className="w-[25px]" />
              </button>
            <div className="w-[60%] h-5/6 center">
              <img src={selectedNFT.image} alt="image" className="h-full" />
            </div>
            <div className="w-[40%]">
              <div className="flex text-black flex-col">
                <h2 className="text-[2.5rem] oxanium text-left font-bold mb-4">{selectedNFT.name}</h2>
                <p className="w-3/5 text-sm tracking-wide leading-5 text-grey oxanium">
                  {selectedNFT.about}
                </p>
              </div>
              <div className="flex mt-6 flex-col gap-4 oxanium font-bold text-black w-full">
                <div className="between w-5/6">
                  <p>Buy:</p>
                  <p>{selectedNFT.price} DUN</p>
                </div>
                <div className="between w-5/6">
                  <p>Rent:</p>
                  <p>{selectedNFT.rent} DUN</p>
                </div>
              </div>
              <div className="border border-black center rounded-md h-[3.5rem] p-[3px] mt-10 w-5/6">
                  <input type="text" name="text" id="text" placeholder="Enter coupon code" className="w-[80%] bg-white outline-none border-none pl-6 text-black oxanium text-sm center"/>
                  <button className="bg-black text-white h-full w-[20%] text-sm capitalize oxanium center rounded">
                      Apply
                  </button>
              </div>
              <div className="w-[85%] between mt-10">
                <button className="border-black text-black border font-bold h-[3rem] w-[45%] text-sm capitalize oxanium center rounded hover:scale-95 transition duration-300">Rent Character</button>
                <button className="bg-black text-white border h-[3rem] w-[45%] text-sm capitalize oxanium center rounded hover:scale-95 transition duration-300">Purchase Character</button>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default TrendingNfts;

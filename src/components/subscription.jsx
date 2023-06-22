import React from "react";
import { Link } from "react-router-dom";
import { NFT_PAGE } from "../utils/pages";
import { AiOutlineCheckSquare } from 'react-icons/ai'

const Subscription = () => {
  return (
    <div className="flex-col center py-28 gap-16 w-full">
        <h2 className="text-center oxanium text-[3.5rem] w-full capitalize text-white">Play how you want</h2>
        <div className="flex h-[400px] between w-5/6">
            {/* Free Subscription */}
            <div className="p-6 bg-[#AAAAAA] cursor-not-allowed rounded-lg flex flex-col justify-between items-center h-full shadow w-[30%]">
                <p className="uppercase text-black oxanium tracking-widest font-bold mb-4 center">Free to play</p>
                <h3 className="lato text-[5rem] font-bold text-center text-primary">Zero</h3>

                <div className="">
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Play the game online</p>
                    </div>
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Watch and earn</p>
                    </div>
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Participate in tournaments</p>
                    </div>
                </div>
                
            
                <Link to={NFT_PAGE} className="w-full">
                    <button className="py-3 oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm cursor-not-allowed">
                        Select
                    </button>
                </Link>
            </div>

            {/* Rent Subscription */}
            <div className="p-6 bg-white rounded-lg flex flex-col justify-between items-center h-full shadow w-[30%]">
                <p className="uppercase text-black oxanium tracking-widest font-bold mb-4 center">Rent a character</p>
                <h3 className="lato text-[3rem] font-bold leading-[50px] text-center text-primary">Pay per day</h3>

                <div className="">
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Play the full game</p>
                    </div>
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Watch and earn</p>
                    </div>
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Participate in tournaments</p>
                    </div>
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Joined priced tournaments</p>
                    </div>
                </div>
                
                <Link to={NFT_PAGE} className="w-full">
                    <button className="py-3 oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm hover:scale-95 transition duration-300">
                        Select
                    </button>
                </Link>
                
            </div>

            {/* Purchase Subscription */}
            <div className="p-6 bg-white rounded-lg flex flex-col justify-between items-center h-full shadow w-[30%]">
                <p className="uppercase text-black oxanium tracking-widest font-bold mb-4 center">Buy a character</p>
                <h3 className="lato text-[3rem] font-bold leading-[50px] text-center text-primary">Monthly subscription</h3>

                <div className="">
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Play the full game</p>
                    </div>
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Watch and earn</p>
                    </div>
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Play and earn</p>
                    </div>
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Earn passive income</p>
                    </div>
                    <div className="items-start flex gap-3">
                        <AiOutlineCheckSquare color="#460b3e" />
                        <p className="text-[.9rem] text-primary">Get a percent from earnings lender</p>
                    </div>
                </div>
                
            
                <Link to={NFT_PAGE} className="w-full">
                    <button className="py-3 oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm hover:scale-95 transition duration-300">
                        Select
                    </button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Subscription;

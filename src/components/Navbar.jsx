import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BiWalletAlt } from 'react-icons/bi';
import CustomButton from "./common/button";
import Logo from "../assets/images/logo.png";
import { LANDING_PAGE_URL, NFT_PAGE, SUBSCRIPTIONS_PAGE, INVENTORY, COMPETITION } from "../utils/pages";
import { pairHashpack } from "../hashconnect";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = async () => {
    const saveData = await pairHashpack(setWalletAddress, setLoggedIn, closeModal);
    setWalletAddress(saveData.pairingData.accountIds[0]);
    setLoggedIn(true);
  };

  return (
    <div className="py-3 w-full center bg-primary">
      <div className="w-[90%] between">
        <div className="h-[60px] w-[60px] center">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className="bg-gradient backdrop-blur-20 h-[45px] w-1/2 uppercase oxanium text-white text-[0.7rem] center gap-6">
          <li className="hover:scale-105 duration-300 transition cursor-pointer">
            <Link to={LANDING_PAGE_URL}>Home</Link>
          </li>
          <li className="hover:scale-105 duration-300 transition cursor-pointer">
            <Link to={NFT_PAGE}>Marketplace</Link>
          </li>
          <li className="hover:scale-105 duration-300 transition cursor-pointer">
            <Link to={INVENTORY}>Inventory</Link>
          </li>
          <li className="hover:scale-105 duration-300 transition cursor-pointer">
            <Link to={COMPETITION}>Competitions</Link>
          </li>
          <li className="hover:scale-105 duration-300 transition cursor-pointer">
            <Link to={SUBSCRIPTIONS_PAGE}>Collections</Link>
          </li>
        </ul>
        <div className="center gap-3">
          {isLoggedIn ? (
            <p className="text-white oxanium">{walletAddress}</p>
          ) : (
            <>
              <CustomButton
                padding=".6rem 1.7rem"
                backgroundColor="#fcb70c"
                textColor="#000000"
                onClick={openModal}
              >
                Login / Sign Up
              </CustomButton>
            </>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="bg-primary fixed inset-0 flex items-center w-full h-full justify-center z-50">
          <div className="bgWalletGradient text-white center flex-col p-6 rounded-lg">
            <img src={Logo} alt="logo" onClick={closeModal} className="w-[100px]" />
            <p className="oxanium tracking-wide mt-4 text-center text-sm">Unleash the power of a reborn world!</p>
            <h2 className="text-md uppercase font-bold oxanium mt-3">Create an account</h2>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="text" className="text-sm lato items-start text-left">Email: </label>
              <input type="text" name="text" id="text" placeholder="Enter your email" className="oxanium text-sm py-3 pl-3 rounded-md outline-none border border-white text-white bg-[transparent]" />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password" className="text-sm lato items-start text-left">Password: </label>
              <input type="password" name="password" id="password" placeholder="Enter your password" className="oxanium text-sm py-3 pl-3 rounded-md outline-none border border-white text-white bg-[transparent]" />
            </div>
            <button
              className="text-black oxanium font-bold text-sm py-3 rounded-lg mb-2 center gap-2 w-full bg-yellow"
              onClick={handleLogin}
            >
              Login / Sign Up
            </button>
            <hr className="my-6 border border-yellow w-full"/>
            <button
              className="text-yellow border oxanium font-bold text-sm py-3 rounded-lg mb-2 center gap-2 w-[360px] border-yellow cursor-not-allowed"
              disabled
            >
              <p>Connect with Google</p>
              <FcGoogle />
            </button>
            <>
              <CustomButton
                padding=".8rem 1.7rem"
                backgroundColor="#fcb70c"
                textColor="#000000"
                onClick={() => pairHashpack(setWalletAddress, setLoggedIn, closeModal)}
              >
                <p>Connect with wallet</p>
                <div><BiWalletAlt /></div>
              </CustomButton>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

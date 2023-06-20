import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BiWalletAlt }from 'react-icons/bi';
import CustomButton from "./common/button";
import UserProfile from "../assets/images/UserProfile.png";
import Logo from "../assets/images/logo.png";
import detectEthereumProvider from "@metamask/detect-provider";
import { WalletContext } from "../context/WalletContext";
import { LANDING_PAGE_URL, NFT_PAGE } from "../utils/pages";
import { formatBalance } from "../utils/wallet";

const NavBar = () => {
  const [hasProvider, setHasProvider] = useState(null);
  const [walletState, setWalletState] = useState({ address: "", balance: "" });
  const [isConnecting, setIsConnecting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateWallet } = useContext(WalletContext);

  useEffect(() => {
    const storedWallet = localStorage.getItem("wallet");
    if (storedWallet) {
      const parsedWallet = JSON.parse(storedWallet);
      setWalletState(parsedWallet);
    }

    checkWalletConnection(); // Check for existing connection on component mount
  }, []);

  useEffect(() => {
    localStorage.setItem("wallet", JSON.stringify(walletState));
  }, [walletState]);

  const checkWalletConnection = async () => {
    try {
      const provider = await detectEthereumProvider();
      setHasProvider(Boolean(provider));

      if (provider && provider.selectedAddress) {
        handleUpdateWallet(provider.selectedAddress);
      } else {
        setWalletState({ address: "", balance: "" }); // Clear wallet state if not connected
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    setIsConnecting(true);

    try {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await provider.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          handleUpdateWallet(accounts[0]);
          closeModal(); // Close the modal after successful connection
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleUpdateWallet = async (address) => {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });

    setWalletState((prevWalletState) => ({ ...prevWalletState, address, balance }));
    updateWallet({ address, balance });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            Inventory
          </li>
          <li className="hover:scale-105 duration-300 transition cursor-pointer">
            Competitions
          </li>
        </ul>
        <div className="center gap-3">
          {walletState.address ? (
            <>
              <div className="text-white text-[.9rem] oxanium">
                Wallet Balance: {formatBalance(walletState.balance)}
              </div>
              <div className="rounded-full hover:scale-95 transition duration-300">
                <img src={UserProfile} alt="user profile image" />
              </div>
            </>
          ) : (
            <>
              <CustomButton
                padding=".6rem 1.7rem"
                backgroundColor="#fcb70c"
                textColor="#000000"
                onClick={openModal}
                disabled={isConnecting}
              >
                Sign Up
              </CustomButton>
              <div className="rounded-full hover:scale-95 transition duration-300">
                <img src={UserProfile} alt="user profile image" />
              </div>
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
              <input type="password" name="text" id="text" placeholder="Enter your email" className="oxanium text-sm py-3 pl-3 rounded-md outline-none border border-white text-white bg-[transparent]" />
            </div>
            <button
              className="text-black oxanium font-bold text-sm py-3 rounded-lg mb-2 center gap-2 w-full bg-yellow cursor-not-allowed"
              onClick={connectWallet}
              disabled={isConnecting}
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
                onClick={connectWallet}
                disabled={isConnecting}
              >
                <p>{isConnecting ? "Connecting..." : "Connect with wallet"}</p>
                <div className=""><BiWalletAlt /></div>
              </CustomButton>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

import { useState } from "react";
import CustomButton from "./common/button";
import UserProfile from "../assets/images/UserProfile.png";
import Logo from "../assets/images/logo.png";
import { formatBalance } from "../utils/wallet";
import detectEthereumProvider from "@metamask/detect-provider";

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [hasProvider, setHasProvider] = useState(null);
  const [wallet, setWallet] = useState({ address: "", balance: "" });
  const [isConnecting, setIsConnecting] = useState(false); // New state to track the connection status

  const connectWallet = async () => {
    setIsConnecting(true); // Set the connecting state to true

    const provider = await detectEthereumProvider({ silent: true });
    setHasProvider(Boolean(provider));

    if (provider) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        if (accounts.length > 0) {
          updateWallet(accounts[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateWallet = async (address) => {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });

    setWallet({ address, balance });
    setIsConnecting(false); // Set the connecting state to false once connected
  };

  return (
    <div className="py-3 w-[90%] between">
      <div className="h-[60px] w-[60px] center">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="bg-gradient backdrop-blur-20 h-[45px] lg:ml-16 w-1/2 uppercase oxanium text-white text-[0.7rem] center gap-6">
        <li className="hover:scale-105 duration-300 transition cursor-pointer">Home</li>
        <li className="hover:scale-105 duration-300 transition cursor-pointer">Play Game</li>
        <li className="hover:scale-105 duration-300 transition cursor-pointer">Competitions</li>
        <li className="hover:scale-105 duration-300 transition cursor-pointer">Trending NFTs</li>
      </ul>
      <div className="center gap-3">
        {wallet.address ? (
          <>
            <div className="text-white text-[.9rem] oxanium">Wallet Balance: {formatBalance(wallet.balance)}</div>
          </>
        ) : (
          <CustomButton
            padding=".6rem 1.7rem"
            backgroundColor="#fcb70c"
            textColor="#000000"
            onClick={connectWallet}
            disabled={isConnecting} // Disable the button while connecting
          >
            {isConnecting ? "Connecting..." : "Connect Wallet"} {/* Update button text based on connection state */}
          </CustomButton>
        )}
        <div className="rounded-full hover:scale-95 transition duration-300">
          <img src={UserProfile} alt="user profile image" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

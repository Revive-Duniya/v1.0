import { startTransition } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./common/button";
import UserProfile from "../assets/images/UserProfile.png";
import Logo from "../assets/images/logo.png";
import { formatBalance } from "../utils/wallet";
import detectEthereumProvider from "@metamask/detect-provider";
import { WalletContext } from "../context/WalletContext";
import { LANDING_PAGE_URL, NFT_PAGE } from "../utils/pages";

const NavBar = () => {
  const [hasProvider, setHasProvider] = useState(null);
  const [walletState, setWalletState] = useState({ address: "", balance: "" });
  const [isConnecting, setIsConnecting] = useState(false);
  const { wallet, updateWallet } = useContext(WalletContext);

  const connectWallet = async () => {
    setIsConnecting(true);

    startTransition(() => {
      detectEthereumProvider({ silent: true })
        .then((provider) => {
          setHasProvider(Boolean(provider));

          if (provider) {
            window.ethereum
              .request({ method: "eth_requestAccounts" })
              .then((accounts) => {
                if (accounts.length > 0) {
                  handleUpdateWallet(accounts[0]);
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .finally(() => {
          setIsConnecting(false);
        });
    });
  };

  const handleUpdateWallet = async (address) => {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });

    setWalletState((prevWalletState) => ({ ...prevWalletState, address, balance }));
  };

  return (
    <div className="py-3 w-full center bg-primary">
      <div className="w-[90%] between">
        <div className="h-[60px] w-[60px] center">
          <Link to='/'>
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
            </>
          ) : (
            <CustomButton
              padding=".6rem 1.7rem"
              backgroundColor="#fcb70c"
              textColor="#000000"
              onClick={connectWallet}
              disabled={isConnecting}
            >
              {isConnecting ? "Connecting..." : "Connect Wallet"}
            </CustomButton>
          )}
          <div className="rounded-full hover:scale-95 transition duration-300">
            <img src={UserProfile} alt="user profile image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React, { createContext, useState } from "react";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState({ address: "", balance: "" });

  const updateWallet = (address, balance) => {
    setWallet({ address, balance });
  };

  return (
    <WalletContext.Provider value={{ wallet, updateWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

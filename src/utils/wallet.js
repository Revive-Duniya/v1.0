import metamaskImage from "../assets/images/metamask.png";
import trustWalletImage from "../assets/images/trustwallet.png";
import binanceImage from "../assets/images/binance.png";
import hashpack from "../assets/images/hashpack.png";
import coingeckoImage from "../assets/images/coingecko.png";

export const supportedWallet = [
  {
    name: "HashPack",
    picture: hashpack,
  },
  {
    name: "Metamask",
    picture: metamaskImage,
  },
  {
    name: "Trust Wallet",
    picture: trustWalletImage,
  },
  {
    name: "Binance",
    picture: binanceImage,
  },
  {
    name: "CoinGecko",
    picture: coingeckoImage,
  },
];


export const formatBalance = (rawBalance) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
};
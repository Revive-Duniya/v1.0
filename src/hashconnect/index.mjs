import { HashConnect } from 'hashconnect';

const hashconnect = new HashConnect();

const appMetadata = {
  name: "Revive Duniya",
  description: "A game to build a sustainable world",
  icon: "https://github.com/codewithmide/revive-duniya/blob/main/frontend/src/app/favicon.ico"
};

export const pairHashpack = async (setWalletAddress, setLoggedIn, closeModal) => {
  let initData = await hashconnect.init(appMetadata, "mainnet", false);

  hashconnect.foundExtensionEvent.once((walletMetadata) => {
    hashconnect.connectToLocalWallet(initData.pairingString, walletMetadata);
  });

  hashconnect.pairingEvent.once((pairingData) => {
    console.log('wallet paired');
    console.log(pairingData);

    setWalletAddress(pairingData.accountIds[0]);
    setLoggedIn(true);
    closeModal();
  });

  return initData;
};

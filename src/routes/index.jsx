import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LANDING_PAGE_URL, NFT_PAGE, PURCHASE_NFT, OWNED_NFTS, } from "../utils/pages";

const Homepage = React.lazy(() => import("../pages/index"));

// const OWNED_NFTS = React.lazy(() => import("../pages/owned-nft/index"));
// const PURCHASE_NFT = React.lazy(() => import("../pages/purchase-nft/index"));
// const NFT_PAGE = React.lazy(() => import('./../pages/nft-listings/index'));


const WebRoute = () => {
    return (
      <Router>
        <Routes>
          <Route path={LANDING_PAGE_URL} element={<Homepage />} />
          {/*
          <Route path={OWNED_NFTS} element={<OwnedNFTs />} />
          <Route path={PURCHASE_NFT} element={<PurchaseNFT />} />
          <Route path={NFT_PAGE} element={<NFTPage />} />*/}
        </Routes>
      </Router>
    );
  };
  
  export default WebRoute;
  
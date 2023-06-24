import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LANDING_PAGE_URL, NFT_PAGE, LOGIN_SUCCESS, INVENTORY, COMPETITION, PURCHASE_NFT, OWNED_NFTS, SUBSCRIPTIONS_PAGE } from "../utils/pages";
import NavBar from "../components/Navbar";
import NotFoundPage from "../components/404";

const Homepage = React.lazy(() => import("../pages/index"));
const Marketplace = React.lazy(() => import("../pages/marketplace/index"));
const LoginSuccess = React.lazy(() => import("../pages/loginSuccess/index"));
const Subscriptions = React.lazy(() => import("../pages/subscriptions/index"));
const Inventory = React.lazy(() => import("../pages/inventory/index"));
const Competition = React.lazy(() => import("../pages/competitons/index"));

// const OwnedNFTs = React.lazy(() => import("../pages/owned-nft/index"));
// const PurchaseNFT = React.lazy(() => import("../pages/purchase-nft/index"));

const WebRoute = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <NavBar />
          <Routes>
            <Route path={LANDING_PAGE_URL} element={<Homepage />} />
            <Route path={NFT_PAGE} element={<Marketplace />} />
            <Route path={SUBSCRIPTIONS_PAGE} element={<Subscriptions />} />
            <Route path={LOGIN_SUCCESS} element={<LoginSuccess />} />
            <Route path={INVENTORY} element={<Inventory />} />
            <Route path={COMPETITION} element={<Competition />} />
            <Route path="*" element={<NotFoundPage />} />
            
            {/* <Route path={OWNED_NFTS} element={<OwnedNFTs />} />
            <Route path={PURCHASE_NFT} element={<PurchaseNFT />} /> */}
          </Routes>
      </Suspense>
    </Router>
  );
};

export default WebRoute;

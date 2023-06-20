import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LANDING_PAGE_URL, NFT_PAGE, LOGIN_SUCCESS, SIGN_UP_OPTIONS, PURCHASE_NFT, OWNED_NFTS,SUBSCRIPTIONS_PAGE } from "../utils/pages";
import { WalletProvider } from "../context/WalletContext";
import NavBar from "../components/Navbar";
import SkeletonLoader from "react-loading-skeleton";
import NotFoundPage from "../components/404";

const Homepage = React.lazy(() => import("../pages/index"));
const Marketplace = React.lazy(() => import("../pages/marketplace/index"));
const LoginSuccess = React.lazy(() => import("../pages/loginSuccess/index"));
const SignUpOptions = React.lazy(() => import("../pages/signUpOptions/index"));
const Subscriptions = React.lazy(() => import("../pages/subscriptions/index"));

// const OwnedNFTs = React.lazy(() => import("../pages/owned-nft/index"));
// const PurchaseNFT = React.lazy(() => import("../pages/purchase-nft/index"));

const WebRoute = () => {
  return (
    <Router>
      <Suspense fallback={<SkeletonLoader height={300} width={300} />}>
        <WalletProvider>
          <NavBar />
          <Routes>
            <Route path={LANDING_PAGE_URL} element={<Homepage />} />
            <Route path={NFT_PAGE} element={<Marketplace />} />
            <Route path={SUBSCRIPTIONS_PAGE} element={<Subscriptions />} />
            <Route path={LOGIN_SUCCESS} element={<LoginSuccess />} />
            <Route path="*" element={<NotFoundPage />} />
            
            {/* <Route path={OWNED_NFTS} element={<OwnedNFTs />} />
            <Route path={PURCHASE_NFT} element={<PurchaseNFT />} /> */}
          </Routes>
        </WalletProvider>
      </Suspense>
    </Router>
  );
};

export default WebRoute;

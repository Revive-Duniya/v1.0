import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Wallets from "../components/wallets";
import Works from "../components/works";
import TrendingNfts from "../components/trending";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";

const Homepage = () => {
    return (
        <div className="w-full center flex-col bg-primary">
            <NavBar />
            <Hero />
            <Wallets />
            <Works />
            <TrendingNfts />
            <Subscribe />
            <Footer />
        </div>
    );
}
 
export default Homepage;
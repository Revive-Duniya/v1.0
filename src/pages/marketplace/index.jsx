import Creators from "../../components/creators";
import Footer from "../../components/footer";
import Subscribe from "../../components/subscribe";
import TrendingNfts from "../../components/trending";

const Marketplace = () => {
    return (
        <div className="w-full center flex-col bg-primary">
            <TrendingNfts />
            <Creators />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Marketplace;
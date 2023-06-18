import { trendingNFT } from "../utils/trending";

const TrendingNfts = () => {
    return (
        <div className="w-[90%] my-28 text-white">
            <div>
                <p className="gradient lato">Most used characters at the moment</p>
                <h2 className="text-white text-[3rem] leading-[100px] capitalize oxanium">Trending NFTs</h2>
            </div>
            <div className="between flex-wrap gap-3">
                {trendingNFT.map((trending, index) => (
                    <div key={index} className="w-[24%] p-3 bg-walletGradient rounded-[18px] ">
                        <div>
                            <img src={trending.image} alt="trending image" />
                        </div>
                        <div className="mt-6">
                            <div className="flex gap-3">
                                <div className="w-[50px]">
                                    <img src={trending.profileImage} alt="profile image" />
                                </div>
                                <div>
                                    <h3 className="text-white text-md oxanium tracking-wider">{trending.name}</h3>
                                    <div className="flex gap-1 items-center">
                                        <p className=" lato text-sm tracking-wider">By: {trending.author}</p>
                                        <div className="w-[15px]">
                                            <img src={trending.profileStatus} alt="profile status" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 between">
                                <p className="text-sm">🔥 Currently: {trending.status}</p>
                                <p className="oxanium text-md">{trending.price} DUN</p>
                            </div>
                            <button className="py-3 bg-primary w-full rounded-[10px] text-white border-yellow border mt-6 font-bold text-sm oxanium hover:scale-95 hover:bg-yellow hover:text-black transition duration-300">Purchase</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default TrendingNfts;
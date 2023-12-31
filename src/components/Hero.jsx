import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./common/button";
import nftOne from '../assets/images/nft1.png';
import nftTwo from '../assets/images/nftTwo.png';
import nftThree from '../assets/images/nftThree.png';
import MilkyWay from '../assets/images/MilkyWay.png';

const Hero = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleClick = (card) => {
        setActiveCard(card);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            switch (activeCard) {
                case 'survivalist':
                    setActiveCard('labourer');
                    break;
                case 'labourer':
                    setActiveCard('forager');
                    break;
                case 'forager':
                    setActiveCard('survivalist');
                    break;
                default:
                    setActiveCard('survivalist');
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [activeCard]);

    return (
        <>
            <div className="w-[90%] py-20 between">
                <div className="w-[48%] flex gap-4 flex-col">
                    <h1 className="text-[3.5rem] text-white oxanium uppercase font-bold leading-[60px]">
                        <span className="text-yellow">Revive Duniya: </span>Harness the Power of a Reborn World!
                    </h1>
                    <p className="paragraph text-md lato font-light leading-[25px] -mt-3">
                        Join these characters in their fight for survival and quest to build a new, and more sustainable world where man and his environment are safer, healthier and happier.
                    </p>
                    <div className="flex gap-6 z-20 mt-6 w-4/6">
                        <Link to='/marketplace' className="w-1/2">
                            <CustomButton 
                                padding="1rem 2rem"
                                backgroundColor="#fcb70c"
                                textColor="#000000"
                            >
                                Explore NFTs
                            </CustomButton>
                        </Link>
                        <a href="https://problemsome.itch.io/revive-duniya-demo-offline" rel="noreferrer" target="_blank" className="w-1/2">
                            <CustomButton
                                padding="1rem 2rem"
                                textColor="#fcb70c"
                                borderColor="1px solid #fcb70c"
                                backgroundColor="transparent"
                            >
                                Play Now
                            </CustomButton>
                        </a>
                    </div>
                    <p className="text-yellow oxanium z-40">Game Demo password: <span className="text-white">reviveduniyatester</span></p>
                </div>
                <div className="center gap-6 w-1/2 relative">
                    <div
                        className={`nft-1 center flex-col gap-4 rounded-[2rem] p-[1rem] ${activeCard === 'survivalist' ? 'z-10 transition-all duration-500 transform translate-y-0 scale-1' : 'transition-all duration-500 transform translate-y-10 scale-0.9'}`}
                        onClick={() => handleClick('survivalist')}
                    >
                        <img src={nftOne} alt="nft" width={300} height={300} className="rounded-[20px]"/>
                        <div className="text-yellow font-bold text-md center flex-col oxanium">
                            <p className="capitalize">The Survivalist</p>
                            <p className="mb-4">DUN 2,000</p>
                        </div>
                    </div>
                    <div
                        className={`nft-1 center flex-col gap-4 rounded-[2rem] p-[1rem] absolute ${activeCard === 'labourer' ? 'z-10 transition-all duration-500 transform translate-y-0 scale-1' : 'transition-all duration-500 transform translate-y-10 scale-0.9'}`}
                        onClick={() => handleClick('labourer')}
                    >
                        <img src={nftTwo} alt="nft" width={300} height={300} className="rounded-[20px]"/>
                        <div className="text-yellow font-bold  text-md center flex-col oxanium">
                            <p className="capitalize">The Labourer</p>
                            <p className="mb-4">DUN 5,000</p>
                        </div>
                    </div>
                    <div
                        className={`nft-1 center flex-col gap-4 rounded-[2rem] p-[1rem] ${activeCard === 'forager' ? 'z-10 transition-all duration-500 transform translate-y-0 scale-1' : 'transition-all duration-500 transform translate-y-10 scale-0.9'}`}
                        onClick={() => handleClick('forager')}
                    >
                        <img src={nftThree} alt="nft" width={300} height={300} className="rounded-[20px]"/>
                        <div className="text-yellow font-bold text-md center flex-col oxanium">
                            <p className="capitalize">The Forager</p>
                            <p className="mb-4">DUN 4,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full -mt-[10rem] bottom-0">
                <img src={MilkyWay} alt="Milkyway"/>
            </div>
        </>
    );
}

export default Hero;
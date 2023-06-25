import walletIcon from '../assets/icons/wallet.png';
import NextStepIcon from '../assets/icons/step.png';
import playNowIcon from '../assets/icons/bi_collection.png';
import nftIcon from '../assets/icons/add_collections.png';
import gamingIcon from '../assets/icons/gaming.png';

const Works = () => {
    return (
        <div className="my-[8rem] center flex-col">
            <h1 className="oxanium text-[3rem] text-white mb-6">How it works</h1>
            <div className="center">
                <div className="center">
                    <div className="center gap-4 flex-col">
                        <div className="p-3 rounded-full walletGradient center">
                            <img src={walletIcon} width={40} height={40} alt="wallet icon" />
                        </div>
                        <div>
                            <p className="lato text-sm leading-[28.15px] text-white">Create account</p>
                        </div>
                    </div>
                    <img src={NextStepIcon} width={100} alt="next step icon" className="-mt-10 mx-3" />
                </div>
                <div className="center">
                    <div className="center gap-4 flex-col">
                        <div className="p-3 rounded-full walletGradient center">
                            <img src={playNowIcon} width={40} height={40} alt="wallet icon" />
                        </div>
                        <div>
                            <p className="lato text-sm leading-[28.15px] text-white">Buy or Rent NFT</p>
                        </div>
                    </div>
                    <img src={NextStepIcon} width={100} alt="next step icon" className="-mt-10 mx-3" />
                </div>
                <div className="center">
                    <div className="center gap-4 flex-col">
                        <div className="p-3 rounded-full walletGradient center">
                            <img src={nftIcon} width={40} height={40} alt="wallet icon" />
                        </div>
                        <div>
                            <p className="lato text-sm leading-[28.15px] text-white">Click on play now</p>
                        </div>
                    </div>
                    <img src={NextStepIcon} width={100} alt="next step icon" className="-mt-10 mx-3" />
                </div>
                <div className="center">
                    <div className="center flex-col gap-4">
                        <div className="p-3 rounded-full walletGradient center">
                            <img src={gamingIcon} width={40} height={40} alt="wallet icon" />
                        </div>
                        <div>
                            <p className="lato text-sm leading-[28.15px] text-white">Start playing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Works;
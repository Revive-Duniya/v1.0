import { Link } from "react-router-dom";
import { NFT_PAGE } from "../../utils/pages";
import SadFace from '../../assets/images/sadface.png';
// import HappyFace from '../../assets/images/happyFace.png';

const Subscription = () => {

  return (
    <div className="bg-primary w-full center flex-col pb-2">
      <div className="flex-col center gap-16 w-full">
        <div className="w-5/6">
            <>
              <div className="p-6 rounded-lg flex flex-col justify-between items-center w-full h-full">
                <img src={SadFace} alt="sad face" className="w-[28%]"/>
                <h3 className="text-[2.5rem] oxanium font-bold leading-[50px] text-center text-white">
                  You currently have no NFT collections
                </h3>

                <div className="center my-6">
                  <Link to={NFT_PAGE} className="w-full">
                    <button className="py-4 px-6 font-bold oxanium tracking-wide bg-yellow text-black rounded-md text-sm hover:scale-95 transition duration-300">
                      Go to Marketplace
                    </button>
                  </Link>
                </div>
              </div>
            </>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

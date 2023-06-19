import { CreatorsDetails } from "../utils/creators";

const Creators = () => {
    return (
        <div className="w-[90%] my-10 text-white">
            <div>
                <p className="gradient lato">Meet our top creators</p>
                <h2 className="text-white text-[3rem] leading-[100px] capitalize oxanium mb-6">Top Creators</h2>
            </div>
            <div className="between flex-wrap gap-3">
                {CreatorsDetails.map((creator, index) => (
                    <div key={index} className="w-[19%] p-3 bg-walletGradient center flex-col rounded-[18px] ">
                        <div className="w-full items-start justify-center">
                            <p className="walletGradient text-yellow oxanium text-sm my-auto p-1 w-[30px] center rounded-full">{creator.position}</p>
                        </div>
                        <div>
                            <img src={creator.image} alt="creator image" />
                        </div>
                        <div className="mt-6 lato">
                            <p>{creator.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Creators;
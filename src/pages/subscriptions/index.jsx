import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { NFT_PAGE } from "../../utils/pages";
import { AiOutlineCheckSquare } from 'react-icons/ai'
import axios from "axios";
const Subscription = () => {
    const [isSuscribed,setSubscription] = useState(false);
    const [daysLeft,setDaysLeft] = useState(0);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const getData = async ()=> {
            const {data} = await axios.get(`http://localhost:3000/api/userSuscribed?address=0x00000000000000000000000000000000003d3403`)
            setSubscription(data?.data?.isUsersuscribed);
            console.log(data)
            setLoading(false);
        }
        
        getData();

    },[])
    
    return (
        <div className="w-full center flex-col ">
            <div className="flex-col center py-28 gap-16 w-full">
                {/* <h2 className="text-center oxanium text-[3.5rem] w-full capitalize text-white">Monthly Subscription</h2> */}
                <div className="flex h-[400px] gap-16 w-5/6">
                    {/* Free Subscription */}
                    {/* <div className="p-6 bg-white rounded-lg flex flex-col justify-between items-center h-full shadow w-[30%]">
                        <p className="uppercase text-black oxanium tracking-widest font-bold mb-4 center">Free to play</p>
                        <h3 className="lato text-[5rem] font-bold text-center text-primary">Zero</h3>

                        <div className="">
                            <div className="items-start flex gap-3">
                                <AiOutlineCheckSquare color="#460b3e" />
                                <p className="text-[.9rem] text-primary">Play the game online</p>
                            </div>
                            <div className="items-start flex gap-3">
                                <AiOutlineCheckSquare color="#460b3e" />
                                <p className="text-[.9rem] text-primary">Watch and earn</p>
                            </div>
                            <div className="items-start flex gap-3">
                                <AiOutlineCheckSquare color="#460b3e" />
                                <p className="text-[.9rem] text-primary">Participate in tournaments</p>
                            </div>
                        </div>


                        <Link to={NFT_PAGE} className="w-full">
                            <button className="py-3 oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm hover:scale-95 transition duration-300">
                                Owned
                            </button>
                        </Link>
                    </div> */}


                    {/* Purchase Subscription */}
                    <div className="p-6 bg-white rounded-lg flex flex-col justify-between items-center h-full shadow w-[30%]">
                        {/* <p className="uppercase text-black oxanium tracking-widest font-bold mb-4 center">Monthly subscription</p>
                        <h3 className="lato text-[3rem] font-bold leading-[50px] text-center text-primary">Monthly subscription</h3>

                        <div className="">
                            <div className="items-start flex gap-3">
                                <AiOutlineCheckSquare color="#460b3e" />
                                <p className="text-[.9rem] text-primary">Play the full game</p>
                            </div>
                            <div className="items-start flex gap-3">
                                <AiOutlineCheckSquare color="#460b3e" />
                                <p className="text-[.9rem] text-primary">Watch and earn</p>
                            </div>
                            <div className="items-start flex gap-3">
                                <AiOutlineCheckSquare color="#460b3e" />
                                <p className="text-[.9rem] text-primary">Play and earn</p>
                            </div>                            
                        </div>


                        <Link to={NFT_PAGE} className="w-full">
                            <button className="py-3 oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm hover:scale-95 transition duration-300">
                                Get DUN Tokens
                            </button>
                        </Link> */}
                    </div>
                    {/* Purchase Subscription */}
                    {isSuscribed ? <div className="p-6 bg-white rounded-lg flex flex-col justify-between items-center h-full shadow w-[30%]">
                        <p className="uppercase text-black oxanium tracking-widest font-bold mb-4 center">Subscription Expiry Time</p>

                        {/* <h3 className="lato text-[3rem] font-bold leading-[50px] text-center text-primary">{daysLeft} Days left</h3> */}
                        <h3 className="lato text-[3rem] font-bold leading-[50px] text-center text-primary">Suscription Bought, Enjoy!</h3>

                        <div className="flex flex-col gap-2">
                            <div className="items-start flex gap-3">
                                <AiOutlineCheckSquare color="#460b3e" />
                                <p className="text-[.9rem] text-primary">10$ in DUN tokens</p>
                            </div>

                        </div>


                        <button className="py-3 oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm  duration-300">
                            Play
                        </button>

                    </div> : <div className="p-6 bg-white rounded-lg flex flex-col justify-between items-center h-full shadow w-[30%]">
                        <p className="uppercase text-black oxanium tracking-widest font-bold mb-4 center">subscription</p>
                        <h3 className="lato text-[3rem] font-bold leading-[50px] text-center text-primary">Get your Subscription</h3>

                        <div className="flex flex-col gap-2">
                            <div className="items-start flex gap-3">
                                <AiOutlineCheckSquare color="#460b3e" />
                                <p className="text-[.9rem] text-primary">10$ in DUN tokens</p>
                            </div>
                            <div className="items-start flex gap-3">
                                {/* <Link to={NFT_PAGE} className="w-full">
                                    <button className="p-3 font-bold oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm hover:scale-95 transition duration-300">
                                        Get DUN Tokens
                                    </button>
                                </Link> */}
                            </div>

                        </div>


                        <Link to={NFT_PAGE} className="w-full">
                            <button className="py-3 oxanium tracking-widest w-full bg-primary text-white rounded-md text-sm hover:scale-95 transition duration-300">
                                Buy 1 month subscription
                            </button>
                        </Link>

                    </div>}
                </div>

            </div>
        </div>
    );
}

export default Subscription;
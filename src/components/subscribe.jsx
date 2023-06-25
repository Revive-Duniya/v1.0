import React from 'react';
import sendArrow from '../assets/images/Arrow.png'

const Subscribe = () => {
    return (
        <div className="my-28 center text-white flex-col">
            <h2 className="text-[3rem] oxanium">SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p className='gradient lato'>Get first-hand information on the next NFT drop</p>
            <div className="border border-yellow center rounded-md h-[3.5rem] p-[5px] mt-10 w-[500px]">
                <input type="email" name="email" id="email" placeholder="info@gmail.com" className="w-[90%] bg-primary outline-none border-none pl-6 text-[#A48EA9] oxanium text-sm center"/>
                <button className="bg-secondary h-full w-[10%] center rounded">
                    <img src={sendArrow} alt="send" width={30} />
                </button>
            </div>
        </div>
    );
}
 
export default Subscribe;
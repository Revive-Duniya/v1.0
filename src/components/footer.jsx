import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className='bg-[#380932] w-full text-white'>
      <div className="w-11/12 lg:w-10/12 mx-auto pt-20 pb-20" id="contact">
        <div className="flex sm:flex-col lg:flex-row gap-10">
          <div className="lg:mb-0 w-full lg:w-[50%] space-y-8">
            <div className="flex gap-3">
              <div>
                <img src={Logo} alt="logo" className="h-10" />
              </div>
              <h3 className="text-xl font-bold oxanium">Revive Duniya</h3>
            </div>

            <p className="text-[#999999] text-sm w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur laudantium modi debitis vero esse placeat commodi reprehenderit animi. Esse.
            </p>
            <a href="mailto:support@help.com" className="text-gray-600 hover:text-[#4CAF50] text-sm mt-10">support@help.com</a>
          </div>

          <div className="mb-14 lg:mb-0 w-full lg:w-[50%]">
            <div className="flex md:flex-row sm:flex-col gap-5">
              <div className="w-1/2 space-y-8">
                <h4 className="font-semibold oxanium">COMPANY</h4>

                <ul className="leading-8 text-sm lg:text-normal lato">
                  <li className="text-gray-600">
                    <a href="#!" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-[#ff55e8]">
                      About
                    </a>
                  </li>
                  <li className="text-gray-600 ">
                    <a href="#!" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-[#ff55e8]">
                      Features
                    </a>
                  </li>
                  <li className="text-gray-600">
                    <a href="#!" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-[#ff55e8]">
                      Work
                    </a>
                  </li>
                  <li className="text-gray-600">
                    <a href="#!" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-[#ff55e8]">
                      Career
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-1/2 space-y-8">
                <h4 className="font-semibold oxanium">HELP</h4>

                <ul className="leading-8 text-sm lg:text-normal lato">
                  <li className="text-gray-600">
                    <a href="#faq" className="transition-colors duration-300 hover:text-[#ff55e8]">
                      Customer Support
                    </a>
                  </li>
                  <li className="text-gray-600 ">
                    <a href="!#" className="transition-colors duration-300 hover:text-[#ff55e8]">
                      Delivery Details
                    </a>
                  </li>
                  <li className="text-gray-600">
                    <a href="!#" className="transition-colors duration-300 hover:text-[#ff55e8]">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="text-gray-600">
                    <a href="!#" className="transition-colors duration-300 hover:text-[#ff55e8]">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-2 oxanium">
        <p className="text-sm">&copy; {new Date().getFullYear()} Revive Duniya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

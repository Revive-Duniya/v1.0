import React from "react";
import errorImage from "../assets/icons/3793096.jpg";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen oxanium">
      <img src={errorImage} alt="Error" className="w-64 mb-8" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="bg-primary text-white py-4 px-6 rounded-md text-sm hover:bg-primary-dark transition-colors duration-300"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFoundPage;

import React from "react";

const Footer = () => {
  return (
    <div className="h-4/6 w-full bg-black">
      <div className="flex justify-center">
        <div className="flex flex-col w-80 sm:w-3/5 mt-52">
          <div className="text-gray-400 text-2xl font-medium"> Result</div>
          <div className="text-gray-100" />
        </div>
      </div>
      <div className="text-gray-100 px-5 py-1 flex justify-end h-1/12 absolute bottom-0 w-full">
        Github
      </div>
    </div>
  );
};

export default Footer;

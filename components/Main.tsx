import React from "react";
import Tabulations from "./Tabulations";

const Main = () => {
  return (
    <div className="bg-black px-3 text-gray-200 border-4 border-gray-800 shadow-lg rounded-2xl w-80 sm:w-3/5 h-96 absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Tabulations />
    </div>
  );
};

export default Main;

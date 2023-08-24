import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-20 bg-darkcolor">
      <div className="flex md:flex-row flex-xol flex-wrap justify-center items-center h-screen sm:px-6 lg:px-8">
        <div className="w-full sm:w-80 bg-darkcolor rounded-md shadow-xl m-3">
          <div className="h-44 bg-gray-800 rounded-t-md animate-pulse"></div>
          <div className="p-5">
            <div className="h-6 rounded-sm bg-gray-700 duration-75 animate-pulse mb-4"></div>
            <div className="animate-pulse">
              <div className="h-1 mt-2 w-1/2 rounded-sm bg-gray-800"></div>
              <div className="h-1 mt-2 w-1/3 rounded-sm bg-gray-800"></div>
              <div className="h-1 mt-2 w-2/3 rounded-sm bg-gray-800"></div>
              <div className="h-1 mt-2 rounded-sm bg-gray-800"></div>
              <div className="h-1 mt-2 rounded-sm bg-gray-800"></div>
              <div className="h-1 mt-2 rounded-sm bg-gray-800"></div>
              <div className="h-2 rounded-sm bg-gray-800"></div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex w-screen md:w-full sm:w-96 bg-darkcolor rounded-md shadow-xl">
            <div className="w-1/3 bg-gray-800 rounded-l-md animate-pulse"></div>
            <div className="p-5 w-3/4">
              <div className="h-6 rounded-sm bg-gray-700 duration-75 animate-pulse mb-4"></div>
              <div className="animate-pulse">
                <div className="h-1 mt-2 w-1/3 rounded-sm bg-gray-800"></div>
                <div className="h-1 mt-2 w-2/3 rounded-sm bg-gray-800"></div>
                <div className="h-1 mt-2 rounded-sm bg-gray-800"></div>
                <div className="h-1 mt-2 rounded-sm bg-gray-800"></div>
                <div className="h-1 mt-2 rounded-sm bg-gray-800"></div>
                <div className="h-2 rounded-sm bg-gray-800"></div>
              </div>
            </div>
          </div>
          <div className="flex w-screen md:w-full sm:w-96 bg-darkcolor rounded-md shadow-xl">
            <div className="w-1/3 bg-gray-800 rounded-l-md animate-pulse"></div>
            <div className="p-5 w-3/4">
              <div className="h-6 rounded-sm bg-gray-700 duration-75 animate-pulse mb-4"></div>
              <div className="animate-pulse">
                <div className="h-1 mt-2 w-1/3 rounded-sm bg-gray-800"></div>
                <div className="h-1 mt-2 w-2/3 rounded-sm bg-gray-800"></div>
                <div className="h-1 mt-2 rounded-sm bg-gray-800"></div>
                <div className="h-1 mt-2 rounded-sm bg-gray-800"></div>
                <div className="h-1 mt-2 rounded-sm bg-gray-800"></div>
                <div className="h-2 rounded-sm bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

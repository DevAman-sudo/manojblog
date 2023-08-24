"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

const page = () => {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  return (
    <div >
         {isLoading && <Loading />}
      <div className="w-[95%] h-screen mx-auto bg-darkcolor p-2 flex flex-col md:flex-row items-center justify-center mt-28">
        <div className="flex-1 flex items-center justify-center">
          <Image src="/cover.webp" height={200} width={200} />
        </div>
        <div className="flex-1">
          <h2 className="bold tracking-widest text-2xl text-white">About Me</h2>
          <h1 className="bold tracking-widest text-3xl text-white">
            I am a Something
          </h1>
          <p className="text-white tracking-wider m-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

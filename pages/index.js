"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Qualification from '../components/Qualification'
import Gallery from '../components/Gallery'
import Blog from '../components/Blog'
import Loading from '../components/Loading'


const page = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  return (
    <>
     {isLoading && <Loading />}
      {/* landing page  */}
      <div className="relative w-screen h-screen flex justify-center items-center bg-darkcolor mt-16">
        <div className="absolute top-5 left-5 md:top-10 md:left-10 text-white tracking-widest">
          <p className="text-bluet">Hello i'm</p>
          <h1 className="text-4xl md:text-5xl">
            M<span className="text-redt">a</span>noj B
            <span className="text-redt">a</span>jg
            <span className="text-redt">a</span>in
          </h1>
        </div>
        <div className="mx-auto my-auto">
          <img
            className="object-cover w-auto h-[20rem] p-2"
            src="./man.png"
            alt="my pic"
          />
        </div>
        <p className="absolute right-5 bottom-60 md:text-lg md:tracking-widest md:bottom-50 md:right-60 text-pinkt tracking-wider font-100 text-sm border-pinkt border p-2">
          something <br /> something{" "}
        </p>
        <p className="absolute left-5 bottom-40 md:text-lg md:tracking-widest md:bottom-40 md:left-60 text-bluet tracking-wider font-100 text-sm border-bluet border p-2">
          something <br /> something{" "}
        </p>
      </div>

      {/* about me  */}
      <div className="w-[95%] h-auto mx-auto bg-darkcolor p-2 flex flex-col md:flex-row items-center justify-center ">
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

      {/* sepration line  */}
      <Qualification />

      {/* gallery section  */}
      <div className="container px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">My Portfolio</h1>
        <Gallery />
      </div>

      {/* blog post  */}
      <div>
        <h1 className="text-3xl text-white font-bold text-center my-8">My Blog</h1>
        <Blog />
      </div>

    </>
  );
};

export default page;

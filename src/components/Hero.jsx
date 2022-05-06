import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          ENHANCING CSS MADE SIMPLE
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Growing My CSS Skills With Tailwind
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl py-4 font-bold">
            Tailwind CSS:
          </p>
          <Typed
            className=" text-[#00df9a] md:pl-4 pl-3 md:text-5xl sm:text-4xl text-xl font-bold"
            strings={["Easy", "Mobile Friendly", "Customizable"]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Lorem ipsumtium vero velit pariatur mollitia quia explicabo dolor
          atque illum itaque!
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;

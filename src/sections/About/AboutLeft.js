import React from "react";

const AboutLeft = () => {
  return (
    <div className="flex justify-center py-12 my-10  p- md:p-12 text-left">
      <div className="w-[70%] h-[80%]">
        <h1 className="md:text-3xl text-4xl text-[#204289] font-clash-semi font-semibold mb-4 text-left  pb-2">
          ABOUT
        </h1>
        <p className="text-gray-700 text-left text-sm md:my-10 font-satoshi-regular">
          Welcome to Make-a-ton 7.0: South India&apos;s Biggest Hackathon!
          The most exciting hackathon of the year is back with a bang! With a staggering exciting prize pool, cutting-edge gadgets, and coveted internship opportunities up for grabs, we&apos;re to make history. Organized by CITTIC, Make-a-ton is a 24-hour coding marathon that fuels innovation. Get ready for intense coding sessions, groundbreaking solutions, and yes – plenty of coffee!
          Join us and leave your mark on the tech world!
        </p>
      </div>
      <h1 className="hidden md:block absolute mt-5 w-auto left-[10%] right-[10%]  text-2xl top-[103px] font-bold mb-4 text-center border-b-[3px] border-dashed border-[#204289] pb-4"></h1>{" "}
    </div>
  );
};

export default AboutLeft;

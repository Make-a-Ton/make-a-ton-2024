import React, { Fragment } from "react";
import Image from "next/image";
import logo from "../../../public/assets/citticlogo.svg";

const AboutRight = () => {
  return (
    <div className="flex items-center justify-center my-8  pt-10  p-4 md:p-12 text-left">
      <div className="w-[70%] h-[80%]">
        <div className="flex justify-left mb-4 pb-3">
          <Image src={logo} alt="Logo" width={180} height={180} />
        </div>
        <p className="text-gray-700 text-left text-sm md:my-10 font-satoshi-regular ">
          The Centre for Innovation, Technology Transfer and Industrial
          Collaboration (CITTIC), the technology business incubator of Cusat,
          has nurtured several young startups and has supported the growth of
          technology in the student community. CITTIC was set up on the campus
          with central and state government funding to provide a vibrant,
          innovative and entrepreneurial environment for faculty and students to
          run university-linked startup companies.
        </p>
      </div>
      <div className="hidden md:block">
        <div className="absolute bottom-0 right-0 h-8 w-8 bg-[#EAAF20]"></div>
        <div className="absolute bottom-0 right-8 h-8 w-8 bg-[#204289]"></div>
        <div className="absolute bottom-0 right-24 h-8 w-8 bg-[#EAAF20]"></div>
        <div className="absolute bottom-0 right-32 h-8 w-8 bg-[#204289]"></div>
        <div className="absolute bottom-8 right-0 h-8 w-8 bg-[#204289]"></div>
        <div className="absolute bottom-8 right-16 h-8 w-8 bg-[#EAAF20]"></div>
        <div className="absolute bottom-8 right-24 h-8 w-8 bg-[#204289]"></div>
        <div className="absolute bottom-8 right-40 h-8 w-8 bg-[#EAAF20]"></div>
        <div className="absolute bottom-16 right-8 h-8 w-8 bg-[#204289]"></div>
      </div>
      <h1
        className="hidden md:block absolute mt-5 w-auto top-[103px] right-[8%] text-2xl font-bold mb-4 text-center border-b-2 border-dashed border-[#204289] pb-2"
      ></h1>{" "}
    </div>
  );
};

export default AboutRight;
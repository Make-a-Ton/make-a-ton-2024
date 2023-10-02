import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/citticlogo.svg";

const AboutRight = () => {
  return (
    <div className="flex items-center justify-center p-12 text-left">
      <div className="w-[70%] h-[80%]">
        <div className="flex justify-left mb-4 pb-3">
          <Image src={logo} alt="Logo" width={120} height={120} />
        </div>
        <p className="text-gray-700 text-left text-sm my-10 ">
          The Centre for Innovation, Technology Transfer and Industrial
          Collaboration (CITTIC), the technology business incubator of Cusat,
          has nurtured several young startups and has supported the growth of
          technology in the student community. CITTIC was set up on the campus
          with central and state government funding to provide a vibrant,
          innovative and entrepreneurial environment for faculty and students to
          run university-linked startup companies.
        </p>
      </div>
      <h1 className="absolute mt-5 left-1/2  w-[40%] top-[73px] text-2xl font-bold mb-4 text-left border-b-2 border-dashed border-blue-500 pb-2"></h1>
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
  );
};

export default AboutRight;
import React from "react";

const AboutLeft = () => {
  return (
    <div className="flex justify-center py-12 my-8  p- md:p-12 text-left">
      <div className="w-[70%] h-[80%]">
        <h1 className="md:text-2xl text-4xl text-[#204289] font-clash-bold font-semibold mb-4 text-left  pb-2">
          ABOUT
        </h1>
        <p className="text-gray-700 text-left text-sm md:my-10 font-satoshi-regular">
          Make-a-Ton, presented by CITTIC, invites innovative solutions to
          tackle issues faced by the world today. This 24 hour open hackathon
          provides a platform for university students to pitch their ideas in
          front of an eminent panel of judges. Projects and ideas can be
          presented even if they lack a full fledged business plan, as
          Make-a-Ton focusses on bringing out passionate innovators. Solutions
          can be provided to problems that fall under four different categories.
          Grand prizes await the winners!
        </p>
      </div>
      <h1 className="hidden md:block absolute mt-5 w-auto left-[10%] right-[10%]  text-2xl top-[103px] font-bold mb-4 text-center border-b-[3px] border-dashed border-[#204289] pb-2"></h1>{" "}
    </div>
  );
};

export default AboutLeft;

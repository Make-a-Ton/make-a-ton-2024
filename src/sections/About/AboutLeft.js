import React from 'react';

const AboutLeft = () => {
  return (
    <div className="relative bg-[#EAAF20] p-12">
      <div className="w-[70%] h-[80%]">
        <h1 className="text-2xl text-[#204289] font-semibold mb-4 text-left  pb-2">
          ABOUT
        </h1>
        <p className="text-gray-700 text-left text-sm mt-10">
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
      <h1 className="absolute mt-5 w-[93%] top-[73px]  text-2xl font-bold mb-4 text-center border-b-2 border-dashed border-blue-500 pb-2"></h1>
    </div>
  );
};

export default AboutLeft;
import React from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const About = () => {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="flex-1 bg-[#EAAF20]">
          <AboutLeft />
        </div>

        <div className="flex-1 bg-[#F6F5F5]">
          <AboutRight />
        </div>
      </div>
      
    </div>
  );
};

export default About;
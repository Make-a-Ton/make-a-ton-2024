import React, { Fragment } from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const About = () => {
  return (
    <Fragment>
      <div className="relative">
        <div className="flex md:flex-row flex-col justify-center">
          <div className="flex-1 bg-[#EAAF20]">
            <AboutLeft />
          </div>

          <div className="flex-1 bg-[#F6F5F5]">
            <AboutRight />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

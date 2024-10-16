import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const PrizeText = ({ text, color, strokeColor, fontSize }) => (
  <p
    style={{
      WebkitTextStroke: `2px ${strokeColor}`,
    }}
    className={`text-${color} font-bold ${fontSize} p-3`}
  >
    {text}
  </p>
);

const PrizeTextRow = ({ text, color, strokeColor, fontSize, count }) => (
  <div className="flex overflow-hidden">
    {[...Array(count)].map((_, i) => (
      <PrizeText
        key={i}
        text={text}
        color={color}
        strokeColor={strokeColor}
        fontSize={fontSize}
      />
    ))}
  </div>
);

const WhiteBoxes = ({ count, size }) => (
  <div className="flex flex-wrap w-full">
    {[...Array(count)].map((_, i) => (
      <Fragment key={i}>
        <div className={`w-${size} h-${size} bg-white`} />
        <div className={`w-${size} h-${size} bg-customBlue ml-${size}`} />
      </Fragment>
    ))}
  </div>
);

const PrizeAmount = ({
  amount,
  label,
  bgColor,
  textColor,
  fontSize,
  labelSize,
}) => (
  <div className={`flex flex-col items-center h-36`}>
    <p className={`font-clash-bold ${fontSize} mb-5`}>{amount}</p>
    <p
      className={`font-clash-semi text-${textColor} ${labelSize} bg-${bgColor} p-2 py-5 w-full text-center`}
    >
      {label}
    </p>
  </div>
);

const Prizes = () => {
  const hrElements = [];

  const whiteBoxes = [];
  const whiteBoxesSmall = [];

  for (let i = 0; i < 50; i++) {
    hrElements.push(
      <hr key={i} className="w-2 h-[2px] bg-white mx-2" /> // Add mx-2 for horizontal spacing
    );
  }
  for (let i = 0; i < 6; i++) {
    whiteBoxes.push(
      <div className="flex flex-col ">
        <div key={i} className="w-8 h-7 bg-white " />
        <div key={i} className="w-8 h-7 bg-white ml-8" />
        <div key={i} className="w-8 h-7 bg-white " />
        <div key={i} className="w-8 h-7 bg-white ml-8" />
      </div>
    );
  }
  for (let i = 0; i < 2; i++) {
    whiteBoxesSmall.push(
      <div className="flex flex-col ">
        <div key={i} className="w-6 h-5 bg-white " />
        <div key={i} className="w-6 h-5 bg-white ml-6" />
        <div key={i} className="w-6 h-5 bg-white " />
        <div key={i} className="w-6 h-5 bg-white ml-6" />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="bg-customBlue text-white overflow-x-hidden  pt-0 over">
        <div className="absolute  w-1/2 md:h-full h-2/3 bg-white right-0"></div>
        <div className="hidden md:flex items-center z-20 relative">
          <div className="w-full bg-[#F6F5F5] h-max flex items-center">
            <PrizeTextRow
              text="PRIZES"
              color="white"
              strokeColor="#204289"
              fontSize="text-3xl"
              count={4}
            />
          </div>
          <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <PrizeTextRow
              text="PRIZES"
              color="[#EAAF20]"
              strokeColor="#204289"
              fontSize="text-3xl"
              count={4}
            />
          </div>
          <div className="w-full bg-[#F6F5F5] h-max hidden md:flex items-center z-10">
            <PrizeTextRow
              text="PRIZES"
              color="white"
              strokeColor="#204289"
              fontSize="text-3xl"
              count={4}
            />
          </div>
        </div>
        <div className="md:hidden flex items-center z-20 relative">
          <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <PrizeTextRow
              text="PRIZES"
              color="[#EAAF20]"
              strokeColor="#204289"
              fontSize="text-xl"
              count={4}
            />
          </div>
        </div>
        <div className="pt-36 bg-customBlue">
          <div className="w-full relative h-full flex justify-between items-end ">
            <div className="flex flex-col w-1/3">
              <p
                className="font-press-start text-white md:text-6xl text-3xl shadow-customYellow z-0 text-center"
                style={{
                  textShadow:
                    "2px 2px 0 #EAAF20, -2px -2px 0 #EAAF20, 2px -2px 0 #EAAF20, -2px 2px 0 #EAAF20",
                }}
              >
                20K
              </p>{" "}
              <div className=" bg-[#F6F5F5] h-64 flex items-center justify-center ">
                <p className="font-press-start text-customYellow md:text-3xl text-2xl md:rotate-0 -rotate-90 whitespace-nowrap md:whitespace-normal">
                  RUNNER UP
                </p>
              </div>
            </div>
            <div className="flex flex-col w-1/3">
              <p
                className="z-10 font-press-start md:text-7xl text-customYellow text-center text-5xl"
                style={{
                  textShadow:
                    "2px 2px 0 white, -2px -2px 0 white, 6px 2px 0 #204289 , -2px 2px 0 white",
                }}
              >
                40
                <span
                  className="px-2"
                  style={{
                    textShadow:
                      "2px 2px 0 #204289, -2px -2px 0 #204289, 2px -2px 0 #204289, -2px 2px 0 #204289",
                  }}
                >
                  K
                </span>
              </p>
              <div className=" bg-customYellow h-96 flex items-center justify-center">
                <p className="font-press-start text-white md:text-4xl  text-2xl md:text-center md:leading-snug   md:rotate-0 -rotate-90 whitespace-nowrap md:whitespace-normal">
                  BEST PRODUCT
                </p>
              </div>
            </div>
            <div className="flex flex-col w-1/3 bg-white  ">
              <p
                className="z-10 font-press-start md:text-5xl text-4xl text-white text-center"
                style={{
                  textShadow:
                    "2px 2px 0 #204289, -2px -2px 0 #204289, 2px -2px 0 #204289, -2px 2px 0 #204289",
                }}
              >
                15K
              </p>
              <div className=" bg-customBlue flex items-center justify-center h-52 ">
                <p className="font-press-start text-white md:text-3xl text-2xl  whitespace-wrap md:whitespace-normal  md:rotate-0 -rotate-90">
                  Hack For CUSAT
                </p>
                {/* <span className="tooltiptext font-press-start bg-customBlue py-5 md:text-2xl text-sm ml-1 whitespace-normal">
                  Announcing Soon
                </span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center z-20 relative">
          <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <PrizeTextRow
              text="PRIZES"
              color="[#EAAF20]"
              strokeColor="#204289"
              fontSize="text-xl"
              count={4}
            />
          </div>
        </div>
        <div className="hidden md:flex items-center z-20 relative">
          <div className="w-1/3 bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <PrizeTextRow
              text="PRIZES"
              color="[#EAAF20]"
              strokeColor="#204289"
              fontSize="text-2xl"
              count={4}
            />
          </div>
          <div className="w-1/3 bg-white h-max flex items-center justify-center space-x-6">
            <PrizeTextRow
              text="PRIZES"
              color="white"
              strokeColor="#204289"
              fontSize="text-2xl"
              count={4}
            />
          </div>
          <div className="w-1/3 bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <PrizeTextRow
              text="PRIZES"
              color="[#EAAF20]"
              strokeColor="#204289"
              fontSize="text-2xl"
              count={4}
            />
          </div>
        </div>
        {/* <div className="space-y-32 z-20 relative bg-customBlue">
          <div className="w-full flex justify-between items-center py-24">
            <div className=" hidden md:flex">{whiteBoxes}</div>
            <div className="flex  md:hidden">{whiteBoxesSmall}</div>
            <h1 className="block font-clash-semi text-xl w-auto  md:text-4xl leading-10 pt-0 text-center px-5 md:whitespace-normal">
              Track Prizes Coming Soon
            </h1>
            <div className=" hidden md:flex">{whiteBoxes}</div>
            <div className="flex  md:hidden">{whiteBoxesSmall}</div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="w-full bg-[#F6F5F5] h-max flex items-center">
              <PrizeTextRow
                text="PRIZES"
                color="white"
                strokeColor="#204289"
                fontSize="text-3xl"
                count={4}
              />
            </div>
            <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
              <PrizeTextRow
                text="PRIZES"
                color="[#EAAF20]"
                strokeColor="#204289"
                fontSize="text-3xl"
                count={4}
              />
            </div>
            <div className="w-full bg-[#F6F5F5] h-max hidden md:flex items-center">
              <PrizeTextRow
                text="PRIZES"
                color="white"
                strokeColor="#204289"
                fontSize="text-3xl"
                count={4}
              />
            </div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Prizes;

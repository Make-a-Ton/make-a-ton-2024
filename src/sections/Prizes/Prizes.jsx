import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const Prizes = () => {
  const hrElements = [];
  const whiteBoxes = [];
  const whiteBoxesSmall = [];
  const PRIZES = [];
  const PRIZES2 = [];
  const PRIZESSmall = [];
  const PRIZES2Small = [];

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
  for (let i = 0; i < 4; i++) {
    PRIZES.push(
      <p
        style={{
          WebkitTextStroke: "2px #204289", // Note the camelCase property name
        }}
        className="text-white font-bold text-3xl p-3"
      >
        PRIZES
      </p>
    );
  }
  for (let i = 0; i < 4; i++) {
    PRIZES2.push(
      <p
        style={{
          WebkitTextStroke: "2px #204289", // Note the camelCase property name
        }}
        className="text-[#EAAF20] font-bold text-3xl p-3"
      >
        PRIZES
      </p>
    );
  }
  for (let i = 0; i < 4; i++) {
    PRIZESSmall.push(
      <p
        style={{
          WebkitTextStroke: "2px #204289", // Note the camelCase property name
        }}
        className="text-white font-bold text-xl p-3"
      >
        PRIZES
      </p>
    );
  }
  for (let i = 0; i < 4; i++) {
    PRIZES2Small.push(
      <p
        style={{
          WebkitTextStroke: "2px #204289", // Note the camelCase property name
        }}
        className="text-[#EAAF20] font-bold text-xl p-3"
      >
        PRIZES
      </p>
    );
  }

  return (
    <Fragment>
      <div className="bg-[#204289] text-white  overflow-x-hidden space-y-32 pt-0">
        {/* <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-around">
                  
                </div> */}
        {/* <div className="hidden md:flex items-center">
          <div className="w-full bg-[#F6F5F5] h-max flex items-center ">
            <div className="flex">{PRIZES}</div>
          </div>
          <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <div className="flex">{PRIZES2}</div>
          </div>
          <div className="w-full bg-[#F6F5F5] h-max flex items-center ">
            <div className="flex">{PRIZES}</div>
          </div>
        </div> */}
        
         <div className="hidden md:flex items-center">
          <div className="w-full bg-[#F6F5F5] h-max flex items-center ">
            <div className="flex">{PRIZES}</div>
          </div>
          <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <div className="flex">{PRIZES2}</div>
          </div>
          <div className="w-full bg-[#F6F5F5] h-max flex items-center ">
            <div className="flex">{PRIZES}</div>
          </div>
        </div>
        {/* <div className="flex md:hidden items-center">
          <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <div className="flex">{PRIZES2Small}</div>
          </div>
        </div> */}

        {/* <div className="w-full flex justify-center md:hidden">
          --------------------------------------------------
        </div> */}

        <div className="w-full flex justify-between items-center">
          <div className="flex hidden md:flex">{whiteBoxes}</div>
          <div className="flex  md:hidden">{whiteBoxesSmall}</div>
          {/* <div className="flex flex-col items-center justify-center text-black space-y-3">
                        <div className="bg-white w-full px-6 md:px-20 py-1 mx-2 md:py-2">
                            <p className="md:text-xl text-[#2E57AC] font-semibold text-center">
                                Software <br/> Track
                            </p>
                        </div>
                        <div className="bg-white w-full md:px-20 py-1 mx-2 md:py-2">
                            <p className="md:text-xl px-6 text-[#2E57AC] font-semibold text-center">
                                Hardware <br/> Track
                            </p>
                        </div>
                    </div> */}

          <h1 className="block font-clash-semi text-xl md:text-4xl leading-10 pt-0">
            Coming Soon
          </h1>

          <div className="flex hidden md:flex">{whiteBoxes}</div>
          <div className="flex  md:hidden">{whiteBoxesSmall}</div>
        </div>
        <div className="hidden md:flex items-center">
          <div className="w-full bg-[#F6F5F5] h-max flex items-center ">
            <div className="flex">{PRIZES}</div>
          </div>
          <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <div className="flex">{PRIZES2}</div>
          </div>
          <div className="w-full bg-[#F6F5F5] h-max flex items-center ">
            <div className="flex">{PRIZES}</div>
          </div>
        </div>
        <div className="flex md:hidden items-center">
          <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
            <div className="flex">{PRIZES2Small}</div>
          </div>
        </div>
        {/* <div className="w-full py-20 hidden md:flex justify-around items-center text-white">
                    <p className="font-black text-6xl">
                        ₹20K
                    </p>
                    <p className="font-black text-7xl">
                        ₹30K
                    </p>
                    <p className="font-black text-5xl">
                        ₹10K
                    </p>
                </div> */}
        {/* <div className="w-full flex flex-col md:hidden justify-center w-full items-center text-white space-y-16">
                    <div className=" flex flex-col h-24 flex items-center  ">
                        <p className="font-black text-6xl mb-5">
                            ₹30K
                        </p>
                        <p className="font-semibold text-white text-4xl bg-[#2E57AC] p-2 py-5 w-full text-center">
                            BEST PRODUCT
                        </p>
                    </div>
                    <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
                        <div className="flex">
                            {PRIZES2Small}
                        </div>
                    </div>
                    <div className="h-16 flex flex-col items-center ">
                        <p className="font-black text-5xl mb-5">
                            ₹20K
                        </p>
                        <p className="font-semibold text-center text-[#2E57AC] text-4xl bg-[#F6F5F5] p-3 px-8 w-full">
                            RUNNER UP
                        </p>
                    </div>
                    <div className="flex md:hidden items-center justify-center w-full">
                        <div className="w-full bg-[#F6F5F5] h-max flex items-center justify-center">
                            <div className="flex">
                                {PRIZESSmall}
                            </div>
                        </div>
                    </div>
                    <div className="h-20 flex flex-col items-center ">
                        <p className="font-black text-4xl mb-5">
                            ₹10K
                        </p>
                        <p className="font-semibold text-center text-[#2E57AC] text-4xl bg-[#EAAF20] p-3 px-20  w-full">
                            UI/UX
                        </p>
                    </div>
                </div> */}
        {/* <div>
                    <div className="w-full hidden md:flex justify-between items-end text-white">
                        <div className="w-1/3 bg-[#F6F5F5] h-28 flex items-center justify-center">
                            <p className="font-black text-[#2E57AC] text-4xl">
                                RUNNER UP
                            </p>
                        </div>
                        <div className="w-1/3 bg-[#2E57AC] h-44 flex items-center justify-center">
                            <p className="font-black text-white text-4xl">
                                BEST PRODUCT
                            </p>
                        </div>
                        <div className="w-1/3 bg-[#EAAF20] h-20 flex items-center justify-center">
                            <p className="font-black text-[#2E57AC] text-4xl">
                                UI/UX
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        <div className="w-full bg-[#F6F5F5] h-max flex items-center ">
                            <div className="flex">
                                {PRIZES}
                            </div>
                        </div>
                        <div className="w-full bg-[#EAAF20] h-max flex items-center justify-center space-x-6">
                            <div className="flex">
                                {PRIZES2}
                            </div>
                        </div>
                        <div className="w-full bg-[#F6F5F5] h-max hidden md:flex items-center ">
                            <div className="flex">
                                {PRIZES}
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden items-center justify-center w-full">
                        <div className="w-full bg-[#F6F5F5] h-max flex items-center justify-center">
                            <div className="flex">
                                {PRIZESSmall}
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
      <div className="flex justify-around items-center mt-24 px-3">
        <Link href={"https://t.me/makeaton7"} target={"_blank"}>
          <Image
            src={"/assets/tele.png"}
            alt={"telegram"}
            width={900}
            height={200}
          ></Image>
        </Link>
      </div>
    </Fragment>
  );
};
export default Prizes;

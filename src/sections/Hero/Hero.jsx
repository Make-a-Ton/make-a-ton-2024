import Image from "next/image";
import Link from "next/link";
import Countdown from "@/sections/Hero/Countdown";

const Hero = () => {
    return (
      <>
        <div className="star-container bg-[#204289]  pt-5 pb-5 pb-lg-0">
          <div className="line" />
          <div className="line hidden lg:block" />
          <div className="line hidden lg:block" />
          <div className="line" />
          <div className="line " />

          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />

          <div className="flex flex-col text-white font-satoshi-regular items-center justify-center mt-10 mb-20 md:mb-0">
            {/* <Image
              src={"/assets/logo.svg"}
              alt={"logo"}
              width={200}
              height={200}
            /> */}
            <h1 className="block font-clash-bold text-4xl md:text-6xl leading-10 pt-10 mt-20 lg:mt-52">
              Make-A-Ton<sup className="font-satoshi-regular">7.0</sup>
            </h1>
            {/* <div className="lg:flex mb-5">
              <span className="">powered by </span>
              <Link href={"https://clusterdev.com/"} target={"_blank"}>
                <Image
                  src={"/assets/clusterdev-logo2.png"}
                  alt={"clusterdev"}
                  width={200}
                  height={50}
                />
              </Link>
            </div> */}
            <p className="text-center my-5 lg:mt-6 px-2 text-base lg:text-lg">
              A 24 HOUR HACKATHON TO EMBRACE THE SPIRIT OF INNOVATION
            </p>
            {/* <p className="text-center my-5 lg:my-1 px-2 font-satoshi-bold">
              Registration closed
            </p> */}
            <div className="flex justify-center items-center">
              <Link
                href="https://makeaton.devpost.com/project-gallery"
                target={"_blank"}
                className=" mt-3  mx-2  font-satoshi-bold rounded-[15px] px-5 py-3 border-2 border-gray-500"
              >
                Sponsor Us
              </Link>
              <Link
                href="https://2023.makeaton.in"
                target={"_blank"}
                className=" mt-3  mx-2  font-satoshi-bold rounded-[15px] px-5 py-3 border-2 border-gray-500"
              >
                Last Edition
              </Link>
            </div>

            <p className="mt-10 text-base">19th - 20th October, 2024</p>
            <div className="flex flex-row mt-5 justify-center items-center">
              <Image
                src={"/assets/location.svg"}
                alt={"location"}
                width={20}
                height={20}
              />
              <p className="mx-3 hidden lg:block">
                Cochin University of Science and Technology
              </p>
              <p className="mx-3 block lg:hidden">CUSAT</p>
            </div>
          </div>
          <div className={"flex justify-around"}>
            <Image
              className="hidden md:block"
              src={"/assets/makeaton_logo.png"}
              alt={"logo"}
              width={200}
              height={200}
            />
            {/*<Countdown />*/}
            <Image
              className="hidden md:block"
              src={"/assets/hero_effect.png"}
              alt={"logo"}
              width={300}
              height={200}
            />
          </div>
        </div>
      </>
    );
};

export default Hero;

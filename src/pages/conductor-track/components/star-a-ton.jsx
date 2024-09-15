import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function StarATon() {
  return (
    <div className="min-h-screen bg-customBlue p-4 md:p-8 relative">
      {/* Title and GitHub Star */}
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl text-white relative z-10 font-clash-bold mr-2">
          Star-A-Ton
        </h1>
        <Image
          src="/assets/icons/githubStar.png"
          alt="GitHub Star"
          width={51}
          height={45}
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </div>

      {/* Downlines Image */}
      <div className="md:hidden flex justify-center mb-8">
        <Image
          src="/assets/downlines.png"
          alt="down lines"
          width={180}
          height={60}
        />
      </div>

      {/* Main Content */}
      <div className="hidden md:flex flex-row mt-0 justify-center">
        <div className="flex-1 p-4">
          {/* First division content */}
          <div className="flex flex-row items-center w-[350px] mt-20">
            <Image
              src="/assets/singleline.png"
              alt="Singleline"
              width={5}
              height={0}
              className="mr-4 h-full"
            />
            <div>
              <p className="text-customYellow font-clash-semi text-xl">
                What is Star-A-Ton?
              </p>
              <p className="text-white font-satoshi-regular">
                Star-a-Ton is a fun competition where you can win prizes by
                simply starring the Orkes Conductor GitHub repository. It’s a
                way to show your support, and by starring the repo, you’ll also
                be the first to get updates and news about Orkes Conductor.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          {/* Second division content */}
          <div className="flex justify-center mt-4">
            <Image
              src="/assets/downlines.png"
              alt="down lines"
              width={180}
              className="mt-0"
              height={60}
            />
          </div>
        </div>
        <div className="flex-1 p-4">
          {/* Third division content */}
          <div className="flex flex-col">
            <div className="flex justify-center">
              <Image
                src="/assets/staraton2.png"
                alt="star a ton"
                height={50}
                width={150}
                className="mt-0 mr-0"
              />
            </div>
            <div>
              <p className="mt-10 font-clash-semi text-white text-right text-xl whitespace-pre-wrap">
                <span className="font-clash-bold text-2xl">Star A Repo</span>{" "}
                for a chance to win
                <div className="text-right">
                  <span className="text-3xl">
                    <span className="text-customYellow">JBL</span> Speakers
                  </span>
                </div>
                <div className="text-right">and other goodies</div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-around mt-0 mr-0 mb-0">
        <Image
          src="/assets/icons/githubStar.png"
          alt="GitHub Star"
          width={51}
          height={45}
        />
        <div>{}</div>
      </div>
      <div className="hidden md:flex justify-center mt-0 relative">
        <button className="bg-gray-200 border-4 border-gray-400 rounded-lg px-4 py-2 shadow-md text-lg text-gray-700 font-clash-bold lowercase w-[150px] border-solid">
          register
        </button>

        <div className="hidden md:flex justify-center w-full absolute top-[-65px] ">
          <Image
            src="/assets/stargroup.png"
            alt="star group"
            width={250}
            height={10}
          />
        </div>
      </div>
      {/* Mobile Specific Content */}
      <div className="md:hidden flex flex-col items-center">
        {/* What is Star-A-Ton Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex flex-row items-center mb-4">
            <Image
              src="/assets/singleline.png"
              alt="Singleline"
              width={5}
              height={0}
              className="mr-4 h-full"
            />
            <div>
              <p className="text-customYellow font-clash-semi text-xl text-center">
                What is Star-A-Ton?
              </p>
              <p className="text-white font-satoshi-regular text-center">
                Star-a-Ton is a fun competition where you can win prizes by
                simply starring the Orkes Conductor GitHub repository. It’s a
                way to show your support, and by starring the repo, you’ll also
                be the first to get updates and news about Orkes Conductor.
              </p>
            </div>
          </div>
        </div>

        {/* Star-a-Ton Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/staraton2.png"
            alt="star a ton"
            height={50}
            width={150}
          />
        </div>

        {/* Prizes Section */}
        <div className="flex flex-col items-center mb-8">
          <p className="font-clash-semi text-white text-center text-xl whitespace-pre-wrap">
            <span className="font-clash-bold text-2xl">Star A Repo</span> for a
            chance to win
            <div className="text-3xl">
              <span className="text-customYellow">JBL</span> Speakers
            </div>
            and other goodies
          </p>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <button className="bg-gray-200 border-4 border-gray-400 rounded-lg px-4 py-2 shadow-md text-lg text-gray-700 font-clash-bold lowercase w-[150px] border-solid">
            register
          </button>
        </div>
      </div>
    </div>
  );
}

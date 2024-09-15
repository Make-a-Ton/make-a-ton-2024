import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ConductorTrack() {
  return (
    <div className="min-h-screen bg-[#204289] p-4 md:p-8 relative">
      <div className="flex flex-row items-center justify-center mb-8">
        <Link
          href="/"
          className="fixed top-4 left-4 flex flex-row text-customYellow font-satoshi-regular gap-2 items-center back-button"
        >
          <Image
            src="/assets/icons/pixelArrow.svg"
            alt=""
            width={50}
            height={50}
            className="rotate-180 w-8 h-8 md:w-12 md:h-12"
          />
          <span className="hidden md:block text-lg">Home</span>
        </Link>
        <h1 className="text-2xl md:text-4xl text-[#EAAE20] text-center relative z-10 font-clash-bold">
          Conductor Track
        </h1>
      </div>

      {/* Mobile View Image */}
      <div className="block md:hidden text-center mb-8">
        <div className="relative w-20 mx-auto h-auto">
          <Image
            src="/assets/lines.png"
            alt="Top Lines"
            layout="responsive"
            width={80}
            height={200}
            objectFit="contain"
            quality={100}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mx-auto max-w-7xl">
        {/* Left Side */}
        <div className="flex flex-col text-center md:text-left md:w-1/3 space-y-8">
          <div>
            <p className="font-clash-bold text-xl md:text-3xl text-white mb-2">
              What is the Conductor Track?
            </p>
            <p className="font-satoshi-regular text-sm md:text-base text-white">
              The Conductor Track is a special track sponsored by Orkes for
              Make-A-Ton. This track offers exclusive prizes and provides
              dedicated support and mentorship. To participate, it&apos;s
              mandatory to register through Star-A-Ton and star the Orkes
              Conductor GitHub repository.
            </p>
          </div>
          <div className="md:ml-12">
            <p className="font-clash-bold text-xl md:text-3xl text-white mb-2">
              What is Orkes Conductor?
            </p>
            <p className="font-satoshi-regular text-sm md:text-base text-white md:px-4">
              Orkes Conductor is a tool that helps you organize and automate
              tasks in a sequence. Think of it as an automatic to-do list that
              ensures everything happens in the right order.
            </p>
          </div>
        </div>

        {/* Center: Image */}
        <div className="hidden md:flex flex-col items-center md:w-1/4">
          <div className="relative w-20 h-auto">
            <Image
              src="/assets/lines.png"
              alt="Top Lines"
              layout="responsive"
              width={80}
              height={400}
              objectFit="contain"
              quality={100}
              priority
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:w-1/3 text-white  text-center">
          {/* <div> */}
          <h2 className="font-clash-bold text-xl md:text-4xl text-customYellow md:mb-4">
            How to participate
          </h2>
          <ul className="font-satoshi-regular text-base items-center mt-2 md:text-xl flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <Image
                src="/assets/icons/githubStar.png"
                alt="github star"
                width={30}
                height={27}
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <span>
                Apply for{" "}
                <Link
                  href="/star-a-ton"
                  className="underline text-customYellow"
                >
                  Star a ton
                </Link>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/assets/hammer.png"
                alt="hammer"
                width={27}
                height={30}
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <span>
                Register for Make-A-Ton 7.0{" "}
                <a
                  href="https://lu.ma/j58nctcm"
                  className="text-customYellow underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </span>
            </li>
            <li className="mt-2">
              That&apos;s it, you are now considered for conductor track and
              giveaway!
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>

      {/* Yellow Ribbon for Desktop View */}
      <div className="hidden md:block absolute bottom-4 left-4">
        <div className="relative w-24 h-auto">
          <Image
            src="/assets/yellowribbon.png"
            alt="Yellow Ribbon"
            layout="responsive"
            width={120}
            height={160}
            objectFit="contain"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ConductorTrack() {
  return (
    <>
      <div className="min-h-screen bg-[#204289] p-4 md:p-8 relative">
        <h1 className="text-3xl md:text-4xl text-[#EAAE20] mb-8 text-center relative z-10 font-clash-bold">
          Conductor Track
        </h1>

        {/* Mobile View Image */}
        <div className="block md:hidden text-center mb-8">
          <div className="relative w-[80px] mx-auto h-auto">
            <Image
              src="/assets/lines.png"
              alt="Top Lines"
              width={80}
              height={0}
              style={{ height: "100%" }}
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mb-8 mx-4 md:mx-8">
          {/* Left Side: What is the Conductor Track and What is Orkes */}
          <div className="flex flex-col text-left md:w-1/3 md:mr-8 md:-mt-16 w-full">
            {/* Conductor Track Text */}
            <div className="mb-6 text-center md:text-left">
              <p className="font-clash-bold text-lg md:text-3xl text-white mb-2 w-full md:w-[560px]">
                What is the Conductor Track?
              </p>
              <p className="font-satoshi-regular text-base text-white text-[13px]">
                The Conductor Track is a special track sponsored by Orkes for
                Make-A-Ton. This track offers exclusive prizes and provides
                dedicated support and mentorship. To participate, its mandatory
                to register through Star-A-Ton and star the Orkes Conductor
                GitHub repository.
              </p>
            </div>
            {/* Orkes Conductor Text */}
            <div className="mb-4 md:ml-12 w-full md:w-[480px] text-center md:text-left">
              <p className="font-clash-bold text-lg md:text-3xl text-white mb-2">
                What is Orkes Conductor?
              </p>
              <p className="font-satoshi-regular text-base text-[13px] text-white md:px-12">
                Orkes Conductor is a tool that helps you organize and automate
                tasks in a sequence. Think of it as an automatic to-do list that
                ensures everything happens in the right order.
              </p>
            </div>
          </div>

          {/* Center: Image */}
          <div className="hidden md:flex flex-col items-center md:w-1/3">
            <div className="relative w-full md:w-[80px] h-auto">
              <Image
                src="/assets/lines.png"
                alt="Top Lines"
                width={80}
                height={0}
                style={{ height: "100%" }}
                objectFit="cover"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Right Side: Exclusive Prizes and Register */}
          <div className="flex flex-col md:w-[618px] md:ml-4 text-center md:-mt-16 mb-8 md:mb-0">
            <div className="mb-12">
              <h2 className="font-clash-bold text-xl md:text-3xl text-white">
                Exclusive Prizes
              </h2>
              <h2 className="font-clash-bold text-xl md:text-3xl text-white">
                and Swags
              </h2>
            </div>
            <div className="md:pl-8 inline-flex justify-center items-center space-x-2">
              <Image
                src="/assets/hammer.png"
                alt="hammer"
                width={54}
                height={50}
                objectFit="cover"
                quality={100}
              />
              <span className="font-clash-bold text-md md:text-3xl text-white">
                Register{" "}
              </span>
              <Link href="/star-a-ton" passHref>
                <span className="font-clash-bold text-md md:text-3xl text-[#EAAE20] underline cursor-pointer inline-flex items-center">
                  Here
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Yellow Ribbon for Desktop View */}
        <div className="hidden md:block absolute bottom-0 left-0 mb-4 ml-4">
          <div className="relative w-[120px] h-auto">
            <Image
              src="/assets/yellowribbon.png"
              alt="Yellow Ribbon"
              width={120}
              height={0}
              style={{ height: "auto" }}
              objectFit="cover"
              quality={100}
              priority
            />
          </div>
        </div>

        {/* Mobile View Adjustments */}
        <style jsx global>{`
          @media (max-width: 768px) {
            .flex-col {
              align-items: center;
            }
            .text-left {
              text-align: center;
            }
            .w-[560px],
            .w-[480px] {
              width: 100%;
            }
            .ml-12,
            .px-12 {
              margin-left: 0;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .md\:w-1/3 {
              width: 100%;
            }
            .md\:mr-8,
            .md\:ml-4 {
              margin-right: 0;
              margin-left: 0;
            }
            .mx-4 {
              margin-left: 2rem;
              margin-right: 2rem;
            }
            .text-center {
              text-align: center;
            }
            .mb-8 {
              margin-bottom: 2rem;
            }
            .mb-6 {
              margin-bottom: 1.5rem;
            }
            .mb-4 {
              margin-bottom: 1rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}

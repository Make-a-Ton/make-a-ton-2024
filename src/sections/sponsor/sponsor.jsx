import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const CloudImages = [
  {
    image: "/assets/awsugkochi.png",
    link: "https://communityday.awsugkochi.in/",
  },
];

const SilverImages = [
  { image: "/assets/foss.svg", link: "https://fossunited.org/" },
  { image: "/assets/echo.png", link: "https://www.echo3d.com/" },
  { image: "/assets/seaa.png", link: "https://www.soecusat.in/" },
  { image: "/assets/wolfram.png", link: "https://www.wolframalpha.com/" },
];

const CommunityImages = [
  { image: "/assets/tinkerhub.png", link: "https://tinkerhub.org/" },
  {
    image: "/assets/GDG Cochin.png",
    link: "https://gdg.community.dev/gdg-cochin/",
  },
  {
    image: "/assets/gdg-cloud-kochi.webp",
    link: "https://gdg.community.dev/gdg-cloud-kochi/",
  },
  // {image: "/assets/gdsc cusat.png", link: "https://gdsc.community.dev/school-of-engineering-cusat-kochi/"},
];

const HackathonImages = [{ image: "/assets/mlh.png", link: "https://mlh.io/" }];

const OpenSourceImages = [
  { image: "/assets/Loft.svg", link: "https://loft.sh/" },
  {
    image: "/assets/devchat.svg",
    link: "https://github.com/devchat-ai/devchat",
  },
];

const PlatinumImages = [
  { image: "/assets/orkes.png", link: "https://www.orkes.io/" },
  { image: "/assets/cusat_tech.png", link: "https://tbi.cusat.ac.in/" },
  // {image: "/assets/GitHub_Logo.png", link: "https://github.com"},
];
const HardwareImages = [
  { image: "/assets/makergram.png", link: "https://makergram.com" },
];

const sponsor = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center">
        <div className="text-blue-900 font-clash-bold text-4xl mt-20 mb-14 justify-center items-center">
          PARTNER
        </div>
      </div>

      <div className="flex justify-around items-center mb-20">
        <div className="flex flex-grow">
          <div className="hidden md:visible sm:flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 229 229"
              fill="none"
            >
              <rect
                x="227.651"
                y="57.3015"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 227.651 57.3015)"
                fill="#204289"
              />
              <rect
                x="171.248"
                y="0.246826"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 171.248 0.246826)"
                fill="#204289"
              />
              <rect
                x="228.302"
                y="171.411"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 228.302 171.411)"
                fill="#204289"
              />
              <rect
                x="171.248"
                y="114.356"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 171.248 114.356)"
                fill="#204289"
              />
              <rect
                x="114.193"
                y="171.411"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 114.193 171.411)"
                fill="#204289"
              />
              <rect
                x="114.193"
                y="57.3015"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 114.193 57.3015)"
                fill="#204289"
              />
              <rect
                x="57.7891"
                y="0.246826"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 57.7891 0.246826)"
                fill="#204289"
              />
              <rect
                x="57.1382"
                y="114.356"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 57.1382 114.356)"
                fill="#204289"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 229 229"
              fill="none"
            >
              <rect
                x="227.651"
                y="57.3015"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 227.651 57.3015)"
                fill="#204289"
              />
              <rect
                x="171.248"
                y="0.246826"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 171.248 0.246826)"
                fill="#204289"
              />
              <rect
                x="228.302"
                y="171.411"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 228.302 171.411)"
                fill="#204289"
              />
              <rect
                x="171.248"
                y="114.356"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 171.248 114.356)"
                fill="#204289"
              />
              <rect
                x="114.193"
                y="171.411"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 114.193 171.411)"
                fill="#204289"
              />
              <rect
                x="114.193"
                y="57.3015"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 114.193 57.3015)"
                fill="#204289"
              />
              <rect
                x="57.7891"
                y="0.246826"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 57.7891 0.246826)"
                fill="#204289"
              />
              <rect
                x="57.1382"
                y="114.356"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 57.1382 114.356)"
                fill="#204289"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col flex-grow gap-5 items-center justify-center">
          <h3 className="block mb-1 text-center text-[#204289] font-satoshi-bold text-4xl ">
            Title Sponsor
          </h3>
          <Link href={"https://eduport.app/"} target={"_blank"}>
            <Image
              height={300}
              width={300}
              src="/assets/titlesponsor.png"
              alt="eduport"
              className="px-5 lg:px-auto"
            />
          </Link>
        </div>

        <div className="flex flex-grow justify-end">
          <div className="sm:flex flex-row hidden md:visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 229 229"
              fill="none"
            >
              <rect
                x="227.651"
                y="57.3015"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 227.651 57.3015)"
                fill="#204289"
              />
              <rect
                x="171.248"
                y="0.246826"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 171.248 0.246826)"
                fill="#204289"
              />
              <rect
                x="228.302"
                y="171.411"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 228.302 171.411)"
                fill="#204289"
              />
              <rect
                x="171.248"
                y="114.356"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 171.248 114.356)"
                fill="#204289"
              />
              <rect
                x="114.193"
                y="171.411"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 114.193 171.411)"
                fill="#204289"
              />
              <rect
                x="114.193"
                y="57.3015"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 114.193 57.3015)"
                fill="#204289"
              />
              <rect
                x="57.7891"
                y="0.246826"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 57.7891 0.246826)"
                fill="#204289"
              />
              <rect
                x="57.1382"
                y="114.356"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 57.1382 114.356)"
                fill="#204289"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 229 229"
              fill="none"
            >
              <rect
                x="227.651"
                y="57.3015"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 227.651 57.3015)"
                fill="#204289"
              />
              <rect
                x="171.248"
                y="0.246826"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 171.248 0.246826)"
                fill="#204289"
              />
              <rect
                x="228.302"
                y="171.411"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 228.302 171.411)"
                fill="#204289"
              />
              <rect
                x="171.248"
                y="114.356"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 171.248 114.356)"
                fill="#204289"
              />
              <rect
                x="114.193"
                y="171.411"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 114.193 171.411)"
                fill="#204289"
              />
              <rect
                x="114.193"
                y="57.3015"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 114.193 57.3015)"
                fill="#204289"
              />
              <rect
                x="57.7891"
                y="0.246826"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 57.7891 0.246826)"
                fill="#204289"
              />
              <rect
                x="57.1382"
                y="114.356"
                width="57.0547"
                height="57.0547"
                transform="rotate(90 57.1382 114.356)"
                fill="#204289"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-4 sm:mb-20 ">
        <div className="flex justify-center sm:w-[30%] text-[#204289] font-satoshi-medium text-[30px]">
          Platinum Sponsor
        </div>

        <div className="flex justify-center sm:justify-start flex-wrap w-[70%]">
          {PlatinumImages.map((data, i) => (
            <Link
              key={i}
              href={data.link}
              target={"_blank"}
              className="items-center"
            >
              <div
                className={`flex justify-center min-h-[175px] p-10 md:ml-7 sm:mt-24 ${
                  i % 2 === 0 ? "bg-[#F6F5F5]" : ""
                }`}
              >
                <Image
                  src={data.image}
                  alt=""
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-14 sm:mb-0 ">
                <div className="flex justify-center sm:w-[30%] text-[#204289] font-satoshi-regular text-[30px]">
                    Silver Sponsors
                </div>

                <div className="flex justify-center sm:justify-start flex-wrap w-[70%]">
                    {SilverImages.map((data, i) => (
                        <Link key={i} href={data.link} target={"_blank"}>
                            <div
                                className={`flex justify-center min-h-[150px] p-10 ${i % 2 !== 0 ? 'bg-[#F6F5F5]' : ''}`}>
                                <Image src={data.image} alt="" width={100} height={100} className="object-contain"/>
                            </div>
                        </Link>
                    ))}
                </div>
            </div> */}

      {/* <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-14 sm:mb-0 ">
                <div className="flex justify-center sm:w-[30%] text-[#204289] font-satoshi-regular text-[30px]">
                    Open Source Partners
                </div>

                <div className="flex justify-center sm:justify-start flex-wrap w-[70%]">
                    {OpenSourceImages.map((data, i) => (
                        <Link key={i} href={data.link} target={"_blank"}>
                            <div
                                className={`flex justify-center min-h-[150px] p-10 ${i % 2 === 0 ? 'bg-[#F6F5F5]' : ''}`}>
                                <Image src={data.image} alt="" width={100} height={100} className="object-contain"/>
                            </div>
                        </Link>
                    ))}
                </div>
            </div> */}

      {/* <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-14 sm:mb-0 ">
                <div className="flex justify-center sm:w-[30%] text-[#204289] font-satoshi-regular text-[30px]">
                    Cloud Partners
                </div>

                <div className="flex justify-center sm:justify-start flex-wrap w-[70%]">
                    {CloudImages.map((data, i) => (
                        <Link key={i} href={data.link} target={"_blank"}>
                            <div
                                className={`flex justify-center min-h-[150px] p-10 ${i % 2 !== 0 ? 'bg-[#F6F5F5]' : ''}`}>
                                <Image src={data.image} alt="" width={100} height={100} className="object-contain"/>
                            </div>
                        </Link>
                    ))}
                </div>
            </div> */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-4 sm:mb-20 ">
        <div className="flex justify-center sm:w-[30%] text-[#204289] font-satoshi-medium text-[30px]">
          Hackathon Partner
        </div>

        <div className="flex justify-center sm:justify-start flex-wrap w-[70%]">
          {HackathonImages.map((data, i) => (
            <Link key={i} href={data.link} target={"_blank"}>
              <div
                className={`flex   justify-center  min-h-[150px] p-10 ${
                  i % 2 !== 0 ? "bg-[#F6F5F5]" : ""
                }`}
              >
                <Image
                  src={data.image}
                  alt=""
                  width={125}
                  height={125}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 sm:flex-row items-center justify-center w-full  mb-28">
        <div className="flex justify-center sm:w-[30%] text-[#204289] font-satoshi-medium text-[30px]">
          Community Partners
        </div>

        <div className="flex justify-center sm:justify-start flex-wrap w-[70%]">
          {CommunityImages.map((data, i) => (
            <Link key={i} href={data.link} target={"_blank"}>
              <div
                className={`flex justify-center items-center min-h-[150px] p-10 ${
                  i % 2 === 0 ? "bg-[#F6F5F5]" : ""
                }`}
                style={{ width: "175px", height: "175px" }}
              >
                <Image
                  src={data.image}
                  alt=""
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col sm:flex-row items-center justify-center w-full mb-4 sm:mb-4 ">
                <div className="flex justify-center sm:w-[30%] text-[#204289] font-satoshi-regular text-[30px]">
                    Hardware Partner
                </div>

                <div className="flex justify-center sm:justify-start flex-wrap w-[70%]">
                    {HardwareImages.map((data, i) => (
                        <Link key={i} href={data.link} target={"_blank"}>
                            <div
                                className={`flex   justify-center  min-h-[150px] p-10 ${i % 2 === 0 ? 'bg-[#F6F5F5]' : ''}`}>
                                <Image src={data.image} alt="" width={100} height={100} className="object-contain"/>
                            </div>
                        </Link>
                    ))}
                </div>
            </div> */}
    </Fragment>
  );
};

export default sponsor;

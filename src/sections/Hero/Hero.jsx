import Image from "next/image";
import Link from "next/link";
import Countdown from "@/sections/Hero/Countdown";

const Hero = () => {
    return (
        <>
            <div className="star-container bg-[#204289]  pt-5">
                <div className="line"/>
                <div className="line hidden lg:block"/>
                <div className="line hidden lg:block"/>
                <div className="line"/>
                <div className="line "/>

                <div className="line rotated"/>
                <div className="line rotated"/>
                <div className="line rotated"/>
                <div className="line rotated"/>
                <div className="line rotated"/>

                <div className="flex flex-col text-white font-satoshi-regular items-center justify-center mt-10">
                    <Image src={"/assets/logo.svg"} alt={"logo"} width={200} height={200}/>
                    <h1 className="hidden lg:block font-clash-bold text-5xl leading-10 pt-10">Make-A-Ton<sup
                        className="font-satoshi-regular">6.0</sup></h1>
                    <div className="lg:flex mb-5">
                        <span className="">powered by </span><Link href={"https://clusterdev.com/"} target={"_blank"}>
                        <Image src={"/assets/clusterdev-logo2.png"} alt={"clusterdev"} width={200} height={50}/>
                    </Link>
                    </div>
                    <p className="text-center my-5 lg:my-1 px-2">A 24 HOUR HACKATHON TO EMBRACE THE SPIRIT OF INNOVATION</p>
                    <p className="text-center my-5 lg:my-1 px-2 font-satoshi-bold">Registration closed</p>
                    <div className="flex justify-center items-center">
                        {/*<Link href="https://forms.eventsradar.in/makeaton/"*/}
                        {/*      className={"animate-shake mt-3 bg-white text-black font-satoshi-bold rounded-[15px] px-5 py-3 border-8 border-gray-500 mx-2"}>*/}
                        {/*    register</Link>*/}
                        {/*<div*/}
                        {/*      className={" mt-3 bg-white text-black font-satoshi-bold rounded-[15px] px-5 py-3 border-8 border-gray-500 mx-2"}>*/}
                        {/*    registration </div>*/}
                        <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target={"_blank"}
                              className=" mt-3  mx-2  font-satoshi-bold rounded-[15px] px-5 py-3 border-2 border-gray-500">
                            Code of Conduct</Link>

                    </div>
                      <div className="flex justify-center items-center">
                        {/*<Link href="https://forms.eventsradar.in/makeaton/"*/}
                        {/*      className={"animate-shake mt-3 bg-white text-black font-satoshi-bold rounded-[15px] px-5 py-3 border-8 border-gray-500 mx-2"}>*/}
                        {/*    register</Link>*/}
                        {/*<div*/}
                        {/*      className={" mt-3 bg-white text-black font-satoshi-bold rounded-[15px] px-5 py-3 border-8 border-gray-500 mx-2"}>*/}
                        {/*    registration </div>*/}
                        <Link href="https://bit.ly/makeaton-hacker-guide" target={"_blank"}
                              className=" mt-3  mx-2  font-satoshi-bold rounded-[15px] px-5 py-3 border-2 border-gray-500">
                            Hacker Guide</Link>

                    </div>

                    <p className="mt-10">4th - 5th November, 2023</p>
                    <div className="flex flex-row mt-5 justify-center items-center">
                        <Image src={"/assets/location.svg"} alt={"location"} width={20} height={20}/>
                        <p className="mx-3 hidden lg:block">Cochin University of Science and Technology</p>
                        <p className="mx-3 block lg:hidden">CUSAT</p>
                    </div>
                </div>
                <div className={"flex justify-around"}>
                    <Image className="hidden md:block" src={"/assets/makeaton_logo.png"} alt={"logo"} width={200}
                           height={200}/>
                    <Countdown/>
                    <Image className="hidden md:block" src={"/assets/hero_effect.png"} alt={"logo"} width={300}
                           height={200}/>

                </div>


            </div>
        </>
    );
};

export default Hero;

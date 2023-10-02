import React, {Fragment, useState, useEffect} from 'react';
import Image from "next/image";
import Nav from "@/sections/Hero/Nav";
import Countdown from "@/sections/Hero/Countdown";
import Mobilenav from "@/sections/Hero/Mobilenav";

const Hero = () => {

    const [animateShake, setAnimateShake] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        }
        setTimeout(() => {
            setAnimateShake(false);
        }, 3000);
    }, []);

    return (
        <Fragment>
            <div className="bg-gray-900 min-h-screen p-2">
                <div className="p-5 py-10">
                    {isMobile ? <Mobilenav/> : <Nav/>}
                </div>

                <div className="flex flex-col text-white font-satoshi-regular items-center justify-center">
                   <Image src={"/assets/logo.svg"} alt={"logo"} width={200} height={200}/>
                    <h1 className="font-clash-bold text-5xl leading-10 py-10">Make-A-Ton<sup className="font-satoshi-regular">6.0</sup></h1>
                    <p className="">A 24 HOUR HACKATHON TO EMBRACE THE SPIRIT OF INNOVATION</p>
                    <button className={`${animateShake ? 'animate-shake' : ''} mt-3 bg-white text-black font-satoshi-bold rounded-[15px] px-5 py-3 border-8 border-gray-500 rotate-20 hover:rotate-0 ease-in-out active:scale-90`}>
                        register</button>
                    <p className="mt-10">4th - 5th November, 2023</p>
                    <div className="flex flex-row mt-5 justify-center items-center">
                        <Image src={"/assets/location.svg"} alt={"location"} width={20} height={20}/>
                        <p className="mx-3">Cochin University of Science and Technology</p>
                    </div>
                </div>

                <div className="mt-10">
                        <Countdown/>
                </div>

            </div>
        </Fragment>
    );
};

export default Hero;

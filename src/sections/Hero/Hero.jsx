import React, {Fragment, useState, useEffect} from 'react';
import Nav from "./Nav";
import Image from "next/image";

const Hero = () => {

    const [animateShake, setAnimateShake] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimateShake(false);
        }, 3000);
    }, []);

    return (
        <Fragment>
            <div className="bg-gray-900 min-h-screen text-white">
                <div className="p-5 py-10">
                    <Nav/>
                </div>

                <div className="flex flex-col items-center justify-center">
                   <Image src={"/assets/logo.svg"} alt={"logo"} width={200} height={200}/>
                    <h1 className="font-clash-bold text-5xl leading-10 py-10">Make-A-Ton<sup className="font-satoshi-regular">6.0</sup></h1>
                    <p className="font-satoshi-regular">A 24 HOUR HACKATHON TO EMBRACE THE SPIRIT OF INNOVATION</p>
                    <button className={`${animateShake ? 'animate-shake' : ''} mt-3 bg-white text-black font-satoshi-bold rounded-[15px] px-5 py-3 border-8 border-gray-500 rotate-20 hover:rotate-0 ease-in-out active:scale-90`}>
                        register</button>
                </div>

            </div>
        </Fragment>
    );
};

export default Hero;

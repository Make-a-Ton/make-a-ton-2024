  import Image from "next/image";
  import Link from "next/link";

  const Hero = () => {
    return (
      <>
   
        <div className="star-container bg-[#204289] pt-5 pb-5 pb-lg-0 relative">
        <div className="line"/>
          <div className="line hidden lg:block" />
          <div className="line hidden lg:block" />
          <div className="line" />
          <div className="line" />

          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          {/* <Link
            href="https://2023.makeaton.in"
            target={"_blank"}
                className="absolute top-5 right-5 md:top-10 md:right-32 font-satoshi-bold rounded-[15px] px-5 py-3 border-2 border-gray-500 text-white"
          >
            Last Edition
          </Link>
          <Link
            href="/assets/docs/Sponsorship-Doc.pdf"
            target={"_blank"}
            className="absolute top-5 left-5 md:top-10 md:left-10 font-satoshi-bold rounded-[15px] px-5 py-3 border-2 border-gray-500 text-white"
          >
            Sponsor Us
          </Link> */}
          <Image
              src={"/assets/racetrack.png"}
              alt={"logo"}
              width={320}
              height={550}
              className="absolute -top-48 right-0 hidden md:block"
            />
              <Image
              src={"/assets/hero_effect.png"}
              alt={"logo"}
              width={300}
              height={200}
              className="absolute top-0 left-0 hidden md:block"
              style={{ transform: "rotate(-180deg)" }}
            />
            
    
           
          {/* <div className="line"/>
          <div className="line hidden lg:block" />
          <div className="line hidden lg:block" />
          <div className="line" />
          <div className="line" />

          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" /> */}
          {/* <div className="flex justify-center items-center">
          <Image
              src={"/assets/logo.png"}
              alt={"logo"}
              width={200}
              height={200}
              
            />
          </div> */}
          

          <div className="flex flex-col text-white font-satoshi-regular items-center justify-center mt-20 md:mt-44 mb-20 md:mb-0">

            <Image
              src={"/assets/logo.png"}
              alt={"logo"}
              width={200}
              height={200}
            />
          
            <h1 className="block font-clash-bold text-4xl md:text-6xl leading-10 pt-10">
              Make-A-Ton<sup className="font-satoshi-regular">7.0</sup>
            </h1>
            <p className="text-center my-5 lg:mt-6 px-2 text-base font-satoshi-bold lg:text-lg">
              A 24 HOUR HACKATHON TO EMBRACE THE SPIRIT OF INNOVATION
            </p>
            <div className="flex justify-center items-center">
              {/* <Link
                href="https://lu.ma/j58nctcm"
                target={"_blank"}
                className="-mt-4 mx-2 font-clash-semi rounded-[15px] px-8 py-3 border-8 bg-gray-200 text-gray-700 border-gray-500 "
                style={{ transform: "rotate(-8.81deg)" }}
              >
                Register
              </Link> */}
              <Link
                href="/assets/docs/Sponsorship-Doc.pdf"
                target={"_blank"}
                className="mt-3 mx-2 font-satoshi-bold rounded-[15px] px-5 py-3 border-2 border-gray-500"
              >
                Sponsor Us
              </Link>
              <Link
                href="https://2023.makeaton.in"
                target={"_blank"}
                className="mt-3 mx-2 font-satoshi-bold rounded-[15px] px-5 py-3 border-2 border-gray-500"
              >
                Last Edition
              </Link>
            </div>

            <p className="mt-16 text-lg md:text-lg lg:text-2xl font-satoshi-medium">19th - 20th October, 2024</p>
            <div className="flex flex-row mt-5 justify-center items-center">
              <Image
                src={"/assets/location.svg"}
                alt={"location"}
                width={20}
                height={20}
              />
              <p className="mx-3 hidden font-satoshi-regular lg:block">
                Cochin University of Science and Technology
              </p>
              <p className="mx-3 block lg:hidden">CUSAT</p>
            </div>
          </div>
          <div className={"flex justify-between -mt-40 mb-20"}>
            <Image
              className=" mb-8 hidden md:block"
              src={"/assets/makeaton_logo.png"}
              alt={"logo"}
              width={200}
              height={200}
              
            />
            <Image
              className="mb-8 hidden md:block"
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

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="star-container bg-[#204289] pt-20 md:pt-5  relative h-screen">
        <div className="line" />
        <div className="line hidden lg:block" />
        <div className="line hidden lg:block" />
        <div className="line" />
        <div className="line" />

        <div className="line rotated" />
        <div className="line rotated" />
        <div className="line rotated" />
        {/* <div className="line rotated" /> */}
        {/* <div className="line rotated" />
        <div className="line rotated" />
        <div className="line rotated" /> */}
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
          </Link>  */}
        {/* <Image
          src={"/assets/racetrack.png"}
          alt={"logo"}
          width={320}
          height={550}
          className="absolute -top-48 right-0 hidden md:block"
        /> */}
        <Image
          src={"/assets/hero_effect.png"}
          alt={"logo"}
          width={300}
          height={200}
          className="absolute top-0 left-0 hidden md:block"
          style={{ transform: "rotate(-180deg)" }}
        />
        {/* <Link href="/star-a-ton">
        <Image
          src={"/assets/staraton1.1.png"}
          alt={"staraton"}
          width={300}
          height={200}
          className="absolute top-1/3 right-0 hidden md:block cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125"
        />
          </Link> */}

        {/* <div className="line"/>
          <div className="line hidden lg:block" />
          <div className="line hidden lg:block" />
          <div className="line" />
          <div className="line" />

          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
          <div className="line rotated" />
        {/* <div className="flex justify-center items-center">
          <Image
              src={"/assets/logo.png"}
              alt={"logo"}
              width={200}
              height={200}
              
            />
          </div> */}

        <div className="flex flex-col text-white font-satoshi-regular items-center justify-center -mt-2 md:mt-32 mb-20 md:mb-0">
          <Image
            src={"/assets/logo.png"}
            alt={"logo"}
            width={200}
            height={200}
          />

          <h1 className="block font-clash-bold text-4xl md:text-6xl leading-10 pt-10">
            Make-A-Ton<sup className="font-satoshi-regular">7.0</sup>
          </h1>
          <div className="lg:flex gap-4 mb-5">
            <span className="">powered by </span>
            <Link href={"https://eduport.app/"} target={"_blank"}>
              <svg
                width="248"
                height="68"
                viewBox="0 0 248 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_707_811)">
                  <path
                    d="M19.0673 35.3677C19.0673 31.0529 20.7813 26.9148 23.8324 23.8637C26.8834 20.8127 31.0215 19.0986 35.3364 19.0986C39.6512 19.0986 43.7893 20.8127 46.8403 23.8637C49.8914 26.9148 51.6055 31.0529 51.6055 35.3677C51.5865 36.4014 51.481 37.4317 51.2899 38.4478H25.623C26.2717 40.5129 27.5637 42.3165 29.3104 43.5951C31.0571 44.8737 33.1669 45.5602 35.3315 45.5544C38.0519 45.5359 40.6582 44.4591 42.5984 42.5521H49.9477C48.3235 45.8476 45.6322 48.4968 42.3114 50.0688C38.9907 51.6409 35.2358 52.0434 31.6573 51.2108C28.0788 50.3783 24.8872 48.3597 22.6014 45.4833C20.3156 42.6069 19.07 39.0418 19.0673 35.3677ZM25.6205 32.3654H45.0376C44.3695 30.312 43.0725 28.5209 41.3301 27.2454C39.5877 25.97 37.4883 25.275 35.3291 25.2587C33.1648 25.2531 31.0554 25.9397 29.3091 27.2183C27.5628 28.4969 26.2712 30.3004 25.623 32.3654H25.6205Z"
                    fill="white"
                  />
                  <path
                    d="M56.3311 35.3677C56.3367 32.3028 57.2065 29.3016 58.8405 26.7086C60.4745 24.1156 62.8065 22.0359 65.5689 20.7082C68.3313 19.3805 71.412 18.8586 74.4576 19.2024C77.5031 19.5462 80.39 20.7418 82.7869 22.652V2.82953H88.879V35.3677C88.879 39.6826 87.1649 43.8207 84.1139 46.8717C81.0629 49.9228 76.9247 51.6368 72.6099 51.6368C68.2951 51.6368 64.157 49.9228 61.1059 46.8717C58.0549 43.8207 56.3408 39.6826 56.3408 35.3677H56.3311ZM62.4135 35.3677C62.4135 37.3839 63.0114 39.3548 64.1315 41.0312C65.2516 42.7076 66.8437 44.0142 68.7064 44.7857C70.5691 45.5573 72.6188 45.7592 74.5962 45.3658C76.5737 44.9725 78.3901 44.0016 79.8157 42.576C81.2414 41.1503 82.2122 39.3339 82.6056 37.3565C82.9989 35.379 82.797 33.3294 82.0255 31.4667C81.2539 29.604 79.9473 28.0119 78.2709 26.8917C76.5946 25.7716 74.6237 25.1737 72.6075 25.1737C69.9069 25.1808 67.3192 26.2574 65.4105 28.1679C63.5018 30.0784 62.4277 32.6672 62.4232 35.3677H62.4135Z"
                    fill="white"
                  />
                  <path
                    d="M120.07 19.0986H126.153V35.3605C126.153 39.6753 124.438 43.8134 121.387 46.8644C118.336 49.9155 114.198 51.6296 109.883 51.6296C105.569 51.6296 101.43 49.9155 98.3794 46.8644C95.3284 43.8134 93.6143 39.6753 93.6143 35.3605V19.0986H99.6822V35.3605C99.6822 38.0641 100.756 40.6569 102.668 42.5687C104.58 44.4804 107.173 45.5544 109.876 45.5544C112.58 45.5544 115.173 44.4804 117.084 42.5687C118.996 40.6569 120.07 38.0641 120.07 35.3605V19.0986Z"
                    fill="white"
                  />
                  <path
                    d="M163.424 35.3686C163.418 38.4333 162.548 41.4341 160.914 44.0268C159.28 46.6194 156.948 48.6988 154.185 50.0262C151.423 51.3536 148.342 51.8753 145.297 51.5314C142.252 51.1875 139.365 49.9919 136.968 48.0819V67.9116L130.888 63.6544V35.3686C130.888 31.0541 132.602 26.9163 135.653 23.8655C138.704 20.8146 142.842 19.1007 147.156 19.1007C151.471 19.1007 155.609 20.8146 158.659 23.8655C161.71 26.9163 163.424 31.0541 163.424 35.3686ZM157.344 35.3686C157.344 33.3524 156.746 31.3815 155.626 29.7051C154.506 28.0287 152.914 26.7221 151.051 25.9506C149.189 25.179 147.139 24.9772 145.162 25.3705C143.184 25.7638 141.368 26.7347 139.942 28.1604C138.516 29.586 137.545 31.4024 137.152 33.3798C136.759 35.3573 136.961 37.407 137.732 39.2697C138.504 41.1324 139.81 42.7244 141.487 43.8446C143.163 44.9647 145.134 45.5626 147.15 45.5626C148.491 45.5693 149.819 45.3103 151.059 44.8004C152.299 44.2904 153.426 43.5398 154.374 42.5919C155.321 41.6439 156.072 40.5175 156.582 39.2776C157.092 38.0378 157.351 36.7092 157.344 35.3686Z"
                    fill="white"
                  />
                  <path
                    d="M200.698 35.3689C200.698 38.5852 199.744 41.7292 197.957 44.4035C196.17 47.0777 193.631 49.162 190.659 50.3928C187.688 51.6236 184.418 51.9457 181.264 51.3182C178.109 50.6908 175.212 49.142 172.937 46.8677C170.663 44.5935 169.114 41.6959 168.487 38.5414C167.859 35.3869 168.181 32.1172 169.412 29.1457C170.643 26.1743 172.727 23.6345 175.402 21.8477C178.076 20.0608 181.22 19.1071 184.436 19.1071C188.746 19.116 192.877 20.8322 195.925 23.8799C198.973 26.9277 200.689 31.0587 200.698 35.3689ZM194.63 35.3689C194.647 33.3491 194.064 31.3696 192.955 29.6818C191.845 27.9939 190.259 26.6738 188.398 25.8888C186.537 25.1038 184.485 24.8894 182.501 25.2729C180.518 25.6563 178.694 26.6202 177.259 28.0423C175.825 29.4644 174.845 31.2806 174.445 33.2604C174.044 35.2402 174.241 37.2943 175.01 39.1621C175.779 41.0299 177.085 42.6272 178.764 43.7512C180.442 44.8753 182.416 45.4754 184.436 45.4755C187.121 45.4673 189.695 44.4023 191.6 42.5108C193.506 40.6194 194.59 38.0536 194.618 35.3689H194.63Z"
                    fill="white"
                  />
                  <path
                    d="M221.702 19.0989V25.1789C220.369 25.1836 219.05 25.4512 217.82 25.9662C216.59 26.4812 215.474 27.2336 214.535 28.1804C213.596 29.1272 212.853 30.2497 212.348 31.4838C211.843 32.718 211.587 34.0395 211.593 35.3728V51.6346H205.433V35.3728C205.439 31.0593 207.155 26.9241 210.204 23.8735C213.254 20.8229 217.389 19.1059 221.702 19.0989Z"
                    fill="white"
                  />
                  <path
                    d="M8.86613 21.7321L8.51662 32.2805C8.79362 32.4468 9.02378 32.6808 9.18545 32.9606C9.34712 33.2403 9.435 33.5565 9.44082 33.8796C9.44665 34.2026 9.37023 34.5219 9.21875 34.8072C9.06727 35.0926 8.8457 35.3348 8.57488 35.511L10.8515 39.0061C7.53606 42.2803 4.11865 38.8871 4.11865 38.8871L6.34919 35.4891L6.36375 35.4188C6.08738 35.204 5.8755 34.9172 5.75138 34.59C5.62726 34.2627 5.59569 33.9076 5.66014 33.5635C5.72458 33.2195 5.88255 32.8999 6.1167 32.6397C6.35086 32.3795 6.65215 32.1889 6.98753 32.0887L7.17927 21.0186"
                    fill="white"
                  />
                  <path
                    d="M237.811 19.0996H248.005V25.1796H237.811V51.6354H231.743V25.1796H225.663V19.0996H231.743V2.83777H237.811V19.0996Z"
                    fill="white"
                  />
                  <path
                    d="M7.51399 21.8491L-0.0101318 22.1743L23.6229 0.330078L55.848 3.79603L42.2973 11.5119C36.7901 9.1236 28.3 12.7425 28.3 12.7425C36.3678 11.0896 41.7172 13.2279 41.7172 13.2279L43.7099 19.2884C43.7099 19.2884 37.7804 14.4487 29.3145 17.2205C20.8487 19.9923 18.6133 27.7009 18.6133 27.7009L16.5939 21.553L9.3659 21.8394"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_707_811">
                    <rect
                      width="248"
                      height="67.5666"
                      fill="white"
                      transform="translate(0 0.337524)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <p className="text-center my-5 lg:mt-2 px-2 text-base font-satoshi-small lg:text-lg">
            A 24 HOUR HACKATHON TO EMBRACE THE SPIRIT OF INNOVATION
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="https://lu.ma/j58nctcm"
              target="_blank"
              className="rotate-custom -mt-0 mx-2 font-clash-semi rounded-[15px] px-8 py-3 text-[#204289] border-[#EAAF20] border-8 bg-white md:text-gray-700 md:border-gray-500 transition-transform duration-300 hover:bg-white hover:text-[#204289] hover:border-[#EAAF20] custom-cursor"
            >
              Register
            </Link>

            {/* <Link
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
            </Link> */}
          </div>

          <p className="mt-10 text-lg md:text-lg lg:text-2xl font-satoshi-bold">
            19th - 20th October, 2024
          </p>
          <div className="flex flex-row mt-5 justify-center items-center">
            <Image
              src={"/assets/location.svg"}
              alt={"location"}
              width={20}
              height={20}
            />
            <p className="mx-3 hidden font-satoshi-small lg:block">
              <a href="" target="_blank">
                Cochin University of Science and Technology
              </a>
            </p>
            <p className="mx-3 block lg:hidden">
              <a href="" target="_blank">
                CUSAT
              </a>
            </p>
          </div>
        </div>

        <div className={"flex justify-between -mt-40 "}>
          <Image
            className="  hidden md:block"
            src={"/assets/makeaton_logo.png"}
            alt={"logo"}
            width={200}
            height={200}
          />
          <Image
            className=" hidden md:block"
            src={"/assets/hero_effect.png"}
            alt={"logo"}
            width={300}
            height={200}
          />
          {/* <Image
              className=" hidden z-20 md:block"
              src={"/assets/staraton1.1.png"}
              alt={"logo"}
              width={300}
              height={200}
              
            /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;

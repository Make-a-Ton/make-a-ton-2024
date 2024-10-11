import Image from "next/image";
const Logitech = () => {
  return (
    <div
      className="relative w-screen h-max mt-0.5 bg-[#204289] md:py-40  flex flex-col md:flex-row gap-10 justify-around items-center overflow-hidden"
      style={{ backgroundImage: "url(/assets/grid.png)" }}
    >
      <div className="relative md:ml-5" style={{ width: 350, height: 100 }}>
        <Image
          src="/assets/partners/logitech-mx-logo-white.png"
          alt=""
          width={500}
          height={500}
          style={{ position: "relative", zIndex:10,top:10 }} // Ensure this is on top
        />
       
      </div>

      <div className="absolute md:-bottom-2 md:right-1/3 left-6 md:left-16 bottom-[45%] ">
        <Image src="/assets/cursor.png" alt="" width={40} height={50} />
      </div>
      
      <div className="flex flex-col items-center gap-8">
       
        <div className="hidden md:flex  z-10 md:-mt-20 -mr-36 mt">
          {/* <svg
            width="50"
            height="50"
            viewBox="0 0 241 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M78.7568 134.999L84.8448 145.96L95.8073 139.872L101.895 150.833L112.857 144.745L118.945 155.706L129.906 149.618L135.995 160.581L146.956 154.493L153.044 165.454L164.007 159.366L170.095 170.327L181.056 164.239L187.144 175.201L154.259 193.465L166.435 215.389L177.397 209.301L189.573 231.224L200.535 225.136L212.712 247.06L190.788 259.236L178.611 237.312L167.65 243.4L155.474 221.477L144.512 227.565L138.424 216.604L127.462 222.692L133.55 233.654L122.589 239.742L128.677 250.703L117.715 256.791L51.0473 136.756L62.0088 130.668L67.7954 141.087L78.7568 134.999Z"
              fill="#20458A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.0721 125.995L44.9605 125.795L55.9239 119.706L61.7103 130.124L72.6705 124.037L78.7587 134.999L67.7985 141.086L62.0121 130.667L51.0487 136.756L117.717 256.792L128.68 250.703L134.768 261.665L112.845 273.841L34.1119 132.083L45.0721 125.995ZM128.68 250.703L122.592 239.741L133.552 233.654L139.64 244.616L128.68 250.703ZM133.552 233.654L127.464 222.692L138.427 216.603L144.515 227.565L133.552 233.654ZM144.515 227.565L155.476 221.478L167.652 243.401L156.692 249.489L144.515 227.565ZM167.652 243.401L178.612 237.314L190.788 259.237L179.828 265.325L167.652 243.401ZM190.788 259.237L212.715 247.059L218.802 258.02L196.876 270.198L190.788 259.237ZM212.715 247.059L200.539 225.136L211.499 219.049L223.675 240.972L212.715 247.059ZM200.539 225.136L189.575 231.225L177.399 209.301L188.362 203.212L200.539 225.136ZM177.399 209.301L166.436 215.39L154.259 193.467L187.146 175.202L181.058 164.24L192.022 158.151L204.198 180.074L171.311 198.34L177.399 209.301ZM181.058 164.24L170.098 170.327L164.01 159.366L174.97 153.278L181.058 164.24ZM164.01 159.366L153.047 165.455L146.958 154.493L157.922 148.404L164.01 159.366ZM146.958 154.493L135.995 160.581L129.907 149.62L140.87 143.531L146.958 154.493ZM129.907 149.62L118.947 155.708L112.859 144.746L123.819 138.658L129.907 149.62ZM112.859 144.746L101.898 150.833L95.8102 139.871L106.77 133.784L112.859 144.746ZM95.8102 139.871L84.8469 145.96L78.7587 134.999L89.722 128.91L95.8102 139.871Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M46.2348 107.008L100.729 38.6123L73.3434 0.0771484L46.2348 107.008Z"
              fill="#EAAF20"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.0473 142.889L46.2462 263.022L0.101562 268.544L25.0473 142.889Z"
              fill="#EAAF20"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M57.4818 111.708L196.803 23.4286L240.787 53.9804L57.4818 111.708Z"
              fill="#EAAF20"
            />
          </svg> */}
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div>
          <button
            className="font-clash-semi rounded-[15px]"
            onClick={() => window.open("/logitechmx")   }
          >
            <span className="button_top">Submit Your Idea!!</span>
          </button>
        </div>
        <div className="hidden md:flex  z-10 md:-mt-20 -mr-36 mt"></div>
      </div>
      <div className="flex items-center md:ml-10 md:mb-2 mb-7">
        <div className="text-white text-3xl font-clash-semi text-center md:text-right md:mt-4 md:mb-2 mb-5">
          <h1 className="text-[#EAAF20]">Logitech MX Master </h1>
          Series Challenge
          <br />
          {/* <p className="h-[35px] inline-block">
            <Image src="/assets/jblLogo.png" alt="" width={35} height={35} />
          </p> */}
          <span className="text-[#EAAF20] font-clash-bold text-4xl">MX Master</span>
          <span> Keyboards</span> <br />
          and other goodies
        </div>
      </div>

      <div className="absolute -bottom-20 md:-right-2 -right-7 z-10">
        <Image
          src="/assets/yellowthread.png"
          alt=""
          width={200}
          height={150}
          className="hidden-part"
        />
      </div>

      {/* <style jsx>{`
        .hidden-part {
          position: absolute;
          bottom: -100px;
          right: -40px;
        }
      `}</style> */}
      {/* <style jsx>{`
  @keyframes slow-pause-spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-godrays-spin {
    animation: slow-pause-spin 600s steps(4) infinite;
  }
`}</style> */}
      <style jsx>{`
        @keyframes slow-pause-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-godrays-spin {
          animation: slow-pause-spin 600s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Logitech;

import Image from "next/image";

export default function Dalisec() {
  return (
    <div
      className="relative w-screen h-max bg-[#FFFFFF] mt-4 md:py-40 flex flex-col md:flex-row gap-10 justify-around items-center overflow-hidden "
      style={{ backgroundImage: "url(/assets/grid.png)" }}
    >
      <div className="flex flex-col items-center gap-24  md:items-start md:absolute md:left-16 md:ml-32 md:top-1/2 md:gap-12 md:-translate-y-1/2 z-20">
        <div
          className="relative mb-4 md:mb-8"
          style={{ width: 150, height: 100 }}
        >
          <Image
            src="/assets/partners/Daliseclogowhite.png"
            alt="Dalisec Logo"
            width={500}
            height={500}
            style={{ position: "relative", zIndex: 10, top: 10 }}
          />
        </div>
        <button
          className="font-clash-semi rounded-[15px] md:mt-4 ml-2"
          onClick={() => window.open("https://dalcode-mat.dalisec.com/tasks")}
        >
          <span className="button_top">Join Now</span>
        </button>
      </div>

      <div className="flex flex-col items-center md:items-end md:ml-auto">
        <div className="flex items-center md:ml-10 md:mb-2 mb-7 mr-24">
          <div className="text-white text-3xl font-clash-semi text-center md:text-right md:mt-4 md:mb-2 mb-5">
            <h1 className="text-[#EAAF20]"> </h1>
            <br />
            <span className="text-[#EAAF20] font-clash-bold text-4xl">
              Dalcode Challenge
            </span>
            <br />
            <span className="text-[#204289] font-clash-bold text-2xl text-left">
              Prizes await the top performers!
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 md:-right-2 -right-7 z-10">
        <Image
          src="/assets/yellowthread.png"
          alt="Yellow Thread"
          width={200}
          height={150}
          className="hidden-part"
        />
      </div>

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
}

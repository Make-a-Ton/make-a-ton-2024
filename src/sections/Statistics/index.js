import collage from "../../../public/assets/collage.svg";
import man from "../../../public/assets/man.svg";
import partner from "../../../public/assets/partner.svg";
import Image from "next/image";

const stats = [
  { name: "Registrations", count: 7000, logo: man },
  { name: "Colleges", count: 50, logo: collage },
  { name: "Partners", count: 30, logo: partner },
];

const Statistics = () => {

  return (
    <div className="bg-[#F6F5F5] p-4 pt-8 ml-5 md:gap-16 justify-evenly flex items-center lg:justify-center">
      {stats.map((stat, index) => (
        <div key={index} className="mb-4 text-center">
          <div className="mb-2">
            <Image src={stat.logo} alt={stat.name} className="h-7 mx-auto" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[25px] text-[#204289] font-clash-bold font-bold">
              {stat.count}+
            </p>
            <p className="text-sm font-bold mb-1">{stat.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;

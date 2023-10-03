import React, { useEffect, useState } from "react";
import collage from "../../../public/assets/collage.svg";
import man from "../../../public/assets/man.svg";
import partner from "../../../public/assets/partner.svg";
import Image from "next/image";

const Statistics = () => {
  const stats = [
    { name: "Registrations", count: 10, logo: man },
    { name: "Collages", count: 20, logo: collage },
    { name: "Partners", count: 30, logo: partner },
  ];

  const [animatedCounts, setAnimatedCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const animationDuration = 3000; // 2 seconds
    const interval = setInterval(() => {
      const step = animationDuration / 100; // Divide animation into 100 steps

      const newAnimatedCounts = animatedCounts.map((prevCount, index) => {
        if (prevCount < stats[index].count) {
          return Math.min(prevCount + 1, stats[index].count);
        }
        return stats[index].count;
      });

      setAnimatedCounts(newAnimatedCounts);
    }, animationDuration / 100); // Update every step

    return () => clearInterval(interval);
  }, [animatedCounts, stats]);

  return (
    <div className="bg-[#F6F5F5] p-4 ml-5 md:gap-16 justify-evenly flex items-center lg:justify-center">
      {stats.map((stat, index) => (
        <div key={index} className="mb-4 text-center">
          <div className="mb-2">
            <Image src={stat.logo} alt={stat.name} className="h-7 mx-auto" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[25px] text-[#204289] font-clash-bold font-bold">
              {animatedCounts[index]}+
            </p>
            <p className="text-sm font-bold mb-1">{stat.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;

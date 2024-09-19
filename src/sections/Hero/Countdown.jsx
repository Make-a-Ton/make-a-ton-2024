import { useEffect, useState } from "react";

const endDate = new Date("2024-09-20T23:59:00");

function Number({ count, label }) {
  const [flip, setFlip] = useState("block");
  const [tens, setTens] = useState(-1);
  const [ones, setOnes] = useState(-1);

  const [next, setNextCount] = useState(-1);
  const [change, setChange] = useState(-1);

  useEffect(() => {
    setTimeout(() => setFlip("block"), 350);
    if (next === -1) setNextCount(count);

    setChange((count + 1) % 10 === 0 ? 0 : 1);

    setNextCount(tens * 10 + ones);

    setTens(Math.floor(count / 10));
    setOnes(count % 10);

    setFlip("hidden");
  }, [count]);

  return (
    <div className="text-center ">
      <p className="text-black capitalize font-satoshi-regular pb-2">{label}</p>

      {[tens, ones].map((num, index) => (
        <div
          className="digit mr-2 shadow-sm shadow-gray-400"
          data-num={num}
          key={index}
        >
          <span className="base">
            {index === 0 ? Math.floor(next / 10) : next % 10}
          </span>
          <div
            className={`flap over front ${index === change && flip} `}
            data-content={num}
          ></div>
          <div
            className={`flap over back ${index === change && flip}`}
            data-content={num}
          ></div>
          <div
            className={`flap under ${index === change && flip}`}
            data-content={num}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default function Countdown() {
  const [date, setDate] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const int = setInterval(
      () =>
        setDate(() => {
          const diff = endDate - new Date();

          return {
            day: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hour: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minute: Math.floor((diff / (1000 * 60)) % 60),
            second: Math.floor((diff / 1000) % 60),
          };
        }),
      1000
    );

    return () => clearInterval(int);
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row  w-full bg-customBlue items-center">
      <div className="clock md:w-1/2 w-full  bg-white px-5 py-8 gap-2">
        <Number count={date.day} label={"days"} />
        <Number count={date.hour} label={"hours"} />
        <Number count={date.minute} label={"minutes"} />
        <Number count={date.second} label={"seconds"} />
      </div>
      <div className="md:w-1/2 md:z-10  font-clash-bold h-full flex justify-center  items-center  md:py-2 py-4 text-center  first-letter text-3xl px-4">
        <p className="text-white text-center">
          Registration ends on 20th September
        </p>
      </div>
    </div>
  );
}

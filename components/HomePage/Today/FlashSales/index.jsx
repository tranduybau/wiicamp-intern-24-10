import React, { memo, useEffect, useState } from "react";

// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Arrow from "../../../Button/ArrowLeft";

function FlashSale() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function getNextSunday() {
      const now = new Date();
      const daysUntilSunday = 7 - now.getDay();
      const nextSunday = new Date(now);
      nextSunday.setDate(now.getDate() + daysUntilSunday);
      nextSunday.setHours(7, 0, 0, 0);
      return nextSunday;
    }

    const target = getNextSunday();

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" lg:flex gap-[87px] sm:block items-center">
      <h2 className="font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl  tracking-[1.44px] leading-[48px]">
        Flash Sales
      </h2>
      <div className="flex lg:gap-3 gap-2 md:mt-0 mt-2">
        <div>
          <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
            Days
          </p>
          <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl flex justify-center">
            {days}
          </p>
        </div>
        <span className="flex text-button-3 font-bold items-center">:</span>
        <div>
          <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
            Hours
          </p>
          <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
            {hours}
          </p>
        </div>
        <span className="flex text-button-3 font-bold items-center">:</span>
        <div>
          <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
            Minutes
          </p>
          <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
            {minutes}
          </p>
        </div>
        <span className="flex text-button-3 font-bold items-center">:</span>
        <div>
          <p className="font-poppins text-xs font-medium not-italic text-text-2 ">
            Seconds
          </p>
          <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
            {seconds}
          </p>
        </div>
      </div>
    </div>
  );
}
export default memo(FlashSale);

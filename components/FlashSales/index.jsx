import React, { memo, useEffect, useState } from "react";

function FlashSales() {
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
    <>
      <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl flex justify-center">
        {days}
      </p>
      <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
        {hours}
      </p>
      <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
        {minutes}
      </p>
      <p className="font-inter lg:text-4xl font-bold not-italic text-text-2 sm:text-2xl  flex justify-center">
        {seconds}
      </p>
    </>
  );
}
export default memo(FlashSales);

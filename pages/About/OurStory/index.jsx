import React, { memo } from "react";

function OurStory() {
  return (
    <div className="max-w-[525px]">
      <p className="font-inter text-[54px] font-semibold leading-[64px] tracking-[3.24px]">
        Our Story
      </p>
      <div className="mt-[40px] flex flex-col gap-[24px] font-poppins text-base font-normal leading-[26px]">
        <span>
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </span>
        <span>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </span>
      </div>
    </div>
  );
}
export default memo(OurStory);

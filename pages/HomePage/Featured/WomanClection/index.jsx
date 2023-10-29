import React, { memo } from "react";
import Image from "next/image";

function WomenCollection() {
  return (
    <div className="text-text-1 flex justify-end">
      <Image
        src="/img/womencollection.png"
        alt="playstation"
        // className="m-12 "
        className="w-auto "
        width={400}
        height={400}
      />
    </div>
  );
}
export default memo(WomenCollection);

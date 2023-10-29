import React, { memo } from "react";
import Image from "next/image";

function FlayStation() {
  return (
    <div className="text-text-1 flex justify-center">
      <Image
        src="/img/playstation.png"
        alt="playstation"
        className="w-auto  "
        width={600}
        height={600}
      />
    </div>
  );
}
export default memo(FlayStation);

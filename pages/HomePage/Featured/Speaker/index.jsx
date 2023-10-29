import React, { memo } from "react";
import Image from "next/image";

function Speaker() {
  return (
    <div className="text-text-1 flex justify-center ">
      <Image
        src="/img/speaker.png"
        alt="playstation"
        // className="m-12 "
        className="w-auto "
        width={300}
        height={300}
      />
    </div>
  );
}
export default memo(Speaker);

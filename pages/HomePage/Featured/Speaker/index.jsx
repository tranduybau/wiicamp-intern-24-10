// import React, { memo } from "react";
// import Image from "next/image";

// function Speaker() {
//   return (
//     <div className="text-text-1 flex justify-center ">
//       <Image
//         src="/img/speaker.png"
//         alt="playstation"
//         // className="m-12 "
//         className="w-auto "
//         width={300}
//         height={300}
//         priority
//       />
//     </div>
//   );
// }
// export default memo(Speaker);

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

function Speaker() {
  return (
    <div className="text-text-1 relative flex items-end">
      <div className="absolute ml-[24px] ">
        <h1 className="font-inter text-2xl font-semibold leading-6">
          Speakers
        </h1>
        <p className="mt-[8px] font-poppins text-sm font-normal leading-5">
          Amazon wireless speakers
        </p>
        <Link
          href="./"
          className="mt-[8px] font-poppins text-base font-medium underline leading-6"
        >
          Show now
        </Link>
      </div>
      <div className="mt-[31px] ml-[40px]">
        <Image
          src="/img/speaker.png"
          alt="playstation"
          // className="m-12 "
          className="w-full "
          width={300}
          height={300}
          priority
        />
      </div>
    </div>
  );
}
export default memo(Speaker);

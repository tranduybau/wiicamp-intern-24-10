// import React, { memo } from "react";
// import Image from "next/image";

// function WomenCollection() {
//   return (
//     <div className="text-text-1 flex justify-end max-h-[286px]">
//       <Image
//         src="/img/womencollection.png"
//         alt="playstation"
//         // className="m-12 "
//         className="w-auto "
//         width={400}
//         height={400}
//         priority
//       />
//     </div>
//   );
// }
// export default memo(WomenCollection);

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

function WomenCollection() {
  return (
    <div className="text-text-1 relative flex items-end">
      <div className="!absolute max-w-[255px] ml-[24px] mb-[24px]">
        <h1 className="font-inter text-2xl font-semibold leading-6 ">
          Women’s Collections
        </h1>
        <p className="mt-[16px]">
          Featured woman collections that give you another vibe.
        </p>
        <Link
          href="./"
          className="mt-[16px] font-poppins text-base font-medium underline leading-6"
        >
          Show now
        </Link>
      </div>
      <div className="ml-[138px]">
        <Image
          src="/img/womencollection.png"
          alt="playstation"
          // className="m-12 "
          className="w-auto "
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
export default memo(WomenCollection);

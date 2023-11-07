import React, { memo } from "react";

// eslint-disable-next-line react/prop-types
function Item({ title, icon, classCustom, name }) {
  return (
    <div className={classCustom}>
      <div className="flex justify-center ">
        <div className="bg-slate-300 p-2 rounded-full mb-6 hover:bg-slate-100">
          <p className="bg-black p-3 rounded-full hover:bg-white">
            <span className="text-text-1 hover:text-text-2">{icon}</span>
          </p>
        </div>
      </div>
      <div>
        <h2 className=" font-poppins font-bold tracking-[1.28px] text-[32px] not-italic mb-[12px] items-center flex justify-center ">
          {title}
        </h2>
        <span className="font-poppins font-normal items-center flex justify-center text-base">
          {name}
        </span>
      </div>
    </div>
  );
}
export default memo(Item);

import React, { memo } from "react";

// eslint-disable-next-line react/prop-types
function Item({ title, icon, classCustom, name }) {
  return (
    <div className={classCustom}>
      <div className="flex justify-center ">
        <div className="bg-slate-300 p-2 rounded-full mb-6">
          <p className="bg-black p-4 rounded-full">
            <span className="text-text-1 ">{icon}</span>
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-text-2 font-poppins font-semibold text-xl not-italic mb-2 items-center flex justify-center">
          {title}
        </h2>
        <span className="font-poppins font-normal items-center flex justify-center text-sm">
          {name}
        </span>
      </div>
    </div>
  );
}
export default memo(Item);

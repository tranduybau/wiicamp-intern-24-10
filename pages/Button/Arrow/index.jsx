import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// eslint-disable-next-line react/prop-types
function Arrow({ HandlePrev, HandleNext }) {
  return (
    <div className="flex gap-2 items-center">
      <button
        type="button"
        className="relative  bg-second-2 rounded-full p-1"
        onClick={HandlePrev}
      >
        <ArrowLeft size={32} />
      </button>
      <button
        type="button"
        className="relative bg-second-2 rounded-full p-1"
        onClick={HandleNext}
      >
        <ArrowRight size={32} />
      </button>
    </div>
  );
}
export default memo(Arrow);

import React, { memo } from "react";
import { ArrowRight } from "lucide-react";

// eslint-disable-next-line react/prop-types
function ArrowNext({ HandleNext }) {
  return (
    <button
      type="button"
      className="relative bg-second-2 rounded-full lg:p-1 p-0"
      onClick={HandleNext}
      id="arrowRight"
      aria-label="arrowRight"
    >
      <ArrowRight size={32} />
    </button>
  );
}
export default memo(ArrowNext);

import React, { memo } from "react";
import { ArrowUp } from "lucide-react";

function MoveTop() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container  ">
      <div className="fixed md:right-[50px] bottom-[30px] bg-second-2 rounded-full">
        <button
          onClick={handleScroll}
          className="max-w-[46px] max-h-[46px]  justify-center p-[10px] rounded-full"
          type="button"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
}

export default memo(MoveTop);

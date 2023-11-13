import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function MoveTop() {
  const [openMoveTop, setOpenMoveTop] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      if (window.scrollY > 800) {
        setOpenMoveTop(true);
      } else {
        setOpenMoveTop(false);
      }
    };

    window.addEventListener("scroll", handleOpen);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container  ">
      {" "}
      {openMoveTop && (
        <div className="fixed right-[50px] bottom-[50px] bg-second-2 rounded-full">
          <button
            onClick={handleScrollUp}
            className="max-w-[46px] max-h-[46px] w-full h-auto justify-center p-[11px] rounded-full bg-Secondary-0"
            type="button"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

export default MoveTop;

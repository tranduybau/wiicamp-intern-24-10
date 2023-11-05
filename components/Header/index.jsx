import React, { memo } from "react";

import Language from "./Language";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white">
      <Language />
      <Navigation />
    </div>
  );
}

export default memo(Header);

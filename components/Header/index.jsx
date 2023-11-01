import React, { memo } from "react";

import Language from "./Language";
import Navigation from "./Navigation";

function Header() {
  return (
    <div>
      <Language />
      <Navigation />
    </div>
  );
}

export default memo(Header);

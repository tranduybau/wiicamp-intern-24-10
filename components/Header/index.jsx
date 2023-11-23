import React, { memo } from "react";
import Head from "next/head";

import Language from "./Language";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white">
      <Head>
        <title>Home - Exclusive</title>
        {/* <meta name="description" content="Meta description for the Home page" /> */}
      </Head>
      <Language />
      <Navigation />
    </div>
  );
}

export default memo(Header);

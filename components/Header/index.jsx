import React, { memo } from "react";
import Head from "next/head";

import Language from "./Language";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white">
      <Head>
        <title>Home - Exclusive</title>
        <meta
          name="description"
          content="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!s"
        />
      </Head>
      <Language />
      <Navigation />
    </div>
  );
}

export default memo(Header);

import React, { memo } from "react";

import styles from "@/styles/header.module.css";

import Language from "./Language";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={styles.header}>
      <Language />
      <Navigation />
    </div>
  );
}

export default memo(Header);

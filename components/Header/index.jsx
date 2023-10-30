import React, { memo } from "react";

import styles from "@/styles/header.module.css";

import Language from "./Language";

function Header() {
  return (
    <div className={styles.header}>
      <Language />
    </div>
  );
}

export default memo(Header);

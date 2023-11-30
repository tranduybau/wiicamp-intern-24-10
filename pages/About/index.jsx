import React, { memo } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Delivery from "../HomePage/Services";

import Card from "./Card";
import OurStory from "./OurStory";
import Statistics from "./Statistics";

// import styles from "../../styles/about.module.css";

function About() {
  return (
    <div className="container mt-[80px] mb-[140px] lg:px-0 px-[16px]">
      <Head>
        <title>About - Exclusive</title>
        <meta
          name="description"
          content="Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. "
        />
      </Head>
      <div className="flex gap-[12px] font-poppins text-sm font-normal leading-5 ">
        <Link href="/" className="opacity-50">
          Home
        </Link>
        <p className="opacity-50">/</p>
        <Link href="/Contact" className="active:text-text-2">
          Contact
        </Link>
      </div>
      <div className="flex flex-col gap-[140px]">
        <div className="mt-[42px] lg:flex gap-[75px] items-center block">
          <OurStory />
          <div className="">
            <Image
              src="/img/about.png"
              alt="about"
              width={600}
              height={700}
              priority
            />
          </div>

          {/* <div className={styles.img} /> */}
        </div>
        <Statistics />
      </div>
      <div className="mt-[140px]">
        <Card />
      </div>
      <Delivery />
    </div>
  );
}
export default memo(About);

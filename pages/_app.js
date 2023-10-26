import React from "react";
import PropTypes from "prop-types";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import SideBar from "./SideBar";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <SideBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

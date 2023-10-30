import React from "react";
import PropTypes from "prop-types";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

// import HomePage from "./HomePage";
// import SideBar from "./SideBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* <SideBar /> */}
      {/* <HomePage /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

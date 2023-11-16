import React from "react";
import { ToastContainer } from "react-toastify";
// import { SessiomProvider } from "next-auth/react";
import PropTypes from "prop-types";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* <SessiomProvider session={pageProps.session}> */}
      <Component {...pageProps} />
      {/* </SessiomProvider> */}
      <ToastContainer />
      <Footer />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

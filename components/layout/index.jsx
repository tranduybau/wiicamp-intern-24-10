import React from "react";
import PropTypes from "prop-types";

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

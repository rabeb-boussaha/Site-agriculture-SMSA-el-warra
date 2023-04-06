import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import PreHeader from "./PreHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <PreHeader />
      <Header />

      <div className="mainLayout">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import { Footer, MobileNavbar, Navbar } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <MobileNavbar />
      </div>
    </>
  );
};

export default Layout;

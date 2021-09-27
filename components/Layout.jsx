import React from "react";
import { Footer, MobileNavbar, Navbar } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
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

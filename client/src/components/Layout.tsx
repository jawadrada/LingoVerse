import React from 'react';
import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";

function Layout({ children } : { children: React.ReactNode }) {
  return (
    <>
        <Header />
            <main>{children}</main>
        <Footer />
    </>
  );
}

export default Layout;
import React from "react";
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from "./Footer";
const Layout = ({children}) => {
  return (
    <div>
    <Head>
      <title>Smart Boost</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      {children}
    </main>
   <Footer />
  </div>
  )
};

export default Layout;

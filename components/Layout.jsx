import React from "react";
import Head from 'next/head'
import { Navbar } from './index'

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
    <footer>
      footer
    </footer>
  </div>
  )
};

export default Layout;

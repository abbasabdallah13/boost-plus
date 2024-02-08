import React from "react";
import Head from 'next/head'
import Navbar from './Navbar'
import DashboardNavbar from "./DashboardNavbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
const Layout = ({children}) => {
  const { pathname } = useRouter();

  const { cartModal, setCartModal } = useStateContext()

  return (
    <div>
    <Head>
      <title>Boost Plus</title>
    </Head>
    <header className="relative">
      {
        pathname === '/dashboard'|| pathname === '/dashboard/links/pending' || pathname === '/dashboard/links/done' || pathname === '/dashboard/Reviews' ? <DashboardNavbar /> : pathname === '/DashboardLogin' ? '' : <Navbar /> 
      }
      {
        cartModal && (
          <Cart setCartModal={setCartModal} />
        )
      }
    </header>
    <main>
      {children}
    </main>
      {
        pathname === '/DashboardLogin' || pathname === '/dashboard' || pathname === '/dashboard/links/pending' || pathname === '/dashboard/links/done' || pathname === '/dashboard/Reviews' ? '' :(
          <Footer />
        )
      }
  </div>
  )
};

export default Layout;

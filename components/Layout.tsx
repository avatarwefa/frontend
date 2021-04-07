import React, { ReactNode, useEffect, useState } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


interface Props {
  children: ReactNode,
  showFooter: boolean
}

const Layout: React.FunctionComponent<Props> = ({ children, showFooter }: Props) => {
  const [headerHeight, setHeaderHeight] = useState("0px");
  useEffect(function mount() {
    const header = document.getElementById('header');
    if (header !== null) {
      setHeaderHeight(`${header.offsetHeight}px`);
    }
  });


  return (
    <div id="wrapper">
      <Head>
        <title>Night Movie</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link rel="profile" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone-no" />

        <link rel="stylesheet" href="css/plugins.css" />
        <link rel="stylesheet" href="css/style.css" />
        <script src="js/jquery.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/plugins2.js"></script>
        <script src="js/custom.js"></script>
      </Head>
      <span className="menu-btn overlay"> </span>
      <Header />
      <div className="afterHeader" style={{ height: headerHeight }}></div>
      {children}
      {showFooter && (
        <Footer />
      )}
    </div>
  )
}

export default Layout

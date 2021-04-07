import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Login from '../components/Auththentication/Login'
import SignUp from '../components/Auththentication/SignUp'
import MovieResult from "../components/Search/SearchMovie"
import cookie from "js-cookie"

interface Props {
}

function Header({ }) {
  const [isShowHeaderModal, setIsShowHeaderModal] = useState(false);
  const [isShowFooterModal, setIsShowFooterModal] = useState(false);
  const [menuRef, setMenuRef] = useState(React.useRef(null));


  function handleClick(event: any): void {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsShowHeaderModal(false);
      setIsShowFooterModal(false);
    }
  }
  const handleClickOutside = (): any => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  };

  useEffect(() => {
    handleClickOutside();
  }, []);

  return (
    <header className="ht-header">
      {isShowHeaderModal == true && (
        <div className={"overlay openform"}>
          <div className="login-wrapper" id="login-content" ref={menuRef}>
            <Login setLoginModal={setIsShowHeaderModal} />
          </div>
        </div>
      )}
      {isShowFooterModal == true && (
        <div className="overlay openform">
          <div className="login-wrapper" id="signup-content" ref={menuRef}>
            <SignUp />
          </div>
        </div>
      )}
      <div className="container">
        <nav className="navbar navbar-default navbar-custom">
          <div className="navbar-header logo">
            <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Link href="/">
              <a><img className="logo" src="images/logo1.png" alt="" width="119" height="58" /></a>
            </Link>
          </div>
          <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav flex-child-menu menu-left">
              <li className="hidden">
                <Link href="#page-top">
                  <a></a>
                </Link>
              </li>
              <li className="dropdown first" >
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                  Trang chủ 
                </a>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  Thể loại
                </a>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  Bộ sưu tập
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav flex-child-menu menu-right">
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  pages <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="landing.html">Landing</a></li>
                  <li><a href="404.html">404 Page</a></li>
                  <li className="it-last"><a href="comingsoon.html">Coming soon</a></li>
                </ul>
              </li>
              <li><a href="#">Help</a></li>
              {
                (cookie.get('token') != null) ? (
                <li > <Link href="/userprofile"><a style={{color:"#ffffff"}}> <span style={{textTransform:"initial"}}>Xin chào, </span> {cookie.get('name')}</a></Link></li>)
                  :
                  (
                    <React.Fragment>
                      <li className="loginLink" onClick={() => (setIsShowHeaderModal(true))}><Link href=""><a> Login</a></Link></li>
                      <li className="btn signupLink" onClick={() => (setIsShowFooterModal(true))}><Link href=""><a>sign up</a></Link></li>
                    </React.Fragment>
                  )

              }
            </ul>
          </div>
        </nav>

        <div className="top-search">

          <MovieResult />
        </div>
      </div>
    </header>
  )
}

export default Header

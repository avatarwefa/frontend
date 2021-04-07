import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Coupon() {
    let isVip = true;
    return (
        <Layout showFooter={true}>
            <div className="hero user-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1 style={{ marginLeft: '25.5%', textAlign: 'left' }}>Edward kennedy</h1>
                                <ul className="breadcumb">
                                    <li className="active"><Link href="/">Trang chủ</Link></li>
                                    <li> <span className="ion-ios-arrow-right"></span><Link href="/userprofile">Tài khoản</Link></li>
                                    <li> <span className="ion-ios-arrow-right"></span>Nhập mã giảm giá</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buster-light">
                <div className="page-single">
                    <div className="container">
                        <div className="row ipad-width">
                            <div className="col-md-3 col-sm-12 col-xs-12">
                                <div className="user-information">
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="images/uploads/user-img.png" alt="" />
                                            <br></br>
                                        </a>
                                        <a href="#" className="redbtn">Thay đổi</a>
                                        <a style={{ display: isVip ? "block" : "none" }} href="#">
                                            <img className="vipstatus" src="images/uploads/vip.png" alt="" />
                                            <br></br>
                                            <p> HIỆU LỰC ĐẾN 23/4/2022 </p>
                                        </a>
                                    </div>
                                    <div className="user-fav">
                                        <p>Chi tiết tài khoản</p>
                                        <ul>
                                            <li><Link href="userprofile">Tài khoản</Link></li>
                                            <li><Link href="watchedmovies">Phim đã xem</Link></li>
                                            <li><Link href="ratedmovies">Phim đã đánh giá</Link></li>
                                        </ul>
                                    </div>
                                    <div className="user-fav">
                                        <p>Khác</p>
                                        <ul>
                                            <li><Link href="watchlater">Xem sau</Link></li>
                                            <li className="active"><Link href="coupon">Nhập mã giảm giá</Link></li>
                                            <li><Link href="coupon">Gia hạn VIP</Link></li>
                                            <li><Link href="#">Đăng xuất</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-12 col-xs-12">
                                <div className="form-style-1 user-pro" >
                                    <form action="#" className="user" style={{border:"none",marginBottom:"-30px"}}>
                                        <h4>Nhập mã giảm giá</h4>
                                        <div style={{marginTop:"-15px"}} className="row">
                                            <div className="col-md-6 form-it">
                                                <input type="text" placeholder="......................" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <input className="submit" type="submit" value="Nhập" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
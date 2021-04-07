import Link from 'next/link';
import React from 'react';

const AdminMenuBar: React.FunctionComponent = () => {
    return (
        <div className="admod-menu">
            <h4> <span className="iconify" data-icon="clarity:administrator-line" data-inline="false"></span> Admin Dashboard </h4>
            <div className="admod-menu-item menu-active">
                <Link href="/">
                    <h5> <span className="iconify" data-icon="openmoji:overview" data-inline="false"></span> Báo cáo tổng quan</h5>
                </Link>
            </div>
            <div className="admod-menu-item">
                <Link href="/">
                    <h5> <span className="iconify" data-icon="bx:bx-user-x" data-inline="false"></span> Quản lý Người dùng</h5>
                </Link>
            </div>
            <div className="admod-menu-item">
                <Link href="/">
                    <h5> <span className="iconify" data-icon="bx:bx-comment-error" data-inline="false"></span> Quản lý Bình luận</h5>
                </Link>
            </div>
            <div className="admod-menu-item">
                <Link href="/">
                    <h5> <span className="iconify" data-icon="ri:coupon-3-line" data-inline="false"></span> Quản lý Coupon</h5>
                </Link>
            </div>
            <div className="admod-menu-item border-top">
                <Link href="/">
                    <h5> <span className="iconify" data-icon="ant-design:setting-outlined" data-inline="false"></span> Cài đặt</h5>
                </Link>
            </div>
            <div className="admod-menu-item">
                <Link href="/">
                    <h5> <span className="iconify" data-icon="bx:bxs-cart-add" data-inline="false"></span> Subcription</h5>
                </Link>
            </div>
        </div>
    )
}
export default AdminMenuBar
import Link from 'next/link';
import React from 'react';

const ModMenuBar: React.FunctionComponent = () => {
    return (
        <div className="admod-menu">
            <h4> <span className="iconify" data-icon="clarity:administrator-line" data-inline="false"></span> Moderator Dashboard </h4>
            <div className="admod-menu-item menu-active">
                <Link href="/">
                    <h5> <span className="iconify" data-icon="bx:bx-camera-movie" data-inline="false"></span> Quản lý Phim</h5>
                </Link>
            </div>
            <div className="admod-menu-item">
                <Link href="/">
                    <h5> <span className="iconify" data-icon="bx:bx-category" data-inline="false"></span> Quản lý Thể loại</h5>
                </Link>
            </div>
            <div className="admod-menu-item">
                <Link href="/">
                    <h5> <span className="iconify" data-icon="bi:collection" data-inline="false"></span> Quản lý Bộ sưu tập</h5>
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
export default ModMenuBar
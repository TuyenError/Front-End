import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';



function Header() {
        return (
            <>
            <nav className="navbar">
                <div className="navbar--container">
                    <div className="navbar--left">
                        <div className="navbar__logo" href="#">
                            <Link to="/">
                                <img src="logosightglass.png" alt="logo" style={{ width: '45px', height: '45px' }} />
                            </Link>
                        </div>
                        <a className="navbar__location" href="#">
                            Địa điểm
                            <i className="fa-solid fa-caret-down" />
                        </a>
                        <ul className="navbar--categories">
                            <li className="nav--item">
                                <a className="nav--link active" href="index.html">Đồ ăn</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">Thực Phẩm</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">Bia</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">Hoa</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">Siêu Thị</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">Thuốc</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">Thú cưng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar--right">
                        <i className="fas fa-shopping-cart" style={{ cursor: 'pointer' }} />
                        <div className="login">
                            <Link to="Login" className="login--btn">Đăng Nhập</Link>
                        </div>
                        <div className="login">
                            <Link to="Register" className="login--btn">Đăng Ký</Link>
                        </div>
                        <div className="navbar__menu--toggle">
                            <i className="fa-solid fa-bars" />
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
            </>
        );
    }
export default Header;
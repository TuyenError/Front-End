import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'


function Header() {
        return (
            <>
            <nav className="navbar">
                <div className="navbar--container">
                    <div className="navbar--left">
                        <div className="navbar__logo" href="#">
                            <Link to="/">
                                <img src="../logosightglass.png" alt="logo" style={{ width: '45px', height: '45px' }} />
                            </Link>
                        </div>
                        <a className="navbar__location" href="#">
                            Đà Nẵng
                            <i className="fa-solid fa-caret-down" />
                        </a>
                        <ul className="navbar--categories">
                            <li className="nav--item">
                                <a className="nav--link active" href="index.html">Đồ Ăn</a>
                            </li>
                            <li className="nav--item">
                                <Link className="nav--link" to="shops">Shop</Link>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">Ưu Đãi</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">Sản Phẩm Hot</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">Liên Hệ</a>
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
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {/* <Dropdown.Item href="/login">Login</Dropdown.Item>
                                <Dropdown.Item href="/signup">Signup</Dropdown.Item> */}
                                <Dropdown.Item href="/user/accountsettings">Profile</Dropdown.Item>
                                <Dropdown.Item href="#">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
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
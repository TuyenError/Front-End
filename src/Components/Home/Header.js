import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from '../../Api/axios';
import swal from 'sweetalert';

function Header() {

    const handleLogout = (e) => {
        e.preventDefault();
        axios.post(`api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token',res.data.token);
                localStorage.removeItem('auth_name',res.data.username);
                swal("Success",res.data.message,"success");
            }
        })
    }
    var Nav = '';
    if (!localStorage.getItem('auth_token')) {
        Nav = (
            <div>
                <div className="login">
                    <Link to="Login" className="login--btn">Đăng Nhập</Link>
                </div>
                <div className="login">
                    <Link to="Register" className="login--btn">Đăng Ký</Link>
                </div>
            </div>
        )
    }
    else{
        Nav = (
            <div className="login">
                <button onClick={handleLogout} className="login--btn">Đăng xuất</button>
            </div>
        )
    }
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
                        {Nav}
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
import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';

class Header extends Component {
    render() {
        return (

            <nav className="navbar">
                <div className="navbar--container">
                    <div className="navbar--left">
                        <div className="navbar__logo" href="#">
                            <a href="./SightglassCoffee">
                                <img src="logosightglass.png" alt="logo" style={{ width: '45px', height: '45px' }} />
                            </a>
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
                            <a href="./login.html" className="login--btn">Đăng Nhập</a>
                        </div>
                        <div className="login">
                            <a href="SingUp" className="login--btn">Đăng Ký</a>
                        </div>
                        <div className="navbar__menu--toggle">
                            <i className="fa-solid fa-bars" />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;
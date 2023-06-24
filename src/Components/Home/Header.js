import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

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
                            Đà Nẵng
                            <i className="fa-solid fa-caret-down" />
                        </a>
                        <ul className="navbar--categories">
                            <li className="nav--item">
                                <Link className="nav--link active" to="/">
                                    Đồ Ăn
                                </Link>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="/">
                                    Shop
                                </a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">
                                    Ưu Đãi
                                </a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">
                                    Sản Phẩm Hot
                                </a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link" href="#">
                                    Liên Hệ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar--right">
                        <i className="fas fa-shopping-cart" style={{ cursor: 'pointer' }} />
                        {isLoggedIn ? (
                            <>
                                <div className="logout">
                                    <button onClick={handleLogout} className="logout-button">
                                        Wellcom!
                                    </button>
                                </div>
                                <div>
                                    {/* <img src="path_to_user_avatar" alt="User Avatar" className="avatar" /> */}
                                    <span className="fullName">Cao Tuyến</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="login">
                                    <Link to="/Login" className="login--btn">
                                        Đăng Nhập
                                    </Link>
                                </div>
                                <div className="login">
                                    <Link to="/Register" className="login--btn">
                                        Đăng Ký
                                    </Link>
                                </div>
                            </>
                        )}
                        <div className="navbar__menu--toggle">
                            <i className="fa-solid fa-bars" />
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Header;

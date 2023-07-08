import React, { Component, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from '../../Api/axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

function Header() {

    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(()=> {
        axios({
            method: 'GET',
            url: `api/get-one-user`,
            data: null
        })
        .then((res)=> {
            setUser(res.data);
        })
        .catch((err)=>{
            console.log(err);
            alert('Xảy ra lỗi');
        })
    },[]);

    const handleLogout = (e) => {
        e.preventDefault();
        axios.post(`api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token',res.data.token);
                localStorage.removeItem('auth_name',res.data.username);
                swal("Success",res.data.message,"success");
                navigate('/');
            }
        })
    }
    var Nav = '';
    if (!localStorage.getItem('auth_token')) {
        Nav = (
            <div className='account'>
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
        if (user.role_id === 2) {
            Nav = (
                <div className="login">
                    <div class="btn-group">
                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {user.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                           <Link to='information'>Thông tin cá nhân</Link>
                        </li>
                        <li>
                           <Link to='adminShow'>Cửa hàng của bạn</Link>
                        </li>
                        <li>
                           <Link to='cart'> Giỏ hàng của bạn</Link>
                        </li>
                        <li>
                            <a onClick={handleLogout}>Logout</a>
                        </li>
                    </ul>
                    </div>
                </div>
            )
        }
        else {
            Nav = (
                <div className="login">
                    <div class="btn-group">
                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {user.name}
                    </button>
                    <ul class="dropdown-menu">
                    <li>
                           <Link to='information'>Thông tin cá nhân</Link>
                        </li>
                        <li>
                           <Link to='cart'> Giỏ hàng của bạn</Link>
                        </li>
                        <li>
                            <a onClick={handleLogout}>Logout</a>
                        </li>
                    </ul>
                    </div>
                </div>
            )
        }
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
                                <Link className="nav--link active" to="/">Đồ Ăn</Link>
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
                                <Link className="nav--link" to="chinhsach">Chính sách</Link>
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
            <Footer/>
            </>
        );
    }
export default Header;
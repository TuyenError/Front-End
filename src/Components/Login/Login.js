import React, { Component } from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

class Login extends Component {
    render() {
        return (
            <div>
            {/* Form Login */ }
            < div className = "formLogin__container" >
                <div className="loginShoppe text-center">
                    <h2 className="formLogin__title">Sign up</h2>
                    <div className="phoneNumber btnSignUp"><i className="fas fa-mobile-alt icon-contact" />SỐ ĐIỆN THOẠI</div>
                    <div className="loginFacebook btnSignUp"><i className="fab fa-facebook icon-contact" />FACEBOOK</div>
                    <div className="loginGoogle btnSignUp"><i className="fab fa-google-plus icon-contact" />GOOGLE</div>
                    <p>Hoặc đăng nhập bằng tài khoản của bạn</p>
                    <form action="#">
                        <div className="userNamePassword">
                            <i className="far fa-envelope formLogin--icon" />
                            <input type="text" placeholder="Username or email" required />
                            <i className="fas fa-lock formLogin--icon" />
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="forgetPass">
                            <div>
                                <input type="checkbox" id="agree" defaultChecked />
                                <label htmlFor="agree">Lưu thông tin đăng nhập</label>
                            </div>
                            <div>
                                <a href="#">Quên mật khẩu?</a>
                            </div>
                        </div>
                        <button type="button" className="btnSubmit">Đăng Nhập</button>
                    </form>
                    <p className="rules">Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập
                        hoặc
                        đăng ký, bạn đồng ý với <a href> Chính sách quy định của Foody</a></p>
                </div>
      </div >
            </div >
        );
    }
}

export default Login;



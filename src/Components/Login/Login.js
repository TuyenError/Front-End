import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/login', { email, password });
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {/* Form Login */}
            <div className="formLogin__container">
                <div className="loginShoppe text-center">
                    <h2 className="formLogin__title">Đăng Nhập</h2>
                    <div className="phoneNumber btnSignUp">
                        <i className="fas fa-mobile-alt icon-contact" />
                        SỐ ĐIỆN THOẠI
                    </div>
                    <div className="loginFacebook btnSignUp">
                        <i className="fab fa-facebook icon-contact" />
                        FACEBOOK
                    </div>
                    <div className="loginGoogle btnSignUp">
                        <i className="fab fa-google-plus icon-contact" />
                        GOOGLE
                    </div>
                    <p>Hoặc đăng nhập bằng tài khoản của bạn</p>
                    <form onSubmit={handleLogin} action="#">
                        <div className="userNamePassword">
                            <i className="far fa-envelope formLogin--icon" />
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Username or email"
                                required
                            />
                            <i className="fas fa-lock formLogin--icon" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
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
                        <button type="submit" className="btnSubmit">
                            Đăng Nhập
                        </button>
                    </form>
                    <p className="rules">
                        Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý
                        với <a href>Chính sách quy định của Foody</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

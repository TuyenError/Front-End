import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from './schema';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const getPasswordIcon = () => {
        return isPasswordVisible ? 'lock-open' : 'lock-closed';
    };

    const handleLogin = async (values) => {
        console.log("value: ", values);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', values);

            if (response.status === 200) {
                const user = response.data;
                if (user) {
                    setLoginError(''); // Đặt thông báo lỗi đăng nhập thành chuỗi trống
                    setIsLoggedIn(true); // Đặt trạng thái đăng nhập thành true
                    navigate('/'); // Điều hướng đến trang chủ
                    alert('Bạn đã đăng nhập tài khoản thành công'); // Hiển thị thông báo đăng nhập thành công
                    localStorage.setItem('isLoggedIn', true); // Lưu trạng thái đăng nhập trong localStorage
                } else {
                    setLoginError('Mật khẩu hoặc email không tồn tại hoặc mật khẩu và email không đúng.'); // Đặt thông báo lỗi đăng nhập
                }
            } else {
                setLoginError('Đã xảy ra lỗi trong quá trình đăng nhập.'); // Đặt thông báo lỗi đăng nhập
            }
        } catch (error) {
            console.log(error);
            setLoginError('Đã xảy ra lỗi trong quá trình đăng nhập.'); // Đặt thông báo lỗi đăng nhập
        }
    };


    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        navigate('http://127.0.0.1:8000/api/users');
    };

    return (
        <div>
            {/* Form Đăng nhập */}
            <div className="formLogin__container">
                <div className="loginShoppe text-center">
                    <h2 className="formLogin__title">Đăng Nhập</h2>
                    {/* <div className="loginFacebook btnSignUp">
              <i className="fab fa-facebook icon-contact" />
              Đăng nhập bằng Facebook
          </div>
          <div className="loginGoogle btnSignUp">
              <i className="fab fa-google-plus icon-contact" />
              Đăng nhập bằng Google
          </div>
          <p>Hoặc đăng nhập bằng tài khoản của bạn</p> */}
                    <Formik
                        validationSchema={LoginSchema}
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            handleLogin(values);
                            setSubmitting(false);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="userNamePassword">
                                    <i className="far fa-envelope formLogin--icon" />
                                    <input
                                        type="text"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                    />
                                    {errors.email && touched.email && <div>{errors.email}</div>}
                                    <i className="fas fa-lock formLogin--icon" onClick={togglePasswordVisibility}>
                                        <ion-icon name={getPasswordIcon()} />
                                    </i>
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        placeholder="Mật khẩu"
                                        required
                                    />
                                    {errors.password && touched.password && <div>{errors.password}</div>}
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
                                <button type="submit" className="btnSubmit" disabled={isSubmitting}>
                                    Đăng Nhập
                                </button>
                            </form>
                        )}
                    </Formik>
                    {loginError && <p className="error-message">{loginError}</p>}
                    <p className="rules">
                        Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{' '}
                        <a href="#">Chính sách quy định của Sightglass</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

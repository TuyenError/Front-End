import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { SignupSchema } from './schema';

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        selectedOption: '',
    });

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const getPasswordIcon = () => {
        return isPasswordVisible ? 'lock-open' : 'lock-closed';
    };

    const formik = useFormik({
        initialValues: {
            fullName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            selectedOption: '',
        },
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/users');
                const users = response.data;
                const isEmailTaken = users.some((user) => user.email === values.email);

                if (isEmailTaken) {
                    console.log('Email is already taken');
                    return;
                }

                try {
                    const registerResponse = await axios.post('http://127.0.0.1:8000/api/register', values);
                    console.log('Registration successful');
                    alert('Đăng ký thành công! \n Vui lòng đăng nhập!');
                    window.location.href = 'Login';
                } catch (error) {
                    console.error(error, 'lỗi đầu');
                    // Display error message
                }
            } catch (error) {
                console.log('An error occurred:', error);
            }
        },
    });

    const { handleChange, handleSubmit, values, errors, touched } = formik;

    return (
        <div className="formLogin__container">
            <div className="loginShoppe text-center">
                <h2 className="formLogin__title">Đăng Ký</h2>
                <form onSubmit={handleSubmit}>
                    <div className="userNamePassword">
                        <i className="far fa-user formLogin--icon" />
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            onChange={handleChange}
                            value={values.fullName}
                        />
                        {errors.fullName && touched.fullName && <div>{errors.fullName}</div>}
                        <i className="fas fa-phone-alt formLogin--icon" />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            onChange={handleChange}
                            value={values.phone}
                        />
                        {errors.phone && touched.phone && <div>{errors.phone}</div>}
                        <i className="far fa-envelope formLogin--icon" />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        {errors.email && touched.email && <div>{errors.email}</div>}
                        <i className="fas fa-lock formLogin--icon" onClick={togglePasswordVisibility}>
                            <ion-icon name={getPasswordIcon()} />
                        </i>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={values.password}
                        />
                        {errors.password && touched.password && <div>{errors.password}</div>}
                        <i className="fas fa-lock formLogin--icon" onClick={togglePasswordVisibility}>
                            <ion-icon name={getPasswordIcon()} />
                        </i>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            value={values.confirmPassword}
                        />
                        {errors.confirmPassword && touched.confirmPassword && <div>{errors.confirmPassword}</div>}
                        <hr />
                        <div className="wrapper">
                            <div className="radio-item">
                                <input
                                    id="personal"
                                    name="selectedOption"
                                    type="radio"
                                    value="personal"
                                    className="radio-button"
                                    onChange={handleChange}
                                    checked={values.selectedOption === 'personal'}
                                />
                                <label htmlFor="personal" className="radio-label">
                                    Cá Nhân
                                </label>
                            </div>
                            <div className="radio-item">
                                <input
                                    id="seller"
                                    name="selectedOption"
                                    type="radio"
                                    value="seller"
                                    className="radio-button"
                                    onChange={handleChange}
                                    checked={values.selectedOption === 'seller'}
                                />
                                <label htmlFor="seller" className="radio-label">
                                    Bán Hàng
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btnSubmit">
                        Đăng Ký
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;

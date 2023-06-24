import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Field, Formik } from 'formik';
import { SignupSchema } from './schema';
import { useMutation } from 'react-query';

const Register = () => {
    const navigate = useNavigate();
    const registerMutation = useMutation((values) => axios.post(values));

    const handleRegister = async (values, actions) => {
        actions.setSubmitting(true); // Set submitting state to true

        try {
            // Check if email already exists
            const response = await axios.get('https://63aaa5e7fdc006ba6047e57c.mockapi.io/Users');
            const users = response.data;
            const duplicateEmail = users.some(user => user.email === values.email);

            if (duplicateEmail) {
                actions.setErrors({ email: 'Email already exists' });
                actions.setSubmitting(false); // Set submitting state to false
                return;
            }
            // Create a new user if email and password are unique
            await axios.post('https://63aaa5e7fdc006ba6047e57c.mockapi.io/Users', values);

            alert('Bạn đã đăng ký tài khoản thành công');
            actions.resetForm(); // Reset the form
        } catch (error) {
            console.log(error);
            alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
        } finally {
            actions.setSubmitting(false); // Set submitting state to false
        }
    };


    return (
        <div>
            <div className="formLogin__container">
                <div className="loginShoppe text-center">
                    <h2 className="formLogin__title">Đăng Ký</h2>
                    {/* <div className="loginFacebook btnSignUp">
                        <i className="fab fa-facebook icon-contact" />
                        FACEBOOK
                    </div>
                    <div className="loginGoogle btnSignUp">
                        <i className="fab fa-google-plus icon-contact" />
                        GOOGLE
                    </div>
                    <p>Hoặc đăng nhập bằng tài khoản của bạn</p> */}

                    <Formik
                        validationSchema={SignupSchema}
                        initialValues={{
                            fullName: '',
                            phone: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            selectedOption: 'personal',
                        }}
                        onSubmit={handleRegister}
                    >
                        {({ values, handleChange, handleSubmit, errors, touched, handleBlur, isSubmitting }) => {
                            console.log(values);
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div className="userNamePassword">
                                        <i className="far fa-user formLogin--icon" />
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Full Name"
                                            value={values.fullName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.fullName && touched.fullName ? (
                                            <div>{errors.fullName}</div>
                                        ) : null}
                                        <i className="fas fa-phone-alt formLogin--icon" />
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.phone && touched.phone ? (
                                            <div>{errors.phone}</div>
                                        ) : null}
                                        <i className="far fa-envelope formLogin--icon" />
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null}
                                        <i className="fas fa-lock formLogin--icon" />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                        <i className="fas fa-lock formLogin--icon" />
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        {errors.confirmPassword && touched.confirmPassword ? (
                                            <div>{errors.confirmPassword}</div>
                                        ) : null}
                                        <hr />
                                        <div className="wrapper">
                                            <Field name="selectedOption">
                                                {({ field }) => (
                                                    <>
                                                        <div className="radio-item">
                                                            <input
                                                                {...field}
                                                                id="personal"
                                                                value="personal"
                                                                checked={field.value === "personal"}
                                                                name="selectedOption"
                                                                type="radio"
                                                                className="radio-button"
                                                            />
                                                            <label htmlFor="personal" className="radio-label">Cá Nhân</label>
                                                        </div>

                                                        <div className="radio-item">
                                                            <input
                                                                {...field}
                                                                id="seller"
                                                                value="seller"
                                                                name="selectedOption"
                                                                checked={field.value === "seller"}
                                                                type="radio"
                                                                className="radio-button"
                                                            />
                                                            <label htmlFor="seller" className="radio-label">Bán Hàng</label>
                                                        </div>
                                                    </>
                                                )}
                                            </Field>
                                        </div>


                                        <hr />
                                    </div>

                                    <button type="submit" name="onSubmit" className="btnSubmit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Loading...' : 'Đăng Ký'}
                                    </button>
                                    <p className="rules">
                                        Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{' '}
                                        <a href>Chính sách quy định của Sightglass</a>
                                    </p>
                                </form>
                            );
                        }}
                    </Formik>

                    {/* Rest of the code... */}
                </div>
            </div>
        </div>
    );
};

export default Register;
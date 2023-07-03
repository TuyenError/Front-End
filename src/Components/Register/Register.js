import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import { Field, Formik } from "formik";
import { SignupSchema } from "./schema";
import { useMutation } from "react-query";
import swal from "sweetalert";
import { createBrowserHistory } from 'history';

const Register = () => {
  const navigate = useNavigate();
  const history = createBrowserHistory();
  return (
    <div>     
      <div className="formLogin__container">
        <div className="loginShoppe text-center">
          <h2 className="formLogin__title">Đăng Ký</h2>
          {/* Rest of the code... */}
          <Formik
            validationSchema={SignupSchema}
            initialValues={{
              fullName: "",
              phone: "",
              email: "",
              avatar: "",
              password: "",
              confirmPassword: "",
              selectedOption: "personal",
            }}

            onSubmit={(values, actions) => {
              setTimeout(() => {
                axios.get('/sanctum/csrf-cookie').then(response => {
                  axios.post(`http://localhost:8000/api/register/`,values).then(res => {
                    if (res.data.status === 200) {
                      localStorage.setItem('auth_token',res.data.token);
                      localStorage.setItem('auth_name',res.data.username);
                      swal('Success',res.data.message,'success');
                      history.push('/Login')
                    }
                  });
                });
                actions.resetForm();
              }, 400);
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
            }) => {
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
                      <div className="error-input">* {errors.fullName}</div>
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
                      <div className="error-input">* {errors.phone}</div>
                    ) : null}
                    <i className="far fa-envelope formLogin--icon" />
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div className="error-input">* {errors.email}</div>
                    ) : null}
                    <i className="far fa-user formLogin--icon" />
                    <input
                      type="file"
                      name="avatar"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <img
                        id="preview-image-before-upload"
                        src="https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                        alt="xem trước"
                        style={{ maxHeight: 250 }}
                    />
                    <i className="fas fa-lock formLogin--icon" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <div className="error-input">* {errors.password}</div>
                    ) : null}
                    <i className="fas fa-lock formLogin--icon" />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                    />
                    <hr />

                    <div className="wrapper">
                      <Field
                        name="selectedOption"
                        render={({ field }) => (
                          <>
                            <div className="radio-item">
                              <input
                                {...field}
                                id="personal"
                                value="personal"
                                checked={field.value === "personal"}
                                name="selectedOption"
                                type="radio"
                              />
                              <label htmlFor="personal">Personal</label>
                            </div>

                            <div className="radio-item">
                              <input
                                {...field}
                                id="seller"
                                value="seller"
                                name="selectedOption"
                                checked={field.value === "seller"}
                                type="radio"
                              />
                              <label htmlFor="seller">Seller</label>
                            </div>
                          </>
                        )}
                      />
                      {/* <label htmlFor="option-1" className="option option-1">
                        <div className="dot"></div>
                        <span>Cá Nhân</span>
                      </label>

                      <label htmlFor="option-2" className="option option-2">
                        <div className="dot"></div>
                        <span>Bán Hàng</span>
                      </label> */}
                    </div>

                    <hr />
                  </div>

                  {/* Rest of the code... */}

                  <button type="submit" className="btnSubmit">
                    Đăng Ký
                  </button>
                </form>
              );
            }}
          </Formik>

          <p className="rules">
            Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào.
            Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{" "}
            <a href> Chính sách quy định của Foody</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

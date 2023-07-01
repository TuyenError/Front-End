import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Field, Formik } from "formik";
import { SignupSchema } from "./schema";
import { useMutation } from "react-query";

const Register = () => {
  const navigate = useNavigate();

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
              //   registerMutation(values).then(() => {
              //     actions.resetForm();
              //   });
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
                    />
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
                    Đăng Nhập
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

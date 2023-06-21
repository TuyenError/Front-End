import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Api/axios";

const Login = () => {
  const navigate = useNavigate();

  const onLogin = async (values, formikHelper) => {
    try {
      await axios.post("/login", { ...values });
      formikHelper.resetForm();
      navigate("/");
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
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={onLogin}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="userNamePassword">
                  <i className="far fa-envelope formLogin--icon" />
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Username or email"
                    required
                  />
                  <i className="fas fa-lock formLogin--icon" />
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
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
            )}
          </Formik>

          <p className="rules">
            Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào.
            Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{" "}
            <a href>Chính sách quy định của Foody</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

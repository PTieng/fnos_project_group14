import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const toLogin = (event) => {
    // event.prventDefault();
    // const username = event.target.elements.username.value;
    // const password = event.target.elements.password.value;
    // if (username === "admin" && password === "123456") {
    navigate("/Home");
    // }
    toast("Chào Mừng Đến Với FNOS");
  };
  return (
    <>
      <div className="login">
        <div className="container" id="login">
          <h2 className="mt-2">Đăng nhập</h2>
          <form action="#" id="login">
            <div className="input-box">
              <input type="text" required name="username" />
              <span />
              <label htmlFor>Tên đăng nhập</label>
            </div>
            <div className="input-box">
              <input type="password" required name="password" />
              <span />
              <label htmlFor>Mật khẩu</label>
            </div>
            <div className="forgot-pass">Quên mật khẩu ?</div>
            <button onClick={toLogin} id="login" type="btn" className="btn">
              Đăng Nhập
            </button>
            <div className="sigup">
              Chưa có tài khoản <NavLink to={"/Register"}>Đăng ký</NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

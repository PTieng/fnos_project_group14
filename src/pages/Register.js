import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !phone || !password || !confirmPassword) {
      toast.error("Vui lòng nhập đầy đủ thông tin", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (password !== confirmPassword) {
      toast.warning("Mật khẩu không khớp", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/userapi", {
        name,
        email,
        phone,
        password,
      });
      console.log(response.data);
      toast.success("Đăng ký thành viên thành công", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau!");
    }
  };

  return (
    <>
      <div className="login">
        <div className="container" id="login">
          <h2 className="mt-2">Đăng ký</h2>
          <form action="#" id="login" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                required
                name="username"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <span />
              <label htmlFor>Tên đăng nhập</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                required
                name="phone"
                pattern="[0-9]{10}"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <span />
              <label htmlFor>SĐT</label>
            </div>
            <div className="input-box">
              <input
                type="email"
                required
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span />
              <label htmlFor>Email</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span />
              <label htmlFor>Mật khẩu</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <span />
              <label htmlFor>Xác Nhận Mật Khẩu</label>
            </div>
            <button id="login" type="btn" className="btn">
              Đăng Ký
            </button>

            <div className="sigup">
              Quay về trang <NavLink to={"/Login"}>Đăng Nhập</NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section id="chinh_sach" className="mb-2">
        <div className="container">
          <h3 className="text-center">HỖ TRỢ - CHÍNH SÁCH MUA HÀNG</h3>
          <div className="row mt-4">
            <div className="col-sm-6 col-md-3 col-lg-3 text-sm-left">
              <p>
                <b> Hỗ trợ khách hàng</b>
              </p>
              <div className="mt-2">
                <NavLink
                  to={"/PTThanhToan"}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Phương thức thanh toán
                </NavLink>
              </div>
              <div className="mt-2">
                <NavLink
                  to={"/CSGiaoHang"}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Chính sách giao hàng
                </NavLink>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 text-sm-left">
              <p>
                <b> Chính sách mua hàng</b>
              </p>
              <div className="mt-2">
                <NavLink
                  to={"/CSDoiHang"}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Chính sách đổi hàng
                </NavLink>
              </div>
              <div className="mt-2">
                <NavLink
                  to={"/CSDoiHang"}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Chính sách trả hàng
                </NavLink>
              </div>
              <div className="mt-2">
                <NavLink
                  to={"/PTThanhToan"}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Chính sách thanh toán
                </NavLink>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 text-sm-left">
              <p>
                <b> Cộng đồng</b>
              </p>
              <div className="mt-2">
                <a href style={{ textDecoration: "none", color: "#000" }}>
                  <i
                    className="bi bi-facebook text-left me-1"
                    style={{ color: "rgb(50, 114, 192)" }}
                  />
                  Facebook
                </a>
              </div>
              <div className="mt-2">
                <a href style={{ textDecoration: "none", color: "#000" }}>
                  <i
                    className="bi bi-instagram me-1"
                    style={{ color: "rgb(225, 149, 79)" }}
                  />
                  Instagram
                </a>
              </div>
              <div className="mt-2">
                <a href style={{ textDecoration: "none", color: "#000" }}>
                  <i
                    className="bi bi-youtube me-1"
                    style={{ color: "rgb(255, 0, 0)" }}
                  />
                  Youtube
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 text-sm-left">
              <p>
                <b> Địa chỉ cửa hàng - Liên hệ</b>
              </p>
              <div className="mt-2">
                <NavLink
                  to={"/Gioithieu"}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Thông tin liên hệ
                </NavLink>
              </div>
              <div className="mt-2">
                <NavLink
                  to={"/Gioithieu"}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Hệ thống cửa hàng
                </NavLink>
              </div>
              <div className="mt-2">
                <a href style={{ textDecoration: "none", color: "#000" }}>
                  Tuyển dụng
                </a>
              </div>
              <div className="mt-2">
                <a href style={{ textDecoration: "none", color: "#000" }}>
                  Tin tức
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer style={{ backgroundColor: "black", height: 50 }}>
        <div className="container">
          <h5 style={{ color: "aliceblue", padding: 10, textAlign: "center" }}>
            Nhóm 14 Lập Trình Front-End
          </h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;

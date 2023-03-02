import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderAdmin = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <header className="fixed-top">
      <div className="menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <NavLink to={"/admin"} className="navbar-brand">
                FNOS-Admin
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarToggleExternalContent"
              >
                <ul className="navbar-nav ml-5 text-sm-left">
                  <div className="row d-flex d-lg-none d-md-flex">
                    <div className="col-2 col-md-1 cart_buy ml-5">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-user" />
                      </button>
                    </div>
                  </div>

                  <li className="nav-item">
                    <NavLink to={"/ProductAdmin"} className="nav-link">
                      Sản Phẩm
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/UserAdmin"} className="nav-link">
                      Người Dùng
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/OrderAdmin"} className="nav-link">
                      Đơn Hàng
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to={"/Home"} className="nav-link">
                      Về Trang Chủ
                    </NavLink>
                  </li>

                  <div className="user-logout ml-5 d-none d-lg-flex">
                    <li className="nav-item dropdown">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-user" />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to={"/Login"} className="dropdown-item">
                            Đăng Xuất
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <header className="fixed-top">
      <div className="header bg-dark d-none d-lg-block d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 text-start" id="thong_bao">
              <p>Mở cửa: 8h30 - 22h, thứ 2 - CN hàng tuần</p>
            </div>
            <div className="col-lg-3 col-md-4 float-end" id="dang_nhap">
              <NavLink to={"/Register"}>Đăng Ký</NavLink>
              <span style={{ color: "white" }}>|</span>
              <NavLink to={"/Login"}>Đăng Nhập</NavLink>
              <i className="bi-person-fill text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>
                FNOS
              </Link>
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
                    <form className="col-10 col-md-11 d-flex" id="search">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sản phẩm cần tìm..."
                        required
                        minLength={4}
                      />
                      <button className="btn">
                        <i className="fa-solid fa-search fs-5" />
                      </button>
                    </form>
                    <div className="col-2 col-md-1 cart_buy ml-5">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <NavLink to={"/PageCart"}>
                          <i className="fa-solid fa-cart-shopping fs-5" />
                        </NavLink>
                      </button>
                    </div>
                  </div>
                  <li className="nav-item">
                    <NavLink to={"/GioiThieu"} className="nav-link">
                      Giới Thiệu
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Giày
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to={"/Nike"} className="dropdown-item">
                          Nike
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink to={"/Adidas"} className="dropdown-item">
                          Adidas
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink to={"/Converse"} className="dropdown-item">
                          Converse
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink to={"/MLB"} className="dropdown-item">
                          MLB
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink to={"/NewBalance"} className="dropdown-item">
                          New Blance
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink to={"/Puma"} className="dropdown-item">
                          Puma
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Quần
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to={"/Short"} className="dropdown-item">
                          Short / Jogger{" "}
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink to={"/Jeans"} className="dropdown-item">
                          Jeans
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Áo
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to={"/Tee"} className="dropdown-item">
                          Áo Thun
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink to={"/Jacket"} className="dropdown-item">
                          Áo Khoác
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/LienHe"} className="nav-link">
                      Liên Hệ
                    </NavLink>
                  </li>
                </ul>
                <form className="d-flex d-none d-lg-flex ms-3" id="search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    required
                    minLength={4}
                  />
                  <button className="btn">
                    <i className="fa-solid fa-search fs-5" />
                  </button>
                </form>
                <div className="cart_buy ml-5 d-none d-lg-flex">
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <NavLink>
                      <i className="fa-solid fa-cart-shopping fs-5" />
                    </NavLink>
                    <span> {state.length}</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

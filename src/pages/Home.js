import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { delItem } from "../redux/action";

const Home = () => {
  var total = 0;
  const state = useSelector((state) => state.handleCart);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;
  const dispatch = useDispatch();
  const handleClose = (items) => {
    dispatch(delItem(items));
  };
  const [cartQuantities, setCartQuantities] = useState({});
  const defaultQuantity = 1;

  // Set default quantity for a cart item

  const handleIncrement = (cartItem) => {
    const newQuantities = { ...cartQuantities };
    newQuantities[cartItem.id] =
      (newQuantities[cartItem.id] || defaultQuantity) + 1;
    setCartQuantities(newQuantities);
  };

  const handleDecrement = (cartItem) => {
    const newQuantities = { ...cartQuantities };
    newQuantities[cartItem.id] = Math.max(
      (newQuantities[cartItem.id] || defaultQuantity) - 1,
      0
    );
    setCartQuantities(newQuantities);
  };

  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  useEffect(() => {
    const getsProducts = async () => {
      const response = await fetch("http://localhost:3000/apiproduct");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
      }

      return () => {
        componentMounted = false;
      };
    };
    getsProducts();
  }, []);
  return (
    <>
      <section id="background">
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/bg_1.jpeg" className="d-block w-100" alt="logo" />
            </div>
            <div className="carousel-item">
              <img src="img/bg_2.jpg" className="d-block w-100" alt="logo" />
            </div>
            <div className="carousel-item">
              <img src="img/bg_3.jpg" className="d-block w-100" alt="logo" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="mt-3">
        <div id="giay">
          <div className="container">
            <p>GIÀY CHÍNH HÃNG</p>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img
                    src="img/giay/nike/nike_jordan1.jpeg"
                    alt=""
                    className="card-img giay_product"
                    id="img"
                  />
                  <div className="card-body text-center">
                    <p className="card-title">
                      <NavLink to={"/Nike"}>NIKE</NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img
                    src="img/giay/converse/converse_cdgxchunk_taylor.jpeg"
                    alt=""
                    className="card-img giay_product"
                    id="img"
                  />
                  <div className="card-body text-center">
                    <p className="card-title">
                      <NavLink to={"/Converse"}>CONVERSE</NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img
                    src="img/giay/adidas/adidas_courtbeat.jpeg"
                    alt=""
                    className="card-img giay_product"
                    id="img"
                  />
                  <div className="card-body text-center">
                    <p className="card-title">
                      <NavLink to={"/Adidas"}>ADIDAS</NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img
                    src="img/giay/mlb/mlb_bigbal_chunky_diamond.jpeg"
                    alt=""
                    className="card-img giay_product"
                    id="img"
                  />
                  <div className="card-body text-center">
                    <p className="card-title">
                      <NavLink to={"/MLB"}> MLB</NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img
                    src="img/giay/new_balance/nb_337.webp"
                    alt=""
                    className="card-img giay_product"
                    id="img"
                  />
                  <div className="card-body text-center">
                    <p className="card-title">
                      <NavLink to={"/NewBalance"}>NEW BALANCE</NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img
                    src="img/giay/puma/wmns.jpeg"
                    alt=""
                    className="card-img giay_product"
                    id="img"
                  />
                  <div className="card-body text-center">
                    <p className="card-title">
                      <NavLink to={"/Puma"}> PUMA</NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="mt-4">
          <div id="thuong_hieu">
            <div className="container text-center">
              <p>BRAND COLLAB</p>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-2">
                  <NavLink to={"/Adidas"}>
                    <img
                      src="img/adidas_logo.webp"
                      alt=""
                      className="brand_logo"
                    />
                  </NavLink>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2">
                  <a href>
                    <img
                      src="img/adlv_logo.webp"
                      alt=""
                      className="brand_logo"
                    />
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2">
                  <NavLink to={"/MLB"}>
                    <img
                      src="img/mlb_logo.webp"
                      alt=""
                      className="brand_logo"
                    />
                  </NavLink>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2">
                  <a href>
                    <img
                      src="img/essentials_logo.webp"
                      alt=""
                      className="brand_logo"
                    />
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2">
                  <NavLink to={"/Nike"}>
                    <img
                      src="img/nike_logo.webp"
                      alt=""
                      className="brand_logo"
                    />
                  </NavLink>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2">
                  <a href>
                    <img
                      src="img/balenciaga_logo.webp"
                      alt=""
                      className="brand_logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </div>

      <div>
        <section className="mt-3">
          <div id="ao">
            <div className="container">
              <p className="title">Áo</p>
              <div className="row">
                {/* ao thun */}
                <p id="ao_thun">Áo Thun</p>
                {filter.map((product) => {
                  if (product.category2 === "Teehome")
                    return (
                      <>
                        <div
                          className="col-sm-12 col-md-6 col-lg-3"
                          key={product.id}
                        >
                          <div className="card">
                            <NavLink to={`${product.id}`}>
                              <img
                                src={product.image}
                                alt=""
                                className="card-img"
                                id="img"
                              />
                            </NavLink>
                            <div className="card-body text-center">
                              <p className="card-title">
                                <NavLink to={`${product.id}`}>
                                  {product.name}
                                </NavLink>
                              </p>
                              <div className="price">{product.price}$</div>
                              <div className="cart">
                                <label htmlFor="openCart">
                                  <button onClick={() => addProduct(product)}>
                                    <i className="fa-solid fa-basket-shopping" />
                                  </button>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                })}
              </div>
              {/* end ao thun */}
              <div className="row">
                {/* ao khoac */}
                <p id="ao_khoac">Áo Khoác</p>
                {filter.map((product) => {
                  if (product.category2 === "JacketHome")
                    return (
                      <>
                        <div
                          className="col-sm-12 col-md-6 col-lg-3"
                          key={product.id}
                        >
                          <div className="card">
                            <NavLink to={`${product.id}`}>
                              <img
                                src={product.image}
                                alt=""
                                className="card-img"
                                id="img"
                              />
                            </NavLink>
                            <div className="card-body text-center">
                              <p className="card-title">
                                <NavLink to={`${product.id}`}>
                                  {product.name}
                                </NavLink>
                              </p>
                              <div className="price">{product.price}$</div>
                              <div className="cart">
                                <label htmlFor="openCart">
                                  <button onClick={() => addProduct(product)}>
                                    <i className="fa-solid fa-basket-shopping" />
                                  </button>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                })}
              </div>
              {/* end ao khoac */}
            </div>
          </div>
        </section>
        <hr />
      </div>

      <div>
        <section className="mt-3">
          <div id="quan">
            <div className="container">
              <p className="title">Quần</p>
              <div className="row">
                {/* quan short */}
                <p id="quan_short">Quần Short - Jogger</p>
                {filter.map((product) => {
                  if (product.category2 === "Shorthome")
                    return (
                      <>
                        <div
                          className="col-sm-12 col-md-6 col-lg-3"
                          key={product.id}
                        >
                          <div className="card">
                            <NavLink to={`${product.id}`}>
                              <img
                                src={product.image}
                                alt=""
                                className="card-img"
                                id="img"
                              />
                            </NavLink>
                            <div className="card-body text-center">
                              <p className="card-title">
                                <NavLink to={`${product.id}`}>
                                  {product.name}
                                </NavLink>
                              </p>
                              <div className="price">{product.price}$</div>
                              <div className="cart">
                                <label htmlFor="openCart">
                                  <button onClick={() => addProduct(product)}>
                                    <i className="fa-solid fa-basket-shopping" />
                                  </button>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                })}
              </div>
              {/* end quan short */}
              <div className="row">
                {/* quan jeans */}
                <p id="quan_jeans">Quần Jeans</p>
                {filter.map((product) => {
                  if (product.category2 === "JeansHome")
                    return (
                      <>
                        <div
                          className="col-sm-12 col-md-6 col-lg-3"
                          key={product.id}
                        >
                          <div className="card">
                            <NavLink to={`${product.id}`}>
                              <img
                                src={product.image}
                                alt=""
                                className="card-img"
                                id="img"
                              />
                            </NavLink>
                            <div className="card-body text-center">
                              <p className="card-title">
                                <NavLink to={`${product.id}`}>
                                  {product.name}
                                </NavLink>
                              </p>
                              <div className="price">{product.price}$</div>
                              <div className="cart">
                                <label htmlFor="openCart">
                                  <button onClick={() => addProduct(product)}>
                                    <i className="fa-solid fa-basket-shopping" />
                                  </button>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                })}
              </div>
              {/* end quan jeans */}
            </div>
          </div>
        </section>
        <hr />
      </div>
      {/* <section className="bang_tin">
        <div className="container">
          <div className="row">
            <h5>
              <span style={{ fontSize: 25, fontWeight: 600 }}>|</span> TƯ VẤN
              CHỌN MUA
            </h5>
            <div className="col-lg-5">
              <a href>
                <img
                  src="img/bang_tin1.webp"
                  alt=""
                  className="img-fluid"
                  style={{ height: 500 }}
                />
              </a>
              <p>
                <a href>Áo sơ mi mặc với quần gì đơn giản mà vẫn nổi bật ?</a>
              </p>
            </div>
            <div className="col-lg-3">
              <div className="col-12 d-md-none d-lg-block d-sm-block">
                <a href>
                  <img
                    src="img/bang_tin7.webp"
                    alt=""
                    className="img-fluid"
                    style={{ height: 210 }}
                  />
                </a>
                <p>
                  <a href>Hướng dẫn vệ sinh giày đúng cách</a>
                </p>
              </div>
              <div className="col-12 d-md-none d-lg-block d-sm-block">
                <a href>
                  <img
                    src="img/bang_tin3.webp"
                    alt=""
                    className="img-fluid"
                    style={{ height: 210 }}
                  />
                </a>
                <p>
                  <a href>Mẫu giày Adidas mới nhất 2023</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <a href>
                <img src="img/bang_tin2.webp" className="img-fluid" alt="" />
              </a>
              <a href>
                <img
                  src="img/bang_tin4.webp"
                  className="img-fluid mt-4"
                  alt=""
                />
              </a>
              <a href>
                <img
                  src="img/bang_tin5.webp"
                  className="img-fluid mt-4"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="card border-0 mb-3">
          <img
            src="img/bg_email.jpg"
            alt=""
            style={{ width: "auto", height: 400, opacity: "0.8" }}
            className="card-img"
          />
          <div className="card-img-overlay">
            <div className="card-title text-center">
              <h4 style={{ fontSize: 55, marginTop: 20 }}>
                ĐĂNG KÝ NHẬN BẢNG TIN
              </h4>
            </div>
            <div
              className="card-text text-center mt-4 mb-2"
              style={{ fontSize: 20 }}
            >
              <p className="mt-3">
                Hãy để lại thông tin chúng tôi sẽ liên lạc lại với bạn!
              </p>
            </div>
            <div className="card-text text-center mb-5">
              <input
                type="email"
                style={{
                  width: "50vw",
                  height: 60,
                  borderRadius: 15,
                  opacity: "0.6",
                }}
                placeholder="Nhập địa chỉ Email"
              />
              <button
                className="btn btn-dark opacity-75"
                style={{ height: 50 }}
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="modal">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-fullscreen-lg-down modal-fullscreen-sm-down modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Giỏ hàng
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* Form check product */}
                <form className="row g-3 needs-validation" validate>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-3 text-center">Ảnh</div>
                    <div className="col-4">Tên SP</div>
                    <div className="col-2">SL</div>
                    <div className="col-2">Đơn Giá</div>
                  </div>
                  {state.map((cartItems) => {
                    const quantity = cartQuantities[cartItems.id] || 1;
                    const itemTotal = quantity * cartItems.price;
                    total += itemTotal;
                    return (
                      <>
                        <div className="row mt-4">
                          <div className="col-1">
                            <button
                              type="button"
                              className="btn text-danger fs-4"
                              onClick={() => handleClose(cartItems)}
                            >
                              <i className="fa fa-circle-xmark" />
                            </button>
                          </div>
                          <div className="col-3 text-center">
                            <img src={cartItems.image} width="60" height="60" />
                          </div>
                          <div className="col-4">{cartItems.name}</div>
                          <div className="col-2">
                            <div className="row quantity">
                              {" "}
                              <button
                                type="button"
                                className="px-2 btn minus"
                                onClick={() => handleDecrement(cartItems)}
                              >
                                {" "}
                                <i className="fa-solid fa-minus" />
                              </button>
                              <span className="">{quantity}</span>{" "}
                              <button
                                type="button"
                                className="px-2 btn  plus"
                                onClick={() => handleIncrement(cartItems)}
                              >
                                <i className="fa-solid fa-plus" />
                              </button>
                            </div>
                          </div>
                          <div className="col-2">{itemTotal}$</div>
                        </div>
                      </>
                    );
                  })}
                </form>
                {/* End Form check product */}
                <hr />

                <div className="col-12 text-end">
                  <label htmlFor="productNote" className="form-label fw-bold">
                    Thành tiền: {total}$
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="submit" className="btn btn-primary" id="payment">
                  <Link to="/Payment">Thanh toán</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

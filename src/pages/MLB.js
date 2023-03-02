import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { delItem } from "../redux/action";
const MLB = () => {
  var total = 0;
  const state = useSelector((state) => state.handleCart);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;
  const dispatch = useDispatch();
  const defaultQuantity = 1;
  const [cartQuantities, setCartQuantities] = useState({});
  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  const handleIncrement = (cartItems) => {
    cartItems.preventDefault();
    const newQuantities = { ...cartQuantities };
    newQuantities[cartItems.id] =
      (newQuantities[cartItems.id] || defaultQuantity) + 1;
    setCartQuantities(newQuantities);
  };

  const handleDecrement = (cartItems) => {
    cartItems.preventDefault();
    const newQuantities = { ...cartQuantities };
    newQuantities[cartItems.id] = Math.max(
      (newQuantities[cartItems.id] || defaultQuantity) - 1,
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
      <div>
        <section className="vi_tri_trang">
          <div className="container">
            <p>
              <a href="index.html"> FNOS </a>/<a href="#"> Giày</a> /
              <a href="mlb.html">MLB</a>
            </p>
            <hr />
          </div>
        </section>
        <section className="mt-3">
          <div id="mlb">
            <div className="container">
              {/* <p class="title">Áo</p> */}
              <div className="row">
                {/* ao thun */}
                {/* <p id="ao_thun">Áo Thun</p> */}
                {filter.map((product) => {
                  if (product.category2 === "MLB")
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
              <div className="row mt-2">{/* ao khoac */}</div>
              {/* end ao khoac */}
            </div>
          </div>
        </section>
        <hr />
      </div>
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

export default MLB;

import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { delItem } from "../redux/action";
const GioiThieu = () => {
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
      <div>
        <section className="vi_tri_trang">
          <div className="container">
            <p>
              <a href="index.html"> FNOS </a>/
              <a href="gioithieu.html">Giới Thiệu</a>
            </p>
            <hr />
          </div>
        </section>
        <section id="gioi_thieu">
          <div className="container">
            <div className="title">
              <h5>Giới thiệu</h5>
              <div className="content">
                <p>
                  FNOS® - Premium Essentials Streetwear /Ép - Nót/ or
                  /First-Son/
                </p>
                <p>
                  Với trọng trách như “đứa con đầu lòng”, FNOS muốn hiện thực
                  hóa hoài bão của người sáng lập: Tạo dựng một thương hiệu thời
                  trang kiến tạo quy chuẩn mới về chất lượng và sự phù hợp để
                  nâng tầm streetwear Việt Nam. Vì đơn giản rằng, người Việt
                  chúng ta xứng đáng sở hữu những sản phẩm chất lượng quốc tế
                  với mức giá hợp lý, đặc biệt trong bối cảnh nước ta đang là
                  nước gia công sản phẩm cho nhiều nhãn hàng thời trang nổi
                  tiếng.
                </p>
              </div>
            </div>
          </div>
          <section id="he_thong">
            <div className="container">
              <div className="he_thong_1">
                <p className="chi_nhanh">1. FNOS Tân Bình</p>
                <nav>
                  <ul>
                    <li>
                      Địa chỉ: 58a Tân Thành, phường Tân Bình, quận Tân Phú,
                      TP-HCM
                    </li>
                    <li>Giờ hoạt động: 8h30 - 22h từ thứ 2 đến CN</li>
                    <li>Điện thoại: 0123.xxx.xxx</li>
                    <li>
                      Fanpage:
                      <a href>
                        <span className="text-danger">
                          https://www.facebook.com/FnosTanBinh
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="he_thong_1">
                <p className="chi_nhanh">2. FNOS Phan Huy Ích</p>
                <nav>
                  <ul>
                    <li>
                      Địa chỉ: 45 Phan Huy Ích, phường 15, quận Gò Vấp, TP HCM
                    </li>
                    <li>Giờ hoạt động: 8h30 - 22h từ thứ 2 đến CN</li>
                    <li>Điện thoại: 0123.xxx.xxx</li>
                    <li>
                      Fanpage:
                      <a href>
                        <span className="text-danger">
                          https://www.facebook.com/FnosPhanHuyIch
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
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

export default GioiThieu;

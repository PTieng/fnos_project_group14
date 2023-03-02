import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { delItem } from "../redux/action";
const PTThanhToan = () => {
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
              <a href="gioithieu.html"> Phương thức thanh toán</a>
            </p>
            <hr />
          </div>
        </section>
        <section id="gioi_thieu">
          <div className="container">
            <div className="title">
              <h5 className="text-center mt-3">Phương Thức Thanh Toán</h5>
              <div className="content">
                <div className="quy_dinh">
                  <p className="fw-bolder">I – Quy định chung</p>
                  <p className="ms-3">
                    1. Mục đích: thông báo về các hình thức thanh toán của
                    website fnos.vn đang áp dụng
                  </p>
                  <p className="ms-3">
                    2. Phạm vi áp dụng: dành cho tất cả các khách hàng mua sắm
                    tại website fnos.vn
                  </p>
                </div>
                <div className="nd_quy_dinh">
                  <p className="fw-bolder mt-3">II – Nội dung quy định</p>
                  <p>
                    Nhằm mang đến trải nghiệm mua sắm toàn diện cho quý khách
                    hàng, fnos.vn đưa ra các hình thức thanh toán tiện lợi như
                    sau:
                  </p>
                  <p className="ms-4">Chuyển khoản ngân hàng, ví điện tử</p>
                  <p className="ms-4">Thanh toán khi nhận hàng (COD)</p>
                  <p className="ms-4">Thanh toán qua Paypal</p>
                  <p className="fw-bolder mt-2">
                    Thanh toán chuyển khoản ngân hàng, ví điện tử
                  </p>
                  <p className="ms-4">
                    Quý khách vui lòng chuyển tiền vào tài khoản doanh nghiệp
                    của fnos.vn:
                  </p>
                  <p className="ms-4">8988xxxxx</p>
                  <p className="ms-4">
                    Ngân hàng Thương mại Cổ phần Quân đội (MB Bank)
                  </p>
                  <p className="fw-bolder mt-2">
                    Thanh toán khi nhận hàng (COD)
                  </p>
                  <p className="ms-4">
                    Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng.
                  </p>
                  <p className="ms-4">
                    Lưu ý: Để đem đến chất lượng dịch vụ tốt nhất cho những quý
                    khách hàng thực sự có nhu cầu của FNOS, chúng tôi xin phép
                    chỉ ship COD toàn bộ đối với các đơn hàng dưới 499.000đ.
                  </p>
                  <p className="ms-4">
                    {" "}
                    Đối với các đơn hàng có giá trị trên 499.000đ, quý khách
                    hàng vui lòng chuyển khoản trước tối thiểu 500.000 vnđ. Phần
                    còn lại của đơn hàng sẽ thanh toán cho đơn vị vận chuyển sau
                    khi quý khách nhận và kiểm tra hàng.
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </section>
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

export default PTThanhToan;

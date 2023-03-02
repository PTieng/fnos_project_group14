import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { delItem } from "../redux/action";
const CSDoiHang = () => {
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
              <a href="gioithieu.html">Chính sách đổi hàng</a>
            </p>
            <hr />
          </div>
        </section>
        <section id="gioi_thieu">
          <div className="container">
            <div className="title">
              <h5 className="text-center mt-3">Chính Sách Đổi Trả</h5>
              <div className="content">
                <div className="quy_dinh">
                  <p>Bản tóm tắt trước khi đi vào chính sách cụ thể:</p>
                  <p>
                    + Quý khách sẽ được hỗ trợ đổi size, đổi mẫu trong vòng 15
                    ngày kể từ lúc nhận hàng.
                  </p>
                  <p>
                    + Sau khi tiếp nhận thông tin sẽ có shipper qua tận nhà để
                    đổi cho quý khách, không cần trực tiếp đi gửi ở bưu điện.
                  </p>
                  <p>
                    + Quý khách có thể yêu cầu đổi size, đổi mẫu vì bất kì lí do
                    gì (01 lần trên mỗi hóa đơn).
                  </p>
                  <p>
                    + Sản phẩm hoàn lại phải còn nguyên vẹn, chưa qua sử dụng và
                    sẽ được hỗ trợ đổi qua sản phẩm mới có giá trị tương đương
                    hoặc lớn hơn giá trị sản phẩm cũ.
                  </p>
                  <p className="fw-bolder fs-5">I. QUY ĐỊNH CHUNG</p>
                  <p className="ms-3">
                    Áp dụng cho tất cả khách hàng đang sử dụng dịch vụ mua sắm
                    tại website: fnos.vn
                  </p>
                  <p className="ms-3">
                    Áp dụng đối với các phương thức thanh toán tại website:
                    website fnos.vn
                  </p>
                  <p className="ms-3">
                    Áp dụng đổi trả với các sản phẩm nguyên giá (không giảm
                    giá).
                  </p>
                  <p className="ms-3">
                    Thời hạn đổi hàng: Trong vòng 15 ngày kể từ ngày Quý khách
                    nhận được sản phẩm.
                  </p>
                  <p className="ms-3">
                    Thời hạn trả hàng: Trong vòng 03 ngày kể từ ngày Quý khách
                    nhận được sản phẩm.
                  </p>
                </div>
                <div className="nd_quy_dinh">
                  <p className="fw-bolder mt-3 fs-5">
                    II. NỘI DUNG CHÍNH SÁCH ĐỔI TRẢ
                  </p>
                  <p className="fw-bolder">
                    1. Mỗi sản phẩm chỉ được đổi trả 01 lần
                  </p>
                  <p>
                    Trong trường hợp Quý khách đổi size giày hoặc quần áo nhưng
                    sản phẩm không còn size, FNOS sẽ hỗ trợ order với mức giá ở
                    tại thời điểm đổi hàng hoặc hỗ trợ quý khách đổi sang sản
                    phẩm khác tùy sở thích.
                  </p>
                  <p className="fw-bolder">2. Giá trị sản phẩm đổi trả</p>
                  <p>
                    Bằng giá hoặc cao hơn giá trị thanh toán trên đơn hàng phát
                    sinh nhu cầu đổi/trả của Quý khách (*Lưu ý: sẽ không bao gồm
                    chi phí giao hàng), phần chênh lệch sau khi đổi sang sản
                    phẩm có giá trị thấp hơn, FNOS sẽ giữ lại dưới hình thức
                    voucher trừ trực tiếp vào đơn hàng tiếp theo.
                  </p>
                  <p className="fw-bolder">
                    3. Quy định tiếp nhận hàng gửi trả
                  </p>
                  <p>
                    Sau khi FNOS thẩm định hàng hóa trả lại từ Quý khách, trong
                    trường hợp sản phẩm không đáp ứng được các *điều kiện trả
                    hàng (mục III.1) ,FNOS sẽ từ chối giao dịch trả hàng này,
                    CSKH sẽ liên hệ Quý khách về việc nhận lại sản phẩm hoặc
                    CSKH sẽ hỗ trợ Quý khách chuyển sản phẩm trả lại theo địa
                    chỉ của Quý khách (với trường hợp này, Quý khách sẽ thanh
                    toán chi phí vận chuyển).
                  </p>
                  <p>
                    Trong trường hợp Quý khách không chấp nhận việc nhận lại sản
                    phẩm, hoặc không thanh toán chi phí vận chuyển: Sản phẩm sẽ
                    được hoàn về cho FNOS theo địa chỉ gửi và FNOS sẽ toàn quyền
                    quyết định về sản phẩm này.
                  </p>
                  <p className="fw-bolder">4. Trường hợp đổi trả</p>
                  <p>
                    Phát sinh lỗi từ phía FNOS, FNOS sẽ thanh toán chi phí vận
                    chuyển đến khách hàng.
                  </p>
                  <p>
                    Phát sinh từ nhu cầu của Quý khách, Quý khách sẽ thanh toán
                    chi phí vận chuyển hàng hóa về lại cho FNOS. Nếu không phát
                    sinh lỗi từ phía Sneaker Daily, đơn hàng sẽ chỉ được hỗ trợ
                    đổi mẫu, đổi size.
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

export default CSDoiHang;

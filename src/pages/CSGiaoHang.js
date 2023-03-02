import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { delItem } from "../redux/action";

const CSGiaoHang = () => {
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
              <a href="gioithieu.html"> Chính sách giao hàng</a>
            </p>
            <hr />
          </div>
        </section>
        <section id="gioi_thieu">
          <div className="container">
            <div className="title">
              <h5 className="text-center mt-3 fs-2">Chính Sách Giao Hàng</h5>
              <div className="content">
                <div className="quy_dinh">
                  <p className="fw-bolder fs-5">
                    I. QUY ĐỊNH THỜI GIAN GIAO HÀNG
                  </p>
                  <p className="ms-3">
                    Đơn hàng tại nội thành Hà Nội: Khách hàng sẽ nhận được trong
                    vòng 24 tiếng kể từ khi được xác nhận đơn hàng (trừ trường
                    hợp đơn hàng dạng đặt trước hoặc chưa đủ tồn kho,{" "}
                    <span className="fw-bolder"> FNOS </span>sẽ gửi đi từ kho
                    vận hành khác tỉnh và CSKH của{" "}
                    <span className="fw-bolder"> FNOS </span> sẽ thông báo cho
                    khách hàng về vấn đề này). Thông thường có thể sớm hơn tuỳ
                    thuộc vào thời gian khách hàng đặt{" "}
                    <span className="fw-bolder"> (Không tính ngày lễ)</span>.
                  </p>
                  <p className="ms-3">
                    <span className="fw-bolder">
                      {" "}
                      Các khu vực khác: 3-5 ngày
                    </span>{" "}
                    (thường là 2-3 ngày), nếu sau 5 ngày kể từ khi đặt hàng mà
                    Anh/Chị chưa nhận được cuộc gọi giao hàng của bưu tá thì vui
                    lòng xin liên hệ <span className="fw-bolder">
                      {" "}
                      FNOS{" "}
                    </span>{" "}
                    để được hỗ trợ (không bao gồm chủ nhật và ngày lễ).
                  </p>
                  <p>
                    <span className="fw-bolder"> LƯU Ý</span>: Trong trường hợp
                    khách hàng{" "}
                    <span className="fw-bolder"> cần nhận hàng gấp</span> thì có
                    thể liên hệ{" "}
                    <span className="fw-bolder">
                      {" "}
                      Hotline FNOS 0123.xxx.xxx{" "}
                    </span>
                    để được hỗ trợ.<span className="fw-bolder"> FNOS </span>sẽ
                    cố gắng bằng mọi cách có thể để giúp quý khách hàng giải
                    quyết công việc của mình
                  </p>
                  <p>
                    <span className="fw-bolder"> Phạm vi giao hàng:</span>
                  </p>
                  <p>
                    <span className="fw-bolder"> FNOS </span>phục vụ giao hàng
                    cho Khách hàng trên toàn quốc.
                  </p>
                  <p>
                    <span className="fw-bolder"> LƯU Ý</span>, thời gian giao
                    hàng dự kiến của <span className="fw-bolder"> FNOS </span>{" "}
                    sẽ tuỳ thuộc vào:
                  </p>
                  <p>
                    1. <span className="fw-bolder"> Thời gian đặt hàng:</span>{" "}
                    nếu quý khách đặt hàng sau giờ hành chính (từ 18h đến 9h
                    sáng), thời gian giao hàng sẽ cộng dồn thêm 1 ngày.
                  </p>
                  <p>
                    2.{" "}
                    <span className="fw-bolder">
                      {" "}
                      Trong các trường hợp có phát sinh dịch bệnh:
                    </span>{" "}
                    (Covid, SARS, …) hoặc trong các trường hợp bất khả kháng tại
                    thời điểm phát sinh theo quy định của cơ quan quản lý nhà
                    nước, việc giao hàng sẽ thay đổi theo tình hình thực tế về
                    quy định chuyển phát hàng hoá của nhà nước, FNOS được quyền
                    từ chối giao hàng.
                  </p>
                  <p>
                    3. Đơn hàng sẽ được giao đến địa chỉ của khách hàng, ngoại
                    trừ các trường hợp như: khu vực văn phòng hạn chế ra vào,
                    khu vực chung cư/cao tầng (chỉ phục vụ giao tại chân tòa
                    nhà) hoặc bên trong các khu vực hạn chế đi lại (khu vực quân
                    sự, biên giới,…).
                  </p>
                </div>
                <div className="nd_quy_dinh">
                  <p className="fw-bolder mt-3 fs-5">
                    II. Chính sách kiểm hàng
                  </p>
                  <p>
                    Nhằm đáp ứng nhu cầu và bảo vệ tối đa quyền lợi khách hàng
                    khi sử dụng dịch vụ, Sneaker Daily có chính sách đồng kiểm
                    khi giao hàng, quý khách được quyền yêu cầu đồng kiểm khi
                    nhận hàng và ký xác nhận vào biên bản đồng kiểm (nếu có)
                    theo hướng dẫn sau:
                  </p>
                  <p className="ms-4">
                    Kiểm tra tình trạng hộp/gói hàng: hàng được đóng gói cẩn
                    thận, bọc nguyên kiện với băng dính in chữ hàng dễ vỡ; không
                    có dấu hiệu móp, méo hay rách thủng.
                  </p>
                  <p className="ms-4">
                    Kiểm tra sản phẩm: còn nguyên tem mác, đảm bảo khớp về số
                    lượng, màu sắc, tình trạng, chủng loại, kích cỡ đúng với đơn
                    hàng của quý khách
                  </p>
                  <p className="ms-4">
                    Sau khi kiểm tra, nếu không hài lòng với tình trạng sản phẩm
                    được giao, quý khách có thể từ chối nhận hàng, liên hệ với
                    FNOS
                  </p>
                  <p className="ms-4">
                    Các sản phẩm sau khi nhận hàng phát hiện không chính hãng
                    hoặc giao chưa đúng mẫu, quý khách liên hệ trả hàng trong
                    vòng 3 ngày hoặc đổi sang mẫu khác trong vòng 45 ngày kể từ
                    thời điểm nhận hàng.
                  </p>
                  <p className="fw-bolder">
                    Lưu ý: kiểm tra ngoại quan, không bao gồm việc sử dụng thử
                    sản phẩm.
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

export default CSGiaoHang;

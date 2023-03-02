import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { delItem } from "../redux/action";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";

const AdidasItem = () => {
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

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`http://localhost:3000/apiproduct/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, []);
  return (
    <>
      <div>
        <section className="vi_tri_trang">
          <div className="container">
            <p>
              <a href="index.html"> FNOS </a>/<a href="#"> Giày</a> /
              <a href="nike.html">Adidas</a>/
              <a href="Nike_Dunk _Low_Medium _Red.html">{product.name}</a>
            </p>
            <hr />
          </div>
        </section>
        <section id="info-cart">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div
                  id="carouselExample"
                  className="carousel slide border w-100"
                >
                  <div className="carousel-inner w-100">
                    <div className="carousel-item active">
                      <img
                        src={product.image}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={product.image}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={product.image}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev justify-content-start"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-black rounded-5"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-black rounded-5"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="row w-100 mt-3" style={{ marginTop: "-40px" }}>
                  <div className="col-4">
                    <div className="img-small">
                      <img
                        src={product.image}
                        className="img-fluid mr-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="img-small">
                      <img
                        src={product.image}
                        className="img-fluid mr-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="img-small">
                      <img
                        src={product.image}
                        className="img-fluid mr-2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <h1 style={{ letterSpacing: 2 }}>{product.name}</h1>
                <br />
                <p>
                  Giày Nike Dunk Low Retro ‘Gym Red’ DD1391-602 hiện đã có sẵn
                  tại FNOS với mức giá hấp dẫn, đừng bỏ lỡ cơ hội của mình nhé!
                  Cập nhật nhanh nhất lịch ra mắt của các mẫu giày mới nhất và
                  tin tức thời trang trong nước và trên thế giới bằng cách theo
                  dõi FNOS trên Facebook hoặc Instagram.
                </p>
                <br />
                <h4>Thương hiệu: Nike</h4>
                <br />
                <h4>
                  Giá tiền:{" "}
                  <span className="text-danger"> {product.price}$</span>
                </h4>
                <br />
                <h4>
                  Size:
                  <button className="btn btn-light">37</button>
                  <button className="btn btn-light">38</button>
                  <button className="btn btn-light">39</button>
                  <button className="btn btn-light">40</button>
                  <button className="btn btn-light">40.5</button>
                  <button className="btn btn-light">41</button>
                  <button className="btn btn-light">42</button>
                  <button className="btn btn-light">42.5</button>
                </h4>
                <br />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-10 row">
                    <label className="col-lg-6 col-md-5 col-5 fs-4 fw-semibold col-form-label">
                      Số lượng:
                    </label>
                    <div className="col-lg-4 col-md-3 col-3">
                      <input
                        type="number"
                        className="form-control mt-2"
                        defaultValue={1}
                      />
                    </div>
                  </div>
                  <div className="mt-4 text-center text-lg-start">
                    <button
                      className="btn p-3 border-0 btn-danger"
                      id="add_cart"
                      onClick={() => addProduct(product)}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <button
                      className="btn p-3 border-0 ms-2 btn-primary"
                      id="buy_cart"
                    >
                      Mua ngay
                    </button>
                  </div>
                </div>
                <br />
                <h4>Lưu ý:</h4>
                <ul>
                  <li className="mt-3">
                    Với các phương pháp đo lường thủ công khác nhau, có thể có
                    sai số là bình thường.
                  </li>
                  <li className="mt-2">
                    Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế
                    của sản phẩm có thể chênh lệch khoảng 3-5%.
                  </li>
                </ul>
              </div>
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

export default AdidasItem;

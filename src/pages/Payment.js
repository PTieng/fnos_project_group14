import { useSelector } from "react-redux";
import { addCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { delItem } from "../redux/action";
const Payment = () => {
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
  const itemList = (item) => {
    return (
      <>
        <div className="row ms-2">
          <div className="col">
            <p>{item.name}</p>
          </div>
          <div className="col">
            <p>{item.price}$</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container" id="payment">
        <h5 className="text-center fs-3">Thông Tin Đặt Mua</h5>

        <div className="row mt-3 mb-3">
          <div className="col">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Họ và Tên
                </label>
                <input type="text" className="form-control w-50" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control w-50" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  SĐT
                </label>
                <input type="text" className="form-control w-50" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Địa Chỉ
                </label>
                <input type="text" className="form-control w-50" />
              </div>

              <button type="submit" className="btn btn-primary">
                Mua Hàng
              </button>
            </form>
          </div>
          <div className="col">
            <div className="card" id="donhang">
              <p className="text-center mt-2 fs-4 fw-bolder">Đơn Hàng</p>
              <hr />
              {state.map(itemList)}

              <p className="ms-3">Tổng Tiền: 600</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Payment;

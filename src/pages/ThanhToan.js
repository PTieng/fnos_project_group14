import React, { useState } from "react";
import { useSelector } from "react-redux";
const ThanhToan = () => {
  const state = useSelector((state) => state.handleCart);
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

export default ThanhToan;

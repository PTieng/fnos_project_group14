import React from "react";

const OrderAdmin = () => {
  return (
    <>
      <section id="productPage">
        <div className="container">
          <h4 className="mb-5 text-center">Danh Sách Đơn Hàng</h4>
          <div className="title">
            <p className="mt-3">
              Mã Đơn Hàng: <span>1</span>
            </p>
          </div>
          <div className="total">
            <p>
              Tổng Tiền: <span>1</span>
            </p>
          </div>
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">ID SP</th>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Hình Ảnh</th>
                <th scope="col">Loại</th>
                <th scope="col">SL</th>
                <th scope="col">Đơn Giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Áo Thun MLB</td>
                <td>
                  <img
                    src="img/ao/ao_thun/shirt_tc_1.jpg"
                    alt=""
                    width="75"
                  ></img>
                </td>
                <td>Áo Thun</td>
                <td>5</td>
                <td>300$</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Áo Thun MLB</td>
                <td>
                  <img
                    src="img/ao/ao_thun/shirt_tc_1.jpg"
                    alt=""
                    width="75"
                  ></img>
                </td>
                <td>Áo Thun</td>
                <td>5</td>
                <td>300$</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Áo Thun MLB</td>
                <td>
                  <img
                    src="img/ao/ao_thun/shirt_tc_1.jpg"
                    alt=""
                    width="75"
                  ></img>
                </td>
                <td>Áo Thun</td>
                <td>5</td>
                <td>300$</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Áo Thun MLB</td>
                <td>
                  <img
                    src="img/ao/ao_thun/shirt_tc_1.jpg"
                    alt=""
                    width="75"
                  ></img>
                </td>
                <td>Áo Thun</td>
                <td>5</td>
                <td>300$</td>
              </tr>
              <p className=" fw-bolder">Tổng tiền: 1200$</p>
            </tbody>
          </table>
          <div className="modal" tabIndex={-1} id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Thêm Sản Phẩm</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form action>
                    <div className="row mt-2">
                      <div className="col-4">
                        <label htmlFor className="mt-1">
                          Tên Sản Phẩm
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="text" className="w-75" />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-4">
                        <label htmlFor className="mt-1">
                          Loại Sản Phẩm
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="text" className=" w-75" />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-4">
                        <label htmlFor className="mt-1">
                          Miêu Tả
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="text" className="w-75" />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-4">
                        <label htmlFor className="mt-1">
                          Đơn Giá
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="number" className=" w-75" />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-4">
                        <label htmlFor className="mt-1">
                          Hình Ảnh
                        </label>
                      </div>
                      <div className="col-8">
                        <input type="file" className="w-100" />
                      </div>
                    </div>
                    <div></div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Đóng
                  </button>
                  <button type="button" className="btn btn-primary">
                    Thêm Sản Phẩm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderAdmin;

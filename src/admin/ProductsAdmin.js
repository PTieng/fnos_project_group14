import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "http://localhost:3000";

const ProductsAdmin = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    price: "",
    status: "",
    category: "",
    image: "",
  });


  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/apiproduct/${id}`);
      console.log(res.data);
      setData((prevData) => prevData.filter((item) => item.id !== id));
      toast.error("Xoá sản phẩm thành công!");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/apiproduct`, inputData);

      console.log(res.data);
      setData((prevData) => [...prevData, res.data]);
      setInputData({
        id: "",
        name: "",
        price: "",
        status: "",
        category: "",
        category2: "",
        image: "",
      });
      toast.success("Thêm sản phẩm thành công");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };





  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/apiproduct`);
        setData(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section id="productPage">
        <div className="container">
          <h4 className="text-center">Danh Sách Sản Phẩm</h4>
          <div className="justify-content-end mt-5">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Thêm Sản Phẩm
            </button>
          </div>
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Hình Ảnh</th>
                <th scope="col">Loại</th>
                <th scope="col">Đơn Giá</th>
                <th scope="col">Xoá</th>
                <th scope="col">Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <td>
                      <img src={item.image} alt={item.name} width="75" />
                    </td>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal2"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal create*/}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Thêm Sản Phẩm Mới</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <form onSubmit={handleSave}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="name">ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="id"
                      value={inputData.id}
                      onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="name">Tên Sản Phẩm:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={inputData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="status">Loại:</label>
                  <select
                    className="form-control"
                    id="category"
                    name="category"
                    value={inputData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">--Loại sản phẩm--</option>
                    <option value="Giày">Giày</option>
                    <option value="Short">Quần Short</option>
                    <option value="Jeans">Quần Jeans</option>
                    <option value="Tee">Áo Thun</option>
                    <option value="Jacket">Áo Khoác</option>
                  </select>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="status">Hãng:</label>
                  <select
                    className="form-control"
                    id="category2"
                    name="category2"
                    value={inputData.category2}
                    onChange={handleInputChange}
                  >
                    <option value="">--Hãng-</option>
                    <option value="NIKE">Nike</option>
                    <option value="CONVERSE">Converse</option>
                    <option value="ADIDAS">Adidas</option>
                    <option value="PUMA">Puma</option>
                    <option value="NB">New Balance</option>
                    <option value="MLB">MLB</option>
                  </select>
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="price">Đơn Giá:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={inputData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-2 ">
                  <label htmlFor="image">Hình Ảnh:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={inputData.image}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Thêm Sản Phẩm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal edit*/}
      <div className="modal fade" id="myModal2">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Chỉnh Sửa Sản Phẩm</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="name">ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="id"
                    value={inputData.id}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="name">Tên Sản Phẩm:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={inputData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="status">Loại:</label>
                  <select
                    className="form-control"
                    id="category"
                    name="category"
                    value={inputData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">--Loại sản phảm--</option>
                    <option value="Giày">Giày</option>
                    <option value="Quần">Quần</option>
                    <option value="Áo">Áo</option>
                  </select>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="status">Hãng:</label>
                  <select
                    className="form-control"
                    id="category2"
                    name="category2"
                    value={inputData.category2}
                    onChange={handleInputChange}
                  >
                    <option value="">--Hãng-</option>
                    <option value="NIKE">Nike</option>
                    <option value="CONVERSE">Converse</option>
                    <option value="ADIDAS">Adidas</option>
                    <option value="PUMA">Puma</option>
                    <option value="NB">New Balance</option>
                    <option value="MLB">MLB</option>
                  </select>
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="price">Đơn Giá:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={inputData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-2 ">
                  <label htmlFor="image">Hình Ảnh:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={inputData.image}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Cập Nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsAdmin;

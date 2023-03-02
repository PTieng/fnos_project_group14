import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "http://localhost:3000";
const UserAdmin = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/userapi/${id}`);
      console.log(res.data);
      setData((prevData) => prevData.filter((item) => item.id !== id));
      toast.error("Xoá tài khoản người dùng thành công!");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/userapi`);
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
          <h4 className="text-center">Danh Sách Người Dùng</h4>
          <div className="justify-content-end mt-5"></div>
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Họ Tên</th>
                <th scope="col">Email</th>
                <th scope="col">SĐT</th>
                <th scope="col">Xoá</th>
                <th scope="col">Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>

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
                      data-bs-target="#myModal"
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

      {/* Modal edit*/}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Chỉnh Sửa Thông Tin</h4>
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
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="name">Họ Tên:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="price">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="price"
                    name="price"
                  />
                </div>
                <div className="form-group mt-2 ">
                  <label htmlFor="image">SĐT:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
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

export default UserAdmin;

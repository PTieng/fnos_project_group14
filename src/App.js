import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutHomeAdmin from "./admin/LayoutHomeAdmin";
import LayoutProductAdmin from "./admin/LayoutProductAdmin";
import LayoutUserAdmin from "./admin/LayoutUserAdmin";
import LayouyOrderAdmin from "./admin/LayouyOrderAdmin";
import LoginAdmin from "./admin/LoginAdmin";

import DefaultLayout from "./container/DefaultLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.css";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<DefaultLayout />} />
      <Route path="/admin" element={<LoginAdmin />} />
      <Route path="/HomeAdmin" element={<LayoutHomeAdmin />} />
      <Route path="/ProductAdmin" element={<LayoutProductAdmin />} />
      <Route path="/UserAdmin" element={<LayoutUserAdmin />} />
      <Route path="/OrderAdmin" element={<LayouyOrderAdmin />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;

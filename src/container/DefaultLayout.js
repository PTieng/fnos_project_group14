import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
const DeufaultLayout = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default DeufaultLayout;

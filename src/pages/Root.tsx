import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import BurgerMenu from "../components/BurgerMenu";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;

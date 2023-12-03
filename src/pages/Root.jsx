import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import BurgerMenu from "../components/BurgerMenu";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
    setMenuIsClicked((prev) => !prev);
  };

  return (
    <div>
      <Header onButtonClick={handleButtonClick} displayMenu={menuIsClicked} />
      <div>
        {isOpen && <BurgerMenu onButtonClick={handleButtonClick} />}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;

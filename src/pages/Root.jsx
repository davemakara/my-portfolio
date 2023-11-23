import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Root.module.css";

import Header from "../components/Header";
import BurgerMenu from "../components/BurgerMenu";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <Header onButtonClick={handleButtonClick} />
      <div className={styles.sectionWrapper}>
        {isOpen && <BurgerMenu />}
        <Outlet />
      </div>
    </Fragment>
  );
};

export default RootLayout;

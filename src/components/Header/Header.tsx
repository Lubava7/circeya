import React from "react";
import header from "./Header.module.css";
import { ReactComponent as Logo } from "src/img/logo.svg";
import { ReactComponent as LogoText } from "src/img/logoText.svg";
import { ReactComponent as Phone } from "src/img/phone.svg";

const Header = () => {
  return (
    <div className={header.header}>
      <div className={header.logo}>
        <Logo />
        <LogoText />
      </div>
      <div className={header.phone}>
        <a href="tel:+74954954954" className={header.icon}>
          <Phone />
        </a>
        <a href="tel:+74954954954" className={header.tel}>
          +7 (495) 495-49-54
        </a>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { ReactComponent as CartSVG } from "./../assets/svg/cart.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container flex">
        <div className="header__left">
          <a className="logo header__logo">SneakMax</a>
        </div>
        <div className="header__right flex">
          <nav className="nav header__nav">
            <ul className="nav__list list-reset">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Каталог
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  О нас
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Подборка товара
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Наша команда
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Доставка и оплата
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className="cart header__cart">
            <button className="btn-reset cart__btn">
              <CartSVG />
              <div className="cart_count">1</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

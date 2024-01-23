import React from "react";
import { ReactComponent as VKSVG } from "./../assets/svg/VK.svg";
import { ReactComponent as InstSVG } from "./../assets/svg/Instagram.svg";
const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container contacts__container">
        <div className="contacts__text">
          <h2 className="title contacts__text__title">Контакты</h2>
          <address className="contacts__text__item">
            <h3 className="contacts__text__item--subtitle">
              Главный офис
              <div className="contacts__text__item--subtitle--tooltip-container">
                ?
                <div className="contacts__text__item--subtitle--tooltip-container--tooltip">
                  Адрес и&nbsp;телефон для корреспонденции, инвесторов. Вопросы
                  о&nbsp;доставке, качестве обслуживания и&nbsp;товара просьба
                  задавать в&nbsp;отдел продаж
                </div>
              </div>
            </h3>
            <a href="#" className="contacts__text__item--phone">
              +7 800 789 89 89
            </a>
            <span className="contacts__text__item--address">
              г. Санкт-Петербург, Комсомольская, 43 к1
            </span>
          </address>
          <address className="contacts__text__item">
            <h3 className="contacts__text__item--subtitle">отдел продаж</h3>
            <a href="#" className="contacts__text__item--phone">
              +7 800 789 89 89
            </a>
            <span className="contacts__text__item--address">
              г. Санкт-Петербург, Комсомольская, 43 к1
            </span>
          </address>
          <ul className="list-reset contacts__text__socials">
            <li className="contacts__text__socials__item">
              <a
                target="_blank"
                href="https://vk.com/"
                className="contacts__text__socials__item--icon"
                aria-label="Мы во Вконтакте"
              >
                <VKSVG />
              </a>
            </li>
            <li className="contacts__text__socials__item">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="contacts__text__socials__item--icon"
                aria-label="Мы в Инстаграмм"
              >
                <InstSVG />
              </a>
            </li>
          </ul>
        </div>
        <div className="contacts__map"></div>
      </div>
    </section>
  );
};

export default Contacts;

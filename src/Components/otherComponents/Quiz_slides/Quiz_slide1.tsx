import React from "react";
import { ISlideProps } from "../../Quiz_slider";
import Slide_header from "./Slide_header";

const Quiz_slide1 = ({ setQuizPage, quizPage }: ISlideProps) => {
  const nextSlide = () => {
    setQuizPage((prev) => prev + 1);
  };

  return (
    <div className="slide__wrap container">
      <div className="slide__content">
        <Slide_header />
        <div className="slide__content-question">
          <h3 className="slide__content-question__title">
            Какой тип кроссовок рассматриваете?
          </h3>
          <ul className="slide__content-question__answers-container grid">
            <li className="question__answers__item">
              <img
                src="https://outmaxshop.ru/components/com_jshopping/files/img_products/3185/nike-air-max-1-mid-3185-1.jpg"
                alt=""
              />
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">Мужской</span>
              </label>
            </li>{" "}
            <li className="question__answers__item">
              <img
                src="https://outmaxshop.ru/components/com_jshopping/files/img_products/3185/nike-air-max-1-mid-3185-1.jpg"
                alt=""
              />
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">Мужской</span>
              </label>
            </li>
            <li className="question__answers__item">
              <img
                src="https://outmaxshop.ru/components/com_jshopping/files/img_products/3185/nike-air-max-1-mid-3185-1.jpg"
                alt=""
              />
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">Мужской</span>
              </label>
            </li>
            <li className="question__answers__item">
              <img
                src="https://outmaxshop.ru/components/com_jshopping/files/img_products/3185/nike-air-max-1-mid-3185-1.jpg"
                alt=""
              />
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">Мужской</span>
              </label>
            </li>
            <li className="question__answers__item">
              <img
                src="https://outmaxshop.ru/components/com_jshopping/files/img_products/3185/nike-air-max-1-mid-3185-1.jpg"
                alt=""
              />
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">Мужской</span>
              </label>
            </li>
            <li className="question__answers__item">
              <img
                src="https://outmaxshop.ru/components/com_jshopping/files/img_products/3185/nike-air-max-1-mid-3185-1.jpg"
                alt=""
              />
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">Мужской</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="slide__content-footer">
          <span className="slide__content-footer__counter">
            {quizPage} из 4
          </span>
          <div className="slide__content-footer__buttons-group">
            <button onClick={nextSlide} className="btn btn-reset next">
              Следующий шаг
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz_slide1;

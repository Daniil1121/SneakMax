import React from "react";
import Slide_header from "./Slide_header";
import { ISlideProps } from "./../../Quiz_slider";

const Quiz_slide2 = ({ setQuizPage, quizPage }: ISlideProps) => {
  const nextSlide = () => {
    setQuizPage((prev) => prev + 1);
  };

  const prevSlide = () => {
    setQuizPage((prev) => prev - 1);
  };
  return (
    <div className="slide__wrap container">
      <div className="slide__content">
        <Slide_header />{" "}
        <div className="slide__content-question">
          <h3 className="slide__content-question__title">
            Какой размер вам подойдет?
          </h3>
          <ul className="slide__content-question__answers-container">
            <li className="question__answers__item">
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">менее 36</span>
              </label>
            </li>
            <li className="question__answers__item">
              {" "}
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">36-38</span>
              </label>
            </li>
            <li className="question__answers__item">
              {" "}
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">39-41</span>
              </label>
            </li>
            <li className="question__answers__item">
              {" "}
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">42-44</span>
              </label>
            </li>
            <li className="question__answers__item">
              {" "}
              <label className="custom-checkbox" htmlFor="1">
                <input
                  id="1"
                  className="custom-checkbox__field"
                  type="checkbox"
                />
                <span className="checkbox__content">45 и больше</span>
              </label>
            </li>
          </ul>
          <div className="slide__content-question__image-container">
            <img
              src="https://sneakers-type.ru/wp-content/uploads/2021/07/Krossovki-Nike-Air-Force-1-LV8-Utility-Red-2-e1626658328434.jpg"
              alt="фоновое изображение"
            />
          </div>
        </div>
        <div className="slide__content-footer">
          <span className="slide__content-footer__counter">
            {quizPage} из 4
          </span>
          <div className="slide__content-footer__buttons-group">
            <button onClick={prevSlide} className="btn btn-reset prev">
              Предыдущий шаг
            </button>
            <button onClick={nextSlide} className="btn btn-reset next">
              Следующий шаг
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz_slide2;

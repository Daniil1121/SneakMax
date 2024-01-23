import { ISlideProps } from "../../Quiz_slider";
import Slide_header from "./Slide_header";

const Quiz_slide3 = ({ setQuizPage, quizPage }: ISlideProps) => {
  const nextSlide = () => {
    setQuizPage((prev) => prev + 1);
  };

  const prevSlide = () => {
    setQuizPage((prev) => prev - 1);
  };

  return (
    <div className="slide__wrap container">
      <div className="slide__content">
        <Slide_header />
        <div className="slide__content-question">
          <h3 className="slide__content-question__title">
            Уточните какие-либо моменты
          </h3>
          <div className="slide__content-question__answers-container">
            <textarea
              className="slide__content-question__answers-container__textarea"
              placeholder="Введите сообщение"
              rows={10}
              cols={50}
            ></textarea>
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

export default Quiz_slide3;

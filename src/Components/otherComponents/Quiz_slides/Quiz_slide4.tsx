import { ISlideProps } from "../../Quiz_slider";
import { ReactComponent as PhoneSVG } from "./../../../assets/svg/phone.svg";
import { ReactComponent as SuccessSVG } from "./../../../assets/svg/success.svg";

const Quiz_slide4 = ({ setQuizPage, quizPage }: ISlideProps) => {
  const prevSlide = () => {
    setQuizPage((prev) => prev - 1);
  };

  return (
    <div className="slide__wrap container">
      <div className="slide__content">
        <div className="slide__content-header">
          <h3 className="title slide__content-header--title">
            Ваша подборка готова!
          </h3>
          <p className="slide__content-header--descr">
            Оставьте свои контактные данные, чтобы бы мы могли отправить
            подготовленный для вас каталог
          </p>
        </div>
        <div className="slide__content-question">
          <div className="slide__content-question--contacts-wrapper">
            <h3 className="title slide__content-question--contacts-wrapper-title">
              Получить предложение
            </h3>
            <span className="slide__content-question--contacts-wrapper-descr">
              Получите подборку подходящих для вас моделей на почту
            </span>
            <input
              placeholder="Ваше имя"
              className="slide__content-question--contacts-wrapper-input"
              type="text"
            />
            <input
              placeholder="E-mail"
              className="slide__content-question--contacts-wrapper-input"
              type="text"
            />
            <button className="btn-reset btn slide__content-question--contacts-wrapper-button">
              Получить
            </button>
            <div className=" slide__content-question--contacts-wrapper--svg-wrapper">
              <PhoneSVG />
              <SuccessSVG />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz_slide4;

import React from "react";

const SocialNetwork = () => {
  return (
    <section className="instagram">
      <div className="container instagram__container">
        <div className="instagram__left">
          <form action="#" className="question__form">
            <h3 className="question__form__title">Есть вопросы?</h3>
            <p className="question__form__descr">
              Заполните форму и&nbsp;наш менеджер свяжется с&nbsp;вами
            </p>
            <input
              placeholder="Ваше имя"
              type="text"
              className="question__form__input"
            />
            <input
              placeholder="Номер телефона"
              type="tel"
              className="question__form__input"
            />
            <button className="btn btn-reset btn--primary">Отправить</button>
          </form>
        </div>
        <div className="instagram__right"></div>
      </div>
    </section>
  );
};

export default SocialNetwork;

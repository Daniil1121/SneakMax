import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <span className="hero__bg-text" aria-hidden="true">
        SneakMax
      </span>
      <div className="container hero__container flex">
        <h1 className="hero__title">
          Кроссовки известных брендов с&nbsp;доставкой по&nbsp;России и&nbsp;СНГ
        </h1>
        <p className="hero__description">
          Мы&nbsp;продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse
          и&nbsp;многие другие по&nbsp;низким ценам
        </p>
        <button className="btn-reset btn btn--primary">
          Перейти к покупкам
        </button>
      </div>
    </section>
  );
};

export default Hero;

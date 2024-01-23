import React, { useState } from "react";
import { ReactComponent as IconSVG } from "./../assets/svg/accordionIcon.svg";

const FAQ = () => {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="title faq__title">Часто задаваемые вопросы</h2>
        <ul className="list-reset faq__accordion__list">
          <FAQItem
            answer="Вопрос 1"
            question="А это ответ 1: в комплексе функционируют 6 детских садов с площадками,
        воспитателями и всякими другими людьми"
          />
          <FAQItem
            answer="Вопрос 2"
            question="А это ответ 2: в комплексе функционируют 6 детских садов с площадками,
        воспитателями и всякими другими людьми"
          />
        </ul>
      </div>
    </section>
  );
};

export default FAQ;

const FAQItem = ({
  answer,
  question,
}: {
  answer: string;
  question: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={`faq__accordion__list--item ${isOpen ? "" : "close"}`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="btn-reset faq__accordion__list--item-control"
      >
        <span className="btn-reset faq__accordion__list--item-control-title">
          {answer}
        </span>
        <span
          className={`btn-reset faq__accordion__list--item-control-icon ${
            isOpen ? "" : "close"
          }`}
        >
          <IconSVG />
        </span>
      </button>
      <p
        className={`faq__accordion__list--item-content ${isOpen ? "open" : ""}`}
      >
        {question}
      </p>
    </li>
  );
};

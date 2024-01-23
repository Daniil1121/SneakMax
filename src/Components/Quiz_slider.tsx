import { useState } from "react";
import Quiz_slide1 from "./otherComponents/Quiz_slides/Quiz_slide1";
import Quiz_slide2 from "./otherComponents/Quiz_slides/Quiz_slide2";
import Quiz_slide3 from "./otherComponents/Quiz_slides/Quiz_slide3";
import Quiz_slide4 from "./otherComponents/Quiz_slides/Quiz_slide4";

export interface ISlideProps {
  setQuizPage: React.Dispatch<React.SetStateAction<number>>;
  quizPage: number;
}

const Quiz = () => {
  const [quizPage, setQuizPage] = useState(1);

  return (
    <section className="quiz">
      <div className={`quiz__container show-${quizPage}-slide`}>
        <Quiz_slide1 quizPage={quizPage} setQuizPage={setQuizPage} />
        <Quiz_slide2 quizPage={quizPage} setQuizPage={setQuizPage} />
        <Quiz_slide3 quizPage={quizPage} setQuizPage={setQuizPage} />
        <Quiz_slide4 quizPage={quizPage} setQuizPage={setQuizPage} />
      </div>
    </section>
  );
};

export default Quiz;

import aboutImg from "../assets/image/about.jpg";
import { useEffect, useRef } from "react";

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    canvasRef.current!.width = 500;
    canvasRef.current!.height = 500;

    let x = 100;
    let y = -10;
    let angle = -0.1;
    const rad = 200;
    let posY = y + rad * Math.sin(angle);
    let posX = rad * Math.cos(angle);
    let angleTest = 0;
    let bool = false;
    const draw = () => {
      requestAnimationFrame(draw);

      ctx?.clearRect(0, 0, 500, 500);
      ctx?.beginPath();
      ctx?.arc(x, y, rad, 0, Math.PI * 2, false);
      ctx!.strokeStyle = "white";
      ctx?.stroke();
      ctx?.beginPath();
      if (bool) {
        angleTest = -Math.PI * 0.003;
      } else {
        angleTest = +Math.PI * 0.003;
      }
      if (posX < 10) {
        bool = true;
      } else if (posY < 10) {
        bool = false;
      }
      angle += angleTest;
      posY = y + rad * Math.sin(angle);
      posX = x + rad * Math.cos(angle);

      ctx?.beginPath();
      ctx?.arc(-210, 50, 350, 0, Math.PI * 2, false);
      ctx!.strokeStyle = "white";
      ctx?.stroke();

      ctx?.beginPath();
      ctx?.arc(posX, posY, 10, 0, Math.PI * 2);
      ctx!.fillStyle = "#F14F4F";
      ctx?.fill();
    };

    requestAnimationFrame(draw);
  }, []);

  return (
    <section className="about">
      <canvas ref={canvasRef}></canvas>
      <div className="container about__container">
        <div className="about__text">
          <h2 className="title about__text--title">Пара слов о нас</h2>
          <p className="about__text--descr">
            <q>
              Спорт держит нас в&nbsp;форме. Учит дисциплине. Объединяет нас.
              Через спорт мы&nbsp;можем менять жизни. В&nbsp;том числе
              с&nbsp;помощью воодушевляющих историй спортсменов. Чтобы помочь
              тебе подняться и&nbsp;двигаться вперед.
            </q>
            <cite>SneakMax</cite>
          </p>
        </div>
        <div className="about__image">
          <img src={aboutImg} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default About;

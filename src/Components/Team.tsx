import React, { useEffect, useRef } from "react";

const Team = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const testRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    canvasRef.current!.width =
      testRef.current?.clientWidth || window.innerWidth;
    canvasRef.current!.height =
      testRef.current?.clientHeight || window.innerHeight;
    const rad = 200;
    let posY = 300;
    let posX = 700;
    let speedX = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let speedY = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let boolX = false;
    let boolY = false;

    const rad2 = 400;
    let posY2 = 600;
    let posX2 = 700;
    let speedX2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let speedY2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let boolX2 = false;
    let boolY2 = false;
    const drawAll = () => {
      requestAnimationFrame(drawAll);
      draw();
      draw2();
      draw3();
    };

    const draw2 = () => {
      if (boolX2) {
        posX2 += speedX2;
      } else {
        posX2 -= speedX2;
      }
      if (boolY2) {
        posY2 -= speedY2;
      } else {
        posY2 += speedY2;
      }
      if (posX2 < rad2 || posX2 > testRef.current?.clientWidth! - rad2) {
        boolX2 = !boolX2;
      }
      if (posX2 < rad2 && !boolX2) {
        boolX2 = false;
        speedX2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        speedY2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }
      if (posX2 > testRef.current?.clientWidth! - rad2 && boolX2) {
        boolX2 = true;
        speedX2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        speedY2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }

      if (posY2 < rad2 && boolY2) {
        boolY2 = false;
        speedX2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        speedY2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }
      if (posY2 > testRef.current?.clientHeight! - rad2 && !boolY2) {
        boolY2 = true;
        speedX2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        speedY2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }
      ctx?.beginPath();
      ctx?.arc(posX2, posY2, rad2, 0, Math.PI * 2);
      ctx!.strokeStyle = "white";
      ctx?.stroke();
    };

    const draw3 = () => {
      ctx?.beginPath();
      ctx?.arc(600, -300, 600, 0, Math.PI * 2);
      ctx!.strokeStyle = "white";
      ctx?.stroke();
    };

    const draw = () => {
      ctx?.clearRect(0, 0, 10000, 10000);

      if (boolX) {
        posX += speedX;
      } else {
        posX -= speedX;
      }
      if (boolY) {
        posY -= speedY;
      } else {
        posY += speedY;
      }
      if (posX < 200 || posX > testRef.current?.clientWidth! - 200) {
        boolX = !boolX;
      }
      if (posX < 200 && !boolX) {
        boolX = false;
        speedX = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        speedY = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }
      if (posX > testRef.current?.clientWidth! - 200 && boolX) {
        boolX = true;
        speedX = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        speedY = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }

      if (posY < 200 && boolY) {
        boolY = false;
        speedX = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        speedY = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }
      if (posY > testRef.current?.clientHeight! - 200 && !boolY) {
        boolY = true;
        speedX = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        speedY = Math.floor(Math.random() * (5 - 1 + 1) + 1);
      }
      ctx?.beginPath();
      ctx?.arc(posX, posY, rad, 0, Math.PI * 2);
      ctx!.fillStyle = "#F14F4F";
      ctx?.fill();
    };

    requestAnimationFrame(drawAll);
  }, []);

  return (
    <section ref={testRef} className="team">
      <canvas ref={canvasRef}></canvas>

      <div className="container">
        <h2 className="title team__title">Наша команда</h2>
        <ul className="team__list list-reset">
          <li className="team__list__item">
            <img
              src="https://picsum.photos/350/400?random=1"
              alt="Фотография члена команды"
              className="team__list__item--img"
            />
            <strong className="team__list__item--subtitle">
              Максим Золотарёв
            </strong>
            <span className="team__list__item--post">Администратор</span>
          </li>
          <li className="team__list__item">
            <img
              src="https://picsum.photos/350/400?random=1"
              alt="Фотография члена команды"
              className="team__list__item--img"
            />
            <strong className="team__list__item--subtitle">
              Максим Золотарёв
            </strong>
            <span className="team__list__item--post">Администратор</span>
          </li>
          <li className="team__list__item">
            <img
              src="https://picsum.photos/350/400?random=1"
              alt="Фотография члена команды"
              className="team__list__item--img"
            />
            <strong className="team__list__item--subtitle">
              Максим Золотарёв
            </strong>
            <span className="team__list__item--post">Администратор</span>
          </li>
          <li className="team__list__item">
            <img
              src="https://picsum.photos/350/400?random=1"
              alt="Фотография члена команды"
              className="team__list__item--img"
            />
            <strong className="team__list__item--subtitle">
              Максим Золотарёв
            </strong>
            <span className="team__list__item--post">Администратор</span>
          </li>
          <li className="team__list__item">
            <img
              src="https://picsum.photos/350/400?random=1"
              alt="Фотография члена команды"
              className="team__list__item--img"
            />
            <strong className="team__list__item--subtitle">
              Максим Золотарёв
            </strong>
            <span className="team__list__item--post">Администратор</span>
          </li>
          <li className="team__list__item">
            <img
              src="https://picsum.photos/350/400?random=1"
              alt="Фотография члена команды"
              className="team__list__item--img"
            />
            <strong className="team__list__item--subtitle">
              Максим Золотарёв
            </strong>
            <span className="team__list__item--post">Администратор</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;

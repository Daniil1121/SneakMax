import { ReactComponent as ShowSVG } from "./../assets/svg/show.svg";
import { ReactComponent as CartSVG } from "./../assets/svg/cart.svg";
import { useEffect, useState } from "react";
import MultiRange from "./otherComponents/MultiRange";
import { useRef } from "react";

const Catalog = () => {
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);
  const [sticky, setSticky] = useState(true);

  const onChange = (obj: any) => {
    setMax(obj["max"]);
    setMin(obj["min"]);
  };

  const refButton = useRef<HTMLButtonElement | null>(null);
  const refLeft = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollListener = () => {
      const scr =
        refButton?.current?.offsetTop! -
        refLeft?.current?.offsetHeight! -
        refLeft?.current?.offsetTop! -
        50;

      if (scr < 0) {
        setSticky(false);
      }
      // if (
      //   refButton?.current?.offsetTop! -
      //     refLeft?.current?.offsetHeight! -
      //     refLeft?.current?.offsetTop! -
      //     50 <
      //   0
      // ) {
      //   setSticky(false);
      // }
      // if (
      //   refButton?.current?.offsetTop! -
      //     refLeft?.current?.offsetHeight! -
      //     refLeft?.current?.offsetTop! -
      //     50 >
      //   0
      // ) {
      //   setSticky(true);
      // }
    };
    scrollListener();
    document.addEventListener("scroll", scrollListener);

    return () => document.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <section className="catalog">
      <div className="container catalog__container">
        <h2 className="title catalog__title">Каталог</h2>
        <div className="catalog__content flex">
          <div
            ref={refLeft}
            className={`catalog__left ${sticky ? "sticky" : ""}`}
          >
            <h3 className="catalog__subtitle">Подбор по&nbsp;параметрам</h3>
            <div className="catalog__prop">
              <strong className="catalog__caption">Цена, руб</strong>
              <div className="catalog-price catalog__prop-inner">
                <input
                  value={min}
                  type="text"
                  className="catalog-price__input"
                />
                <input
                  value={max}
                  type="text"
                  className="catalog-price__input"
                />
                <div className="catalog-price__element">
                  <div className="multi-range">
                    <MultiRange max={100} min={10} onChange={onChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className="catalog__prop">
              <strong className="catalog__caption">Пол</strong>
              <div className="catalog__prop-inner">
                <label className="custom-checkbox" htmlFor="male">
                  <input
                    id="male"
                    className="custom-checkbox__field"
                    type="checkbox"
                  />
                  <span className="checkbox__content">Мужской</span>
                </label>
                <label className="custom-checkbox" htmlFor="female">
                  <input
                    className="custom-checkbox__field"
                    id="female"
                    type="checkbox"
                  />
                  <span className="checkbox__content">Женский</span>
                </label>
              </div>
            </div>
            <div className="catalog__prop">
              <strong className="catalog__caption">Размер</strong>
              <div className="catalog__prop-inner">
                <table className="sizes-table">
                  <caption>Таблица размеров</caption>
                  <tbody>
                    <tr>
                      <td>35</td>
                      <td>36</td>
                      <td>37</td>
                    </tr>
                    <tr>
                      <td>38</td>
                      <td>39</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>41</td>
                      <td>42</td>
                      <td>43</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="btns-group flex">
              <button className="btn btn-reset btn--secondary">
                Применить
              </button>
              <button className="catalog-reset btn-reset">cбросить</button>
            </div>
          </div>
          <div className="catalog__grid">
            <ul className="catalog-list list-reset">
              <li className="catalog-list__item">
                <article className="product">
                  <div className="product__image">
                    <img
                      src="https://sun9-62.userapi.com/impf/wQBtYCM_jWvXp_Jx0eSLzePZPPWDfpfqt042qQ/WGC1UKMaRiI.jpg?size=507x604&quality=96&sign=2dafdee4ca5226e175fd5a01ff8c2ab8&c_uniq_tag=-mfQVgE6vDMVTpqnROxJvFTQob68-vtxPHMZVsRH1ko&type=album"
                      alt="Продукт 1"
                    />
                    <div className="product__btns">
                      <button
                        className="btn-reset product__btn"
                        aria-label="Показать информацию о товаре"
                      >
                        <ShowSVG />
                      </button>
                      <button
                        className="btn-reset product__btn"
                        aria-label="Добавить товар в корзину"
                      >
                        <CartSVG />
                      </button>
                    </div>
                  </div>
                  <h3 className="product__title">
                    Кроссовки Nike Air Force 1 '07 QS
                  </h3>
                  <span className="product__price">11 000 р</span>
                </article>
              </li>
              <li className="catalog-list__item">
                <article className="product">
                  <div className="product__image">
                    <img
                      src="https://sun9-62.userapi.com/impf/wQBtYCM_jWvXp_Jx0eSLzePZPPWDfpfqt042qQ/WGC1UKMaRiI.jpg?size=507x604&quality=96&sign=2dafdee4ca5226e175fd5a01ff8c2ab8&c_uniq_tag=-mfQVgE6vDMVTpqnROxJvFTQob68-vtxPHMZVsRH1ko&type=album"
                      alt="Продукт 1"
                    />
                    <div className="product__btns">
                      <button
                        className="btn-reset product__btn"
                        aria-label="Показать информацию о товаре"
                      >
                        <ShowSVG />
                      </button>
                      <button
                        className="btn-reset product__btn"
                        aria-label="Добавить товар в корзину"
                      >
                        <CartSVG />
                      </button>
                    </div>
                  </div>
                  <h3 className="product__title">
                    Кроссовки Nike Air Force 1 '07 QS
                  </h3>
                  <span className="product__price">11 000 р</span>
                </article>
              </li>
              <li className="catalog-list__item">
                <article className="product">
                  <div className="product__image">
                    <img
                      src="https://sun9-62.userapi.com/impf/wQBtYCM_jWvXp_Jx0eSLzePZPPWDfpfqt042qQ/WGC1UKMaRiI.jpg?size=507x604&quality=96&sign=2dafdee4ca5226e175fd5a01ff8c2ab8&c_uniq_tag=-mfQVgE6vDMVTpqnROxJvFTQob68-vtxPHMZVsRH1ko&type=album"
                      alt="Продукт 1"
                    />
                    <div className="product__btns">
                      <button
                        className="btn-reset product__btn"
                        aria-label="Показать информацию о товаре"
                      >
                        <ShowSVG />
                      </button>
                      <button
                        className="btn-reset product__btn"
                        aria-label="Добавить товар в корзину"
                      >
                        <CartSVG />
                      </button>
                    </div>
                  </div>
                  <h3 className="product__title">
                    Кроссовки Nike Air Force 1 '07 QS
                  </h3>
                  <span className="product__price">11 000 р</span>
                </article>
              </li>
              <li className="catalog-list__item">
                <article className="product">
                  <div className="product__image">
                    <img
                      src="https://sun9-62.userapi.com/impf/wQBtYCM_jWvXp_Jx0eSLzePZPPWDfpfqt042qQ/WGC1UKMaRiI.jpg?size=507x604&quality=96&sign=2dafdee4ca5226e175fd5a01ff8c2ab8&c_uniq_tag=-mfQVgE6vDMVTpqnROxJvFTQob68-vtxPHMZVsRH1ko&type=album"
                      alt="Продукт 1"
                    />
                    <div className="product__btns">
                      <button
                        className="btn-reset product__btn"
                        aria-label="Показать информацию о товаре"
                      >
                        <ShowSVG />
                      </button>
                      <button
                        className="btn-reset product__btn"
                        aria-label="Добавить товар в корзину"
                      >
                        <CartSVG />
                      </button>
                    </div>
                  </div>
                  <h3 className="product__title">
                    Кроссовки Nike Air Force 1 '07 QS
                  </h3>
                  <span className="product__price">11 000 р</span>
                </article>
              </li>
              <li className="catalog-list__item">
                <article className="product">
                  <div className="product__image">
                    <img
                      src="https://sun9-62.userapi.com/impf/wQBtYCM_jWvXp_Jx0eSLzePZPPWDfpfqt042qQ/WGC1UKMaRiI.jpg?size=507x604&quality=96&sign=2dafdee4ca5226e175fd5a01ff8c2ab8&c_uniq_tag=-mfQVgE6vDMVTpqnROxJvFTQob68-vtxPHMZVsRH1ko&type=album"
                      alt="Продукт 1"
                    />
                    <div className="product__btns">
                      <button
                        className="btn-reset product__btn"
                        aria-label="Показать информацию о товаре"
                      >
                        <ShowSVG />
                      </button>
                      <button
                        className="btn-reset product__btn"
                        aria-label="Добавить товар в корзину"
                      >
                        <CartSVG />
                      </button>
                    </div>
                  </div>
                  <h3 className="product__title">
                    Кроссовки Nike Air Force 1 '07 QS
                  </h3>
                  <span className="product__price">11 000 р</span>
                </article>
              </li>
              <li className="catalog-list__item">
                <article className="product">
                  <div className="product__image">
                    <img
                      src="https://sun9-62.userapi.com/impf/wQBtYCM_jWvXp_Jx0eSLzePZPPWDfpfqt042qQ/WGC1UKMaRiI.jpg?size=507x604&quality=96&sign=2dafdee4ca5226e175fd5a01ff8c2ab8&c_uniq_tag=-mfQVgE6vDMVTpqnROxJvFTQob68-vtxPHMZVsRH1ko&type=album"
                      alt="Продукт 1"
                    />
                    <div className="product__btns">
                      <button
                        className="btn-reset product__btn"
                        aria-label="Показать информацию о товаре"
                      >
                        <ShowSVG />
                      </button>
                      <button
                        className="btn-reset product__btn"
                        aria-label="Добавить товар в корзину"
                      >
                        <CartSVG />
                      </button>
                    </div>
                  </div>
                  <h3 className="product__title">
                    Кроссовки Nike Air Force 1 '07 QS
                  </h3>
                  <span className="product__price">11 000 р</span>
                </article>
              </li>
              <li className="catalog-list__item">
                <article className="product">
                  <div className="product__image">
                    <img
                      src="https://sun9-62.userapi.com/impf/wQBtYCM_jWvXp_Jx0eSLzePZPPWDfpfqt042qQ/WGC1UKMaRiI.jpg?size=507x604&quality=96&sign=2dafdee4ca5226e175fd5a01ff8c2ab8&c_uniq_tag=-mfQVgE6vDMVTpqnROxJvFTQob68-vtxPHMZVsRH1ko&type=album"
                      alt="Продукт 1"
                    />
                    <div className="product__btns">
                      <button
                        className="btn-reset product__btn"
                        aria-label="Показать информацию о товаре"
                      >
                        <ShowSVG />
                      </button>
                      <button
                        className="btn-reset product__btn"
                        aria-label="Добавить товар в корзину"
                      >
                        <CartSVG />
                      </button>
                    </div>
                  </div>
                  <h3 className="product__title">
                    Кроссовки Nike Air Force 1 '07 QS
                  </h3>
                  <span className="product__price">11 000 р</span>
                </article>
              </li>
              <li className="catalog-list__item">
                <article className="product">
                  <div className="product__image">
                    <img
                      src="https://sun9-62.userapi.com/impf/wQBtYCM_jWvXp_Jx0eSLzePZPPWDfpfqt042qQ/WGC1UKMaRiI.jpg?size=507x604&quality=96&sign=2dafdee4ca5226e175fd5a01ff8c2ab8&c_uniq_tag=-mfQVgE6vDMVTpqnROxJvFTQob68-vtxPHMZVsRH1ko&type=album"
                      alt="Продукт 1"
                    />
                    <div className="product__btns">
                      <button
                        className="btn-reset product__btn"
                        aria-label="Показать информацию о товаре"
                      >
                        <ShowSVG />
                      </button>
                      <button
                        className="btn-reset product__btn"
                        aria-label="Добавить товар в корзину"
                      >
                        <CartSVG />
                      </button>
                    </div>
                  </div>
                  <h3 className="product__title">
                    Кроссовки Nike Air Force 1 '07 QS
                  </h3>
                  <span className="product__price">11 000 р</span>
                </article>
              </li>
            </ul>
            <button ref={refButton} className="btn btn-reset btn--primary">
              Показать ещё
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

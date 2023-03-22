import like from "../../img/like.svg";

const PromoCourses = () => {
  return (
    <section className="promo-courses">
      <div className="promo-courses-container">
        <ul className="promo-courses-cards">
          <li className="promo-courses-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon courses-card-icon-one" />
              </a>
              <p className="promo-courses-category">Знания!</p>
              <button className="promo-courses-button-like" type="submit">
                <img
                  className="promo-courses-like-icon"
                  src={like}
                  alt="icon-like"
                />
              </button>
            </div>
            <div className="promo-courses-text-information">
              <p>
                <a className="promo-courses-title" href="22">
                  Курс пастилье
                </a>
              </p>

              <p className="promo-courses-text">
                Это база знаний, где собран весь мой опыт. Я делюсь лайфхаками,
                рецептами и учу вас делать полезную пастилу, фрипсы, овощные
                заготовки и не только.
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">3 000 р.</p>
                <a className="link-button-in-card " href="232">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-courses-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon courses-card-icon-two" />
              </a>
              <p className="promo-courses-category">Знания!</p>
              <button className="promo-courses-button-like" type="submit">
                <img
                  className="promo-courses-like-icon"
                  src={like}
                  alt="icon-like"
                />
              </button>
            </div>
            <div className="promo-courses-text-information">
              <p>
                <a className="promo-courses-title" href="22">
                  Урок по приготовлению домашней карамели и ирисок
                </a>
              </p>
              <p className="promo-courses-text">
                Урок по приготовлению вкуснейшей карамели и ирисок можно
                приобрести отдельно!
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">1 000 р.</p>
                <a className="link-button-in-card " href="232">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PromoCourses;

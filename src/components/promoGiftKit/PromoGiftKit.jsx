import like from "../../img/like.svg";

const PromoGiftKit = () => {
  return (
    <section className="promo-courses">
      <div className="promo-gifts-container">
        <ul className="promo-gifts-cards">
          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon gift-card-icon-one" />
              </a>
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
                  Подарочный набор 1
                </a>
              </p>

              <p className="promo-courses-text">
                На выбор 4 вкуса пастилы по 1/4 листа + Фрипсы 20 грамм.
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">500.00 р.</p>
                <a href="22" className="link-button-in-card  link-button-in-card-mini">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon gift-card-icon-two" />
              </a>
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
                  Подарочный набор 2
                </a>
              </p>

              <p className="promo-courses-text">
              На выбор 4 вкуса пастилы по 1/2 листа + Фрипсы 15 грамм.
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">700.00 р.</p>
                <a href="22" className="link-button-in-card  link-button-in-card-mini">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon gift-card-icon-three" />
              </a>
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
                  Подарочный набор 3
                </a>
              </p>

              <p className="promo-courses-text">
              На выбор 8 вкусов пастилы по 1/4 листа.
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">700.00 р.</p>
                <a href="22" className="link-button-in-card  link-button-in-card-mini">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon gift-card-icon-four" />
              </a>
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
                  Подарочный набор 4
                </a>
              </p>

              <p className="promo-courses-text">
              На выбор 8 вкусов пастилы по 1/2 листа + Фрипсы 30 грамм.
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">1550.00 р.</p>
                <a href="22" className="link-button-in-card  link-button-in-card-mini">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <a className="giftkit-link-all" href="23213">СМОТРЕТЬ ВСЕ НАБОРЫ → </a>
    </section>
  );
};

export default PromoGiftKit;

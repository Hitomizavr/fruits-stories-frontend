import like from "../../img/like.svg";

const PromoFrips = () => {
  return (
    <section className="promo-courses">
      <div className="promo-gifts-container">
        <ul className="promo-gifts-cards">
          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon promofrips-icon-one" />
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
                Груша
                </a>
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">180.00 р.</p>
                <a href="22" className="link-button-in-card link-button-in-card-mini">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon promofrips-icon-two" />
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
                  Киви
                </a>
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">270.00 р.</p>
                <a href="22" className="link-button-in-card link-button-in-card-mini">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon promofrips-icon-three" />
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
                  Яблоко
                </a>
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">180.00 р.</p>
                <a href="22" className="link-button-in-card link-button-in-card-mini">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon promofrips-icon-four" />
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
                  Банан
                </a>
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">190.00 р.</p>
                <a href="22" className="link-button-in-card link-button-in-card-mini">
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

export default PromoFrips;

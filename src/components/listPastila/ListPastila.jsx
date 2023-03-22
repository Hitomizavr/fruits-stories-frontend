import like from "../../img/like.svg";

const ListPastila = () => {
  return (
    <section className="promo-courses">
      <div className="promo-gifts-container">
        <ul className="promo-gifts-cards">
          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon pastils-icon-one" />
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
                Брусника / кедровый орех
                </a>
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">240.00 р.</p>
                <a href="22" className="link-button-in-card link-button-in-card-mini">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon pastils-icon-two" />
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
                  Клюква
                </a>
              </p>
              <div className="promo-courses-data">
                <p className="promo-courses-count">220.00 р.</p>
                <a href="22" className="link-button-in-card link-button-in-card-mini">
                  В КОРЗИНУ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card">
            <div>
              <a href="2323">
                <div className="courses-card-icon gift-card-icon pastils-icon-three" />
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
                  Слива
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
                <div className="courses-card-icon gift-card-icon pastils-icon-four" />
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
                  Клубника
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
        </ul>
      </div>
      <a className="giftkit-link-all" href="23213">СМОТРЕТЬ ВСЕ НАБОРЫ → </a>
    </section>
  );
};

export default ListPastila;

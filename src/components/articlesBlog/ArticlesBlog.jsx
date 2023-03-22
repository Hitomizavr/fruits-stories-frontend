import { Link } from "react-router-dom";

const ArticlesBlog = () => {
  // TODO: сделать роуты
  return (
    <div className="articles-blog">
      <div className="navigation-routes container">
        <a
          className="navigation-route-block navigation-route-block-one"
          href="23"
        >
          <a className="navigation-route-link navigation-route-block-two">
            Главная
          </a>
        </a>
        <a className="navigation-route-block" href="23">
          <a
            className="navigation-route-link navigation-route-link-active"
            href="23"
          >
            Блог
          </a>
        </a>
      </div>
      <div className="articles-blog-block container">
        <ul className="promo-gifts-cards return-goods-cards articles-blog-cards">
          <li className="promo-gifts-card return-goods-card article-blog-card">
            <div className="article-blog-card-image">
              <a href="2323">
                <img
                  className="courses-card-icon gift-card-icon promofrips-icon-two"
                  src="https://fruits29.ru/images/compressed/laptop/fripsi/assorti/vdermxomuhw.jpg"
                  alt="fruits"
                />
              </a>
            </div>
            <div className="promo-courses-text-information">
                <a className="promo-courses-title" href="22">
                  Как готовятся самые вкусные фрипсы?
                </a>
              <span className="article-date">17 МАРТА 2021</span>
              <div className="promo-courses-data">
                <a
                  href="22"
                  className="link-button-in-card"
                >
                  ЧИТАТЬ ДАЛЕЕ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card return-goods-card article-blog-card">
            <div>
              <a href="2323">
                <img
                  className="courses-card-icon gift-card-icon promofrips-icon-two"
                  src="https://fruits29.ru/images/compressed/laptop/qf0ronyor20.jpg"
                  alt="fruits"
                />
              </a>
            </div>
            <div className="promo-courses-text-information">
                <a className="promo-courses-title" href="22">
                Сушилки для пастилы и фрипсов
                </a>
              <span className="article-date">17 МАРТА 2021</span>
              <div className="promo-courses-data">
                <a
                  href="22"
                  className="link-button-in-card"
                >
                  ЧИТАТЬ ДАЛЕЕ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card return-goods-card article-blog-card">
            <div>
              <a href="2323">
                <img
                  className="courses-card-icon gift-card-icon promofrips-icon-two"
                  src="https://fruits29.ru/images/compressed/laptop/pastila/yabloko/dpzqivfprpc.jpg"
                  alt="fruits"
                />
              </a>
            </div>
            <div className="promo-courses-text-information">
                <a className="promo-courses-title" href="22">
                Сушеная вишня полезна для сердца
                </a>
              <span className="article-date">17 МАРТА 2021</span>
              <div className="promo-courses-data">
                <a
                  href="22"
                  className="link-button-in-card"
                >
                  ЧИТАТЬ ДАЛЕЕ
                </a>
              </div>
            </div>
          </li>

          <li className="promo-gifts-card return-goods-card article-blog-card">
            <div>
              <a href="2323">
                <img
                  className="courses-card-icon gift-card-icon promofrips-icon-two"
                  src="https://fruits29.ru/images/compressed/laptop/fripsi/assorti/vdermxomuhw.jpg"
                  alt="fruits"
                />
              </a>
            </div>
            <div className="promo-courses-text-information">
                <a className="promo-courses-title" href="22">
                  Как готовятся самые вкусные фрипсы?
                </a>
              <span className="article-date">17 МАРТА 2021</span>
              <div className="promo-courses-data">
                <a
                  href="22"
                  className="link-button-in-card"
                >
                  ЧИТАТЬ ДАЛЕЕ
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticlesBlog;

// import RangePrice from "../rangePrice/RangePrice";

import like from "../../img/like.svg";

const Card = ({ name, type, cost, image1, image2 }) => (
    <li className="promo-gifts-card return-goods-card">
      <div>
        <a href="#" className="icons-container">
          <div
            className="courses-card-icon gift-card-icon promofrips-icon"
            style={{
              backgroundImage: `url(${image2})`,
            }}
          />
          <div
            className="courses-card-icon gift-card-icon promofrips-icon"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          />
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
            {name}
          </a>
        </p>
        <span className="course-text-qst goods-type">{type}</span>
        <div className="promo-courses-data">
          <p className="promo-courses-count">{cost} р.</p>
          <a
            href="22"
            className="link-button-in-card link-button-in-card-mini"
          >
            В КОРЗИНУ
          </a>
        </div>
      </div>
    </li>
  );

export default Card;

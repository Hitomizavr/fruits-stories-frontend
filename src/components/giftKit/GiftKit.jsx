import giftBox from "../../img/gift-box.svg";

const GiftKit = () => {
  return (
    <section className="course gift-kit" id="link-anchor-product">
      <div className="course-overlay">
        <div className="course-decoration-frame">
          <div className="course-frame-text">
            <h2 className="course-text-title">Подарок на любой праздник!</h2>
            <p className="course-text-subtitle">
            Идеальный подарок-комплимент для любимых, родных,
            </p>
            <p className="course-text-subtitle">
            для друзей и коллег и просто хороших людей.
            </p>
            <a className="link-button-in-card link-button-in-spotlight" href="12">
            <img className="promo-products-card-gift-icon" src={giftBox} alt="icon gift box"/>
              ПОДАРОЧНЫЕ НАБОРЫ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftKit;

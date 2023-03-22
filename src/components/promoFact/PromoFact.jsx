import lemon from "../../img/lemon.svg";

const PromoFact = () => {
  return (
    <section className="course" id="link-anchor-product">
      <div className="course-overlay">
        <div className="course-decoration-frame">
          <div className="course-frame-text">
            <h2 className="course-text-title">Фрипсы — фруктовые чипсы!</h2>
            <p className="course-text-subtitle">
            А вы знали, что в каждой упаковке фруктовых чипсов,
            </p>
            <p className="course-text-subtitle">
            даже самой маленькой 50 грамм - больше 500 грамм свежих ягод и фруктов!
            </p>
            <a className="link-button-in-card link-button-in-spotlight" href="12">
            <img className="promo-fact-lemon-icon" src={lemon} alt="lemon" />
              ФРУКТОВЫЕ ЧИПСЫ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoFact;

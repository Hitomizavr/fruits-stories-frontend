import apple from "../../img/apple.svg";

const PromoPastila = () => {
  return (
    <section className="course promo-pastila-background" id="link-anchor-product">
      <div className="course-overlay">
        <div className="course-decoration-frame">
          <div className="course-frame-text">
            <h2 className="course-text-title">Ягодная и фруктовая пастила!</h2>
            <p className="course-text-subtitle">
            Пастила получается натуральная, без сахара и прочей химии,
            </p>
            <p className="course-text-subtitle">
            в магазине такую точно не купить.
            </p>
            <a className="link-button-in-card link-button-in-spotlight" href="12">
            <img className="promo-fact-lemon-icon" src={apple} alt="lemon" />
              ФРУКТОВАЯ ПАСТИЛА
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoPastila;

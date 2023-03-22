import list from "../../img/list.svg";

const PromoProducts = () => {
  return (
    <section className="promo-products" id="link-anchor-service">
      <div className="container-promo">
        <ul className="promo-products-cards">
          <li className="promo-products-card card-pastila">
            <div className="promo-products-card-overlay">
              <h3 className="promo-products-card-title">Пастила</h3>
              <p className="promo-products-card-text">
                Доступно 14 вкусов: яблоко, мандарин, малина, вишня, клубника,
                банан/грецкий орех, брусника/кедровый орех, черника, клюква,
                слива, виноград и др.
              </p>
              <a className="link-button-in-card" href="12">
                <img className="promo-list-icon" src={list} alt="list-icon" />
                Смотреть
              </a>
            </div>
          </li>

          <li className="promo-products-card card-frips">
            <div className="promo-products-card-overlay">
              <h3 className="promo-products-card-title">Фрипсы</h3>
              <p className="promo-products-card-text">
                Вы можете выбрать 14 видов вкусов: банан, яблоко, груша,
                мандарин, апельсин, лимон, хурма, арбуз, киви, дыня, ананас,
                кокос, манго, клубника.
              </p>
              <a className="link-button-in-card" href="12">
                <img className="promo-list-icon" src={list} alt="list-icon" />
                Смотреть
              </a>
            </div>
          </li>

          <li className="promo-products-card card-caramel">
            <div className="promo-products-card-overlay">
              <h3 className="promo-products-card-title">Карамель</h3>
              <p className="promo-products-card-text">
                Доступно 4 вида: сливочная карамель, сливочная карамель с
                миндалем и фундуком, солёная карамель, соленая карамель с
                миндалем и фундуком.
              </p>
              <a className="link-button-in-card" href="12">
                <img className="promo-list-icon" src={list} alt="list-icon" />
                Смотреть
              </a>
            </div>
          </li>

          <li className="promo-products-card card-chips">
            <div className="promo-products-card-overlay">
              <h3 className="promo-products-card-title">Чипсы овощные</h3>
              <p className="promo-products-card-text">
                Доступен один вид овощных чипсов — Ароматные томаты с
                прованскими травами. Работаем над новыми вкусами!.
              </p>
              <a className="link-button-in-card" href="12">
                <img className="promo-list-icon" src={list} alt="list-icon" />
                Смотреть
              </a>
            </div>
          </li>

          <li className="promo-products-card card-candied-fruit">
            <div className="promo-products-card-overlay">
              <h3 className="promo-products-card-title">Цукаты овощные</h3>
              <p className="promo-products-card-text">
                Микс цукатов из свеклы, моркови и тыквы - нежнейшие, тают во
                рту. Идеальная замена конфеткам к чаю.
              </p>
              <a className="link-button-in-card" href="12">
                <img className="promo-list-icon" src={list} alt="list-icon" />
                Смотреть
              </a>
            </div>
          </li>

          <li className="promo-products-card card-gift">
            <div className="promo-products-card-overlay">
              <h3 className="promo-products-card-title">Наборы</h3>
              <p className="promo-products-card-text">
                Для заказа представлены 9 подарочных наборов с возможностью
                выбора вкусов прямо на сайте.
              </p>
              <a className="link-button-in-card" href="12">
                <img className="promo-list-icon" src={list} alt="list-icon" />
                Смотреть
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PromoProducts;

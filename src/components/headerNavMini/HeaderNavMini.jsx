import { Link } from "react-router-dom";

const HeaderNavMini = () => {
  // TODO: сделать роуты
  return (
    <div className="navigation navigation-mini">
      <div className="slider-overlay">
        <ul className="navigation-links-list navigation-links-list-mini">
          <li className="link-list-item">
            <Link to="/" className="link-item" href="f">
              Главная
            </Link>
          </li>
          <li className="link-list-item">
            <Link to="/catalog" className="link-item" href="f">
              Каталог
            </Link>
          </li>
          <li className="link-list-item">
            <Link to="/education" className="link-item" href="f">
              Обучение
            </Link>
          </li>
          <li className="link-list-item">
            <Link to="/blog" className="link-item" href="f">
              Блог
            </Link>
          </li>
          <li className="link-list-item">
            <Link to="/payment" className="link-item" href="f">
              Оплата / Доставка
            </Link>
          </li>
          <li className="link-list-item">
            <Link to="/contacts" className="link-item" href="f">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavMini;

import { Link } from 'react-router-dom';


import advantagesOne from "../../img/adv-one.png";
import advantagesTwo from "../../img/adv-two.png";
import advantagesThree from "../../img/adv-three.png";
import advantagesFour from "../../img/adv-four.png";


const HeaderNavigation = () => {
  // TODO: сделать роуты
  return (
    <div className="navigation">
    <div className="slider-overlay"></div>
      <ul className="navigation-links-list">
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

      <h1 className="first-title title-navigation">
        Пастила и фруктовые чипсы
      </h1>
      <h2 className="subtitle-navigation">
        Яркий вкус • Цветной перекус
      </h2>

      <div className="advantages">
        <ul className="advantages-container">
          <li className="advantages-card">
            <img className="advantages-card-icon" src={advantagesOne} alt="advantages" />
            <p className="advantages-card-text">
              БЕЗ САХАРА,
              <br />
              КРАСИТЕЛЕЙ И КОНСЕРВАНТОВ
            </p>
          </li>
          <li className="advantages-card">
            <img className="advantages-card-icon" src={advantagesTwo} alt="advantages" />
            <p className="advantages-card-text">
              СОТРУДНИЧАЕМ
              <br />С ОРГАНИЗАЦИЯМИ
            </p>
          </li>
          <li className="advantages-card">
            <img className="advantages-card-icon" src={advantagesThree} alt="advantages" />
            <p className="advantages-card-text">СЕРТИФИКАТ ЕАС</p>
          </li>
          <li className="advantages-card">
            <img className="advantages-card-icon" src={advantagesFour} alt="advantages" />
            <p className="advantages-card-text">
              РАБОТАЕМ
              <br />
              ПО ВСЕЙ РОССИИ
            </p>
          </li>
        </ul>
      </div>
      <div className="promo-action-block">
        <a className="promo-action-block-text" href="2">Курс по приготовлению пастилы — всего 3 000 рублей!</a>
      </div>
    </div>
  );
};

export default HeaderNavigation;

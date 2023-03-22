import RangePrice from "../rangePrice/RangePrice";
import { products } from "../../constants";
import Card from "../card/Card";

import findIcon from "../../img/find.svg";

const CatalogProducts = () => {
  return (
    <div className="catalog catalog-products">
      <div className="container">
      <div className="navigation-routes container">
        <p
          className="navigation-route-block navigation-route-block-one"
          href="23"
        >
          <a className="navigation-route-link navigation-route-block-two">
            Главная
          </a>
        </p>
        <p className="navigation-route-block" href="23">
          <a
            className="navigation-route-link navigation-route-link-active"
            href="23"
          >
            Каталог
          </a>
        </p>
      </div>
        <div className="catalog-products-main">
          <div className="catalog-products-sidebar">
            <div className="input-search-block">
              <img
                className="input-search-icon"
                src={findIcon}
                alt="find-icon"
              ></img>
              <input placeholder="Поиск" className="input-search-input" />
            </div>
            <div className="filter-types">
              <p className="filter-price-title">Категории</p>
              <a className="types-link" href="23">
                Пастила
              </a>
              <a className="types-link" href="23">
                Фрипсы
              </a>
              <a className="types-link" href="23">
                Домашняя карамель
              </a>
              <a className="types-link" href="23">
                Подарочные наборы
              </a>
              <a className="types-link" href="23">
                Овощные чипсы
              </a>
              <a className="types-link" href="23">
                Цукаты
              </a>
              <a className="types-link" href="23">
                Обучение
              </a>
              <a className="types-link" href="23">
                Оборудование
              </a>
            </div>
            <div className="filter-price">
              <p className="filter-price-title">Цена</p>
              <RangePrice
                from={0}
                to={3000}
                step={100}
                onChange={(min, max) => {
                  // вывод значений min и max
                  // console.log(min, max);
                }}
              />
            </div>
            <div className="filter-choose-types">
              <div className="filter-choose-types-buttons">
                <p className="filter-price-title">Особенности</p>
                <button className="filter-choose-button">с ягодами</button>
                <button className="filter-choose-button">с орешками</button>
                <button className="filter-choose-button">цитрус</button>
              </div>
            </div>
          </div>
          <div className="catalog-products-goods">
            <div className="sorting-goods">
              <p>Сортировка</p>
              <select
                placeholder="Сортировка"
                className="sorting-goods-input-select"
              >
                <option value="Цена">Цена: от низкой к высокой</option>
                <option value="Цена">Цена: от высокой к низкой</option>
                <option value="Новинки">Новинки</option>
                <option value="Новинки">По рейтингу</option>
                <option value="Новинки">По отзывам</option>
                <option value="Новинки">По популярности</option>
              </select>
            </div>
            <div className="return-goods">
              <ul className="promo-gifts-cards return-goods-cards">
              {products.map(({ name, type_ru, cost, image1, image2 }, index) => (
                <Card
                  key={index}
                  name={name}
                  type={type_ru}
                  cost={cost}
                  image1={image1}
                  image2={image2}
                />
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogProducts;

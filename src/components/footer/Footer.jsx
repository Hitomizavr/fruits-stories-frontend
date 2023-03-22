import { Link } from 'react-router-dom';

import telephone from "../../img/telephone-2-white.svg";
import whatsapp from "../../img/whatsapp-white.svg";
import vkontakte from "../../img/vkontakte-white.svg";
import mail from "../../img/mail-white.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container container">
        <div className="footer-links">
          <div className="filter-types footer-links-block">
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
            <div className="filter-types footer-links-block">
              <a className="types-link" href="https://fruits29.ru/pol-zovatel-skoe-soglashenie">
                Пользовательское соглашение
              </a>
              <Link className="types-link" to="/payment">
                Способы доставки и оплаты
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-contacts">
          <div className="contacts-links-block">
            <a className="contact-link-social" href="23">
              <img className="contact-icon" src={telephone} alt="icon"></img>
              +7 (960) 017-29-31
            </a>
            <a className="contact-link-social" href="23">
              <img className="contact-icon" src={whatsapp} alt="icon"></img>+7
              (960) 017-29-31
            </a>
            <a className="contact-link-social" href="23">
              <img className="contact-icon" src={vkontakte} alt="icon"></img>
              fruits29
            </a>
            <a className="contact-link-social" href="23">
              <img className="contact-icon" src={mail} alt="icon"></img>
              4mari@inbox.ru
            </a>
          </div>
        </div>
        <img
          className="footer-logo"
          src="https://fruits29.ru/images/logo/logo_new_2023-cdr2.png"
        ></img>
      </div>
    </section>
  );
};

export default Footer;

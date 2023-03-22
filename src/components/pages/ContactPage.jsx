import Header from "../header/Header";
import HeaderNavMini from "../headerNavMini/HeaderNavMini";
import Footer from "../footer/Footer";

import telephone from "../../img/telephone-2.svg";
import whatsapp from "../../img/whatsapp.svg";
import vkontakte from "../../img/vkontakte.svg";
import mail from "../../img/mail.svg";

function ContactPage() {
  return (
    <>
      <Header />
      <HeaderNavMini />
      <div className="payment-delivery container">
        <div>
          {" "}
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
                Контакты
              </a>
            </a>
          </div>
        </div>
        <div className="payment-delivery-block contacts-block container">
          <div className="contacts-data-block">
            <h2 className="contacts-data-title">Контакты</h2>
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
          <div className="contacts-map-block">
            <div style={{ position: "relative", overflow: "hidden" }}>
              <a
                href="https://yandex.ru/maps/org/fruitstories/136119312877/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                FruitStories
              </a>
              <a
                href="https://yandex.ru/maps/20/arhangelsk/category/food_manufacturers/184106790/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                Производство продуктов питания в Архангельске
              </a>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=40.556650%2C64.555098&mode=search&oid=136119312877&ol=biz&z=17.27"
                width={560}
                height={400}
                frameBorder={2}
                allowFullScreen="true"
                style={{ position: "relative" }}
              />
            </div>
          </div>
        </div>
        <div className="contacts-info-table">
          <p className="contacts-info-table-string">Фактический адрес:</p>
          <p className="contacts-info-table-string">Архангельская обл., г. Архангельск, ул. Гагарина 42, здание Швейной Фабрики, магазин Fruits29.</p>
          <p className="contacts-info-table-string">Электронная почта:</p>
          <p className="contacts-info-table-string">4mari@inbox.ru</p>
          <p className="contacts-info-table-string">Телефон:</p>
          <p className="contacts-info-table-string">+7 (960) 017-29-31</p>
          <p className="contacts-info-table-string">Реквизиты:</p>
          <p className="contacts-info-table-string">ИП Маркова Мария Сергеевна</p>
          <p className="contacts-info-table-string">Юридический адрес:</p>
          <p className="contacts-info-table-string">Архангельская обл., г. Архангельск, ул. Гагарина 42.</p>
          <p className="contacts-info-table-string">ИНН / ОГРНИП</p>
          <p className="contacts-info-table-string">290121588982 / 322290100027936</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;

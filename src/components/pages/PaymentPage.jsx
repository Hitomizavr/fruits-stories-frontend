import Header from "../header/Header";
import HeaderNavMini from "../headerNavMini/HeaderNavMini";
import Footer from "../footer/Footer";

function PaymentPage() {
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
                Оплата / Доставка
              </a>
            </a>
          </div>
        </div>
        <div className="payment-delivery-block container">
          <h3 className="payment-delivery-maintitle">Способы доставки и оплаты</h3>
          <h4 className="payment-delivery-title">Доставка:</h4>
          <ul className="payment-delivery-lists">
            <li className="payment-delivery-list-item">
              Архангельск - ежедневно бесплатная доставка по городу при заказе
              от 1500 рублей.
            </li>
            <li className="payment-delivery-list-item">
              Северодвинск, Новодвинск - бесплатная доставка по городу при
              заказе от 1500 рублей, 1 раз в неделю.⠀
            </li>
            <li className="payment-delivery-list-item">
              По России — Почтой России или СДЭК, стоимость доставки 500 рублей.
            </li>
          </ul>
          <span className="payment-delivery-span">
            Возможен самовывоз: Гагарина 42, здание Швейной Фабрики, магазин
            Fruits29.
          </span>

          <h4 className="payment-delivery-title">Способы оплаты:</h4>
          <span className="payment-delivery-span">Наличный расчёт, банковская карта.</span>
          <p>
            Если товар доставляется курьером, то оплата осуществляется наличными
            курьеру в руки или банковской картой через терминал банка ПАО
            Сбербанк.
          </p>

          <h4 className="payment-delivery-title">Возврат товара:</h4>
          <p>Срок возврата товара ненадлежащего качества составляет 3 дня с
            момента получения товара.</p>
          <p>
            Возврат переведённых средств, производится
            на ваш банковский счёт в течение 5-30 рабочих дней (срок зависит от
            банка, который выдал вашу банковскую карту).
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;

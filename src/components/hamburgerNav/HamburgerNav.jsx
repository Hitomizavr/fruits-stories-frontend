import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import logo from "../../img/logo.png";
import telephone from "../../img/telephone.svg";

const GAMBURGER_SHOW_WIDTH = 766;

const HamburgerNav = () => {
  const [isMobile, setMobile] = useState(false);
  const [gamburger, setGamburger] = useState(false);

  useEffect(() => {
    // console.log("displaynone");
    // При монтировании компонента
    window.addEventListener("resize", onResize);
    onResize();

    // При отмонтировании компонента
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // При изменении gamburger
  useEffect(() => {
    if (gamburger) {
      // Чтобы не скролилось при открытом меню
      document.body.style.overflow = "hidden";
    } else {
      // Чтобы скролилось при закрытом меню
      document.body.style.overflow = "auto";
    }
  }, [gamburger]);

  // При изменении isMobile
  useEffect(() => {
    // Автомат закрытие меню при разрешении меньше 768
    if (!isMobile) setGamburger(false);
  }, [isMobile]);

  const onResize = () => {
    // console.log(window.outerWidth);
    setMobile(window.outerWidth <= GAMBURGER_SHOW_WIDTH);
  };

  return (
    <>
      <div className="header-buttons displaynone">
        <div className="cart-button">
          <span className="cart-icon" />
          <span className="cart-icon-count">12.04 р.</span>
        </div>
        <button className="header-button">
          <svg
            className="header-like-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
        </button>
      </div>
      <div className="displaynone logotype-hamburger-mobile"></div>

      <div
        onClick={() => setGamburger(false)}
        className={
          "gamburger-overlay" + (gamburger ? " gamburger-overlay_opened" : "")
        }
      ></div>
      <div className={"gamburger" + (gamburger ? " gamburger_show" : "")}>
        <div className="gamburger-wrapper">
          <div className="gamburger-wrapper-link">
            <Link
              className={
                "header-link-item" +
                (gamburger ? " header-link-item_mobile" : "")
              }
              href="#link-anchor-about"
            >
              <img
                className="telephone-icon"
                src={telephone}
                alt="telephone-icon"
              ></img>
              +7 (960) 017-29-31
            </Link>
            <Link to="/" className="link-item link-item-mobile">
              Главная
            </Link>
            <Link to="/catalog" className="link-item link-item-mobile">
              Каталог
            </Link>
            <Link to="/education" className="link-item link-item-mobile">
              Обучение
            </Link>
            <Link to="/blog" className="link-item link-item-mobile">
            Блог
          </Link>
          <Link to="/payment" className="link-item link-item-mobile">
            Оплата / Доставка
          </Link>
          <Link to="/contacts" className="link-item link-item-mobile">
            Контакты
          </Link>

            {/* <NavLink
              exact={true}
              className="gamburger__link"
              activeClassName="header-navigation__link_active"
              to="/"
            >
              Главная
            </NavLink>
            <NavLink
              className="gamburger__link"
              activeClassName="header-navigation__link_active"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="gamburger__link"
              activeClassName="header-navigation__link_active"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="gamburger__wrapper-link-account">
            <NavLink
              to="/profile"
              className="gamburger__link"
              activeClassName="header-navigation__link_active"
            >
              Аккаунт
              <img
                className="header-navigation__image-logined"
                // src={accountIcon}
                alt="account icon"
              />
            </NavLink> */}
          </div>
        </div>
      </div>
      {isMobile ? (
        <button
          className={
            "gamburger-button" +
            (!gamburger ? " gamburger-button_style_white" : "")
          }
          onClick={() => setGamburger((b) => !b)}
        ></button>
      ) : (
        <>
          <div className="header-links">
            <a className="header-link-item" href="#link-anchor-about">
              <img
                className="telephone-icon"
                src={telephone}
                alt="telephone-icon"
              ></img>
              +7 (960) 017-29-31
            </a>
          </div>
          <img className="logotype-icon" src={logo} alt="logotype"></img>
          <div className="header-buttons">
            <div className="cart-button">
              <span className="cart-icon" />
              <span className="cart-icon-count">12.04 р.</span>
            </div>
            <button className="header-button">
              <svg
                className="header-like-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );

  //   <header className="header">
  //     <div className="container-header">
  //       <div className="header-links">
  //         <a className="header-link-item" href="#link-anchor-about">
  //           <img
  //             className="telephone-icon"
  //             src={telephone}
  //             alt="telephone-icon"
  //           ></img>
  //           +7 (960) 017-29-31
  //         </a>
  //       </div>
  //       <img className="logotype-icon" src={logo} alt="logotype"></img>
  //       <div className="header-buttons">
  //         <div className="cart-button">
  //           <span className="cart-icon" />
  //           <span className="cart-icon-count">12.04 р.</span>
  //         </div>
  //         <button className="header-button">
  //           <svg
  //             className="header-like-icon"
  //             xmlns="http://www.w3.org/2000/svg"
  //             width="24"
  //             height="24"
  //             viewBox="0 0 24 24"
  //             fill="white"
  //           >
  //             <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
  //           </svg>
  //         </button>
  //       </div>
  //     </div>
  //   </header>
  // </>
};

export default HamburgerNav;

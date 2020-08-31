import React from "react";
import "../css/Portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <h2>Portfolio</h2>
      <div className="Portfolio_Container">
        <div className="Portfolio__element">
          <h3>Login page</h3>
          <a href="/portfolio_sites/landing/main.html">
            <div className="Portfolio__preview login__page"></div>
          </a>
          <p className="Portfolio__description">
            Consectetur est ut aute anim pariatur commodo excepteur fugiat
            nulla. Ipsum do nostrud esse consectetur cupidatat occaecat ad et.
            Dolor esse dolore commodo reprehenderit minim.
          </p>
        </div>
        <div className="Portfolio__element">
          <h3>Landing page</h3>
          <a href="/portfolio_sites/landing/landing.html">
            <div className="Portfolio__preview landing__page"></div>
          </a>
          <p className="Portfolio__description">
            Consectetur est ut aute anim pariatur commodo excepteur fugiat
            nulla. Ipsum do nostrud esse consectetur cupidatat occaecat ad et.
            Dolor esse dolore commodo reprehenderit minim.
          </p>
        </div>
        <div className="Portfolio__element">
          <h3>Profile page</h3>
          <a href="/portfolio_sites/landing/profile.html">
            <div className="Portfolio__preview profile__page"></div>
          </a>
          <p className="Portfolio__description">
            Consectetur est ut aute anim pariatur commodo excepteur fugiat
            nulla. Ipsum do nostrud esse consectetur cupidatat occaecat ad et.
            Dolor esse dolore commodo reprehenderit minim.
          </p>
        </div>
        <div className="Portfolio__element">
          <h3>Webskola.lv</h3>
          <a href="/portfolio_sites/My_1th-page/sale.html">
            <div className="Portfolio__preview webSkola__page"></div>
          </a>
          <p className="Portfolio__description">
            Consectetur est ut aute anim pariatur commodo excepteur fugiat
            nulla. Ipsum do nostrud esse consectetur cupidatat occaecat ad et.
            Dolor esse dolore commodo reprehenderit minim.
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

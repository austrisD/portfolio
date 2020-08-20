import React from "react";
import "./introduce.scss";

const introduce = () => {
  return (
    <section className="introduce__section">
      <div>
        <h3>My skillet</h3>
        <ul>
          <li>
            Html - <span>&#9733;&#9733;&#9733;</span>
          </li>
          <li>
            Css -<span>&#9733;&#9733;&#9733;</span>
          </li>
          <li>
            Bootstrap - <span>&#9733;&#9733;</span>
          </li>
          <li>
            JavaScript - <span>&#9733;&#9733;</span>
          </li>
          <li>
            jQuery - <span>&#9733;&#9733;</span>
          </li>
          <li>
            ReactJs -<span>&#9733;</span>
          </li>
          <li>
            jekyll -<span>&#9733;</span>
          </li>
        </ul>
      </div>
      <div className="avatar"></div>
    </section>
  );
};

export default introduce;

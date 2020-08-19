import React from "react";
import "./FrontPage.scss";

const FrontPage = () => {
  return (
    <>
      <header>
        <h1>Austris Daugulis</h1>
        <svg height="20" width="500">
          <line
            x1="10"
            y1="10"
            x2="500"
            y2="10"
            strokeWidth="2px"
            stroke="#001D3F"
          />
        </svg>
        <h2>
          Upcoming Front-end <span>&#9733;&#9733;&#9733;</span> DEVELOPER
        </h2>
      </header>
    </>
  );
};

export default FrontPage;

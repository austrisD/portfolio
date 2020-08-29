import React, { Component } from "react";
import "./css/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <aside className="aside__Container">
          <div className="aside__Avatar"></div>
          <h1>AUSTRIS DAUGULIS</h1>
          <p className="aside__jobTitle">Front-end Developer</p>
          <svg height="5" width="200">
            <line
              x1="0"
              y1="0"
              x2="200"
              y2="0"
              stroke="#748ba5"
              strokeWidth="5px"
            />
          </svg>
          <nav>
            <a href="#">ABOUT ME</a>
            <a href="#">SKILLS</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">CODING CHALLENGES</a>
            <a href="#">CONTACTS</a>
          </nav>
        </aside>
        <main className="main__Container"></main>
      </>
    );
  }
}

export default App;

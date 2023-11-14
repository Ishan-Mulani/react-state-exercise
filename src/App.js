// import "./App.css";
import React, { Component } from "react";
import Game from "./Game";
import MakeRandomNum from "./MakeRandomNum";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Game /> */}
        <MakeRandomNum maxNum={175} />
      </div>
    );
  }
}

export default App;

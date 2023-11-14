import React, { Component } from "react";

class MakeRandomNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 4,
    };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
      let randNum = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ score: randNum });
    }, 1000);
  }
  render() {
    return <div>Your score is : {this.state.score}</div>;
  }
}

export default MakeRandomNum;

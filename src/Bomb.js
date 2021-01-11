import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  clockBomb = () => {
    const newTime = this.state.secondsLeft - 1;
    this.setState({
      secondsLeft: newTime,
    });

    console.log(this.state.secondsLeft);
  };

  render() {
    return (
      <div className="bomb-timer" onClick={this.clockBomb}>
        <p>
          {this.state.secondsLeft === 0
            ? "Boom!"
            : `${this.state.secondsLeft} seconds left before I go boom!`}
        </p>
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare() {
    return (
      <Square value={this.props.count} onClick={() => this.props.onClick()} />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">{this.renderSquare()}</div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board count={this.state.count} onClick={() => this.handleClick()} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

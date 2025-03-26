import { Component } from "react";
import "./index.css";

class CoinToss extends Component {
  state = { isHead: true, noOfHead: 0, noOfTail: 0 };

  tossCoin = () => {
    const outcome = Math.random() < 0.5;
    this.setState({ isHead: outcome });

    if (outcome) {
      this.setState((prevState) => ({ noOfHead: prevState.noOfHead + 1 }));
    } else {
      this.setState((prevState) => ({ noOfTail: prevState.noOfTail + 1 }));
    }
  };

  render() {
    const { isHead, noOfHead, noOfTail } = this.state;
    const total = noOfHead + noOfTail;
    return (
      <div className="bg-cont">
        <div className="cont">
          <h1 className="head">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img
            src={
              isHead
                ? "https://assets.ccbp.in/frontend/react-js/heads-img.png"
                : "https://assets.ccbp.in/frontend/react-js/tails-img.png"
            }
            alt="toss result"
            className="img"
          />
          <button type="button" className="toss-button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="res-cont">
            <p>Total: {total}</p>
            <p>Heads: {noOfHead}</p>
            <p>Tails: {noOfTail}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinToss;

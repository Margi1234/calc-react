import React, { Component } from "react";
import ResultComponent from "./ResultComponent";

class KeyPadComponent extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      keys: [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
        { label: "7", value: 7 },
        { label: "8", value: 8 },
        { label: "9", value: 9 },
        { label: "+", value: "+" },
        { label: "(", value: "(" },
        { label: "%", value: "%" },
        { label: "*", value: "*" },
        { label: "/", value: "/" },
        { label: "-", value: "-" },
        { label: ")", value: ")" },
        { label: "C", value: "C" },
        { label: "CE", value: "CE" },
        { label: ".", value: "." },
        { label: "0", value: 0 }
      ]
    };
  }
  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    // if (this.state.result.includes("--")) {
    //   checkResult = this.state.result.replace("--", "+");
    // } else {
    checkResult = this.state.result;
    // }
    this.setState({ result: eval(checkResult) + "" });
    // try {
    //   this.setState({
    //     // eslint-disable-next-line
    //     result: (eval(checkResult) || "") + ""
    //   });
    // } catch (e) {
    //   this.setState({
    //     result: "error"
    //   });
    // }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="container buttons bg">
        <div className="calc-card">
          <ResultComponent result={this.state.result} />
          <table>
            <tr>
              <td>
                <button name="(" onClick={e => this.onClick(e.target.name)}>
                  (
                </button>
              </td>
              <td>
                <button name="CE" onClick={e => this.onClick(e.target.name)}>
                  CE
                </button>
              </td>
              <td>
                <button name=")" onClick={e => this.onClick(e.target.name)}>
                  )
                </button>
              </td>
              <td>
                <button name="C" onClick={e => this.onClick(e.target.name)}>
                  C
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button name="1" onClick={e => this.onClick(e.target.name)}>
                  1
                </button>
              </td>
              <td>
                <button name="2" onClick={e => this.onClick(e.target.name)}>
                  2
                </button>
              </td>
              <td>
                <button name="3" onClick={e => this.onClick(e.target.name)}>
                  3
                </button>
              </td>
              <td>
                <button name="+" onClick={e => this.onClick(e.target.name)}>
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button name="4" onClick={e => this.onClick(e.target.name)}>
                  4
                </button>
              </td>
              <td>
                <button name="5" onClick={e => this.onClick(e.target.name)}>
                  5
                </button>
              </td>
              <td>
                <button name="6" onClick={e => this.onClick(e.target.name)}>
                  6
                </button>
              </td>
              <td>
                <button name="-" onClick={e => this.onClick(e.target.name)}>
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button name="7" onClick={e => this.onClick(e.target.name)}>
                  7
                </button>
              </td>
              <td>
                <button name="8" onClick={e => this.onClick(e.target.name)}>
                  8
                </button>
              </td>
              <td>
                <button name="9" onClick={e => this.onClick(e.target.name)}>
                  9
                </button>
              </td>
              <td>
                <button name="*" onClick={e => this.onClick(e.target.name)}>
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button name="." onClick={e => this.onClick(e.target.name)}>
                  .
                </button>
              </td>
              <td>
                <button name="0" onClick={e => this.onClick(e.target.name)}>
                  0
                </button>
              </td>
              <td>
                <button name="=" onClick={e => this.onClick(e.target.name)}>
                  =
                </button>
              </td>
              <td>
                <button name="/" onClick={e => this.onClick(e.target.name)}>
                  ÷
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default KeyPadComponent;

import React, { Component } from "react";

class KeyPadComponent extends Component {
  render() {
    return (
      <div className="container buttons bg">
        <div className="calc-card">
          <table>
            <tr>
              <td>
                <button
                  name="("
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  (
                </button>
              </td>
              <td>
                <button
                  name="CE"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  CE
                </button>
              </td>
              <td>
                <button
                  name=")"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  )
                </button>
              </td>
              <td>
                <button
                  name="C"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  C
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  name="1"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  1
                </button>
              </td>
              <td>
                <button
                  name="2"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  2
                </button>
              </td>
              <td>
                <button
                  name="3"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  3
                </button>
              </td>
              <td>
                <button
                  name="+"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  name="4"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  4
                </button>
              </td>
              <td>
                <button
                  name="5"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  5
                </button>
              </td>
              <td>
                <button
                  name="6"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  6
                </button>
              </td>
              <td>
                <button
                  name="-"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  name="7"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  7
                </button>
              </td>
              <td>
                <button
                  name="8"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  8
                </button>
              </td>
              <td>
                <button
                  name="9"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  9
                </button>
              </td>
              <td>
                <button
                  name="*"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  name="."
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  .
                </button>
              </td>
              <td>
                <button
                  name="0"
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  0
                </button>
              </td>
              <td>
                <button
                  name="="
                  onClick={e => this.props.onClick(e.target.name)}
                >
                  =
                </button>
              </td>
              <td>
                <button
                  name="/"
                  onClick={e => this.props.onClick(e.target.name)}
                >
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

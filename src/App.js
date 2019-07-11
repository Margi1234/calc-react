// import React, { Component } from "react";
// import React from "react";
// //import logo from './logo.svg';
// import "./App.css";
// import Buttons from "./Buttons";
// import Output from "./Output";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       result: ""
//     };
//   }
//   onClick = button => {
//     if (button === "=") {
//       this.calculate();
//     } else if (button === "AC") {
//       this.reset();
//     } else if (button === "<") {
//       this.backspace();
//     } else {
//       this.setState({
//         result: this.state.result + button
//       });
//     }
//   };

//   calculate = () => {
//     var checkResult = "";
//     if (this.state.result.includes("--")) {
//       checkResult = this.setState.result.replace("--", "+");
//     } else {
//       checkResult = this.state.result;
//     }
//     this.setState({
//       result: (eval(checkResult) || "") + ""
//     });
//   };

//   reset = () => {
//     this.setState({
//       result: ""
//     });
//   };

//   backspace = () => {
//     this.setState({
//       result: this.setState.slice(0, -1)
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <Output result={this.state.result} />
//           <Buttons onClick={this.onClick} />
//         </div>
//       </div>
//     );
//   }
// }

// // export default App;
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;

import React, { Component } from "react";
import "./App.css";
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
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
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;

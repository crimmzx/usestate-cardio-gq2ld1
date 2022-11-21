import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Prob1 from "./Problem1";
import Prob2 from "./Problem2";
import Prob3 from "./Problem3";
import Prob4 from "./Problem4";

/**
 * STATE MANAGEMENT CARDIO 💪
 *
 * Find each problem description in the components shown below!
 */

const App = () => (
  <div>
    <Prob1 />
    <Prob2 />
    <Prob3 />
    <Prob4 />
  </div>
);

render(<App />, document.getElementById("root"));

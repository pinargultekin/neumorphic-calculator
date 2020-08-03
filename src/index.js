import React from "react";
import { render } from "react-dom";

import "./styles.scss";

const App = () => (


  <div className="Calculator-main">
    <form>
      <div className="Calculator-screen">
        <input className="result" type="text" placeholder="0" name="result" />
      </div>
      <div className="Calculator-buttons">
        <div className="row">
          <input className="button" type="button" name="percent" value="%" />
          <input className="button" type="button" name="caret" value="^" />
          <input className="button" type="button" name="square-root" value="√" />
          <input className="button" type="button" name="clear" value="C" />
        </div>
        <div className="row">
          <input className="button" type="button" name="seven" value="7" />
          <input className="button" type="button" name="eight" value="8" />
          <input className="button" type="button" name="nine" value="9" />
          <input className="button" type="button" name="divide" value="÷" />
        </div>
        <div className="row">
          <input className="button" type="button" name="four" value="4" />
          <input className="button" type="button" name="five" value="5" />
          <input className="button" type="button" name="six" value="6" />
          <input className="button" type="button" name="multiply" value="x" />
        </div>
        <div className="row">
          <input className="button" type="button" name="one" value="1" />
          <input className="button" type="button" name="two" value="2" />
          <input className="button" type="button" name="three" value="3" />
          <input className="button" type="button" name="minus" value="-" />
        </div>
        <div className="row">
          <input className="button" type="button" name="zero" value="0" />
          <input className="button" type="button" name="dot" value="." />
          <input className="button" type="button" name="equal" value="=" />
          <input className="button" type="button" name="add" value="+" />
        </div>
      </div>
    </form>
  </div>
);

render(<App />, document.getElementById("app"));

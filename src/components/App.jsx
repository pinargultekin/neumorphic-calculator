import React from "react";
import "../styles.scss";
import Buttons from "./Buttons";
import Result from "./Result";
function App() {
  return <div className="Calculator-main">
    <form>
      <Result />
      <Buttons />
    </form>
  </div>;
}
export default App;

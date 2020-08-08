import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState(null);
  console.log(num1);
  console.log(num2);
  console.log(operation);
  useEffect(() => {}, [operation, num2, num1]);

  const Calculate = {
    "÷": (val1, val2) => val1 / val2,
    "+": (val1, val2) => val1 + val2,
    "-": (val1, val2) => val1 - val2,
    x: (val1, val2) => val1 * val2,
    // "%":(val1) =>val1 / 100,
    "^": (val1, val2) => Math.pow(val1, val2),
    "√": (val1) => Math.sqrt(val1),
    "=": (val2) => val2
  };
  const performOp = () => {
    let temp = Calculate[operation](parseFloat(num1), parseFloat(num2));
    setOperation(null);
    setNum2(String(temp));
    setNum1(null);
  };

  const handleNumber = (number) => {
    setNum2(num2 === "0" ? String(number) : num2 + number);
    console.log(number);
  };

  const insertDot = () => {
    if (!/\./.test(num2)) {
      setNum2(num2 + ".");
    }
  };

  const percentage = () => {
    setNum2(parseFloat(num2) / 100);
    if (num1 && num2 === "") {
      setNum1(parseFloat(num1) / 100);
    }
  };

  const clear = () => {
    setNum1("0");
    setNum1(0);
  };

  function handleOperator(value) {
    if (Number.isInteger(value)) {
      handleNumber(parseInt(value, 10));
    } else if (value in Calculate) {
      if (operation === null) {
        setOperation(value);
        setNum1(num2);
        setNum2("");
      }
      if (operation) {
        setOperation(value);
      }
      if (num1 && operation && num2) {
        performOp();
      }
    } else if (value === "C") {
      clear();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  }
  // function handleClear(e) {
  //   const value = e.target.value;
  //   console.log(value);
  // }
  // function handleNumber(e) {
  //   // let newNum = +e.target.value;

  //   // if (typeof newNum === "number") {
  //   //   setNum1((pV) => {
  //   //     return [...pV, newNum];
  //   //   });
  //   // }
  // }
  // console.log(num1);
  // function handleDecimal(e) {
  //   const value = e.target.value;
  //   console.log(value);
  // }
  // function handleResult(e) {
  //   const value = e.target.value;
  //   console.log(value);
  // }

  return (
    <form>
      <div className="Calculator-screen">
        {/* <div className="current-num">{num1}</div> */}
        <div className="output">{num2}</div>
      </div>
      <div className="Calculator-buttons">
        <div className="row">
          <Buttons
            className="button operation"
            value={"%"}
            onClick={handleOperator}
          />
          <Buttons
            className="button operation"
            type="button"
            value={"^"}
            onClick={handleOperator}
          />
          <Buttons
            className="button operation"
            type="button"
            value={"√"}
            onClick={handleOperator}
          />
          <Buttons
            className="button clear"
            type="button"
            value={"C"}
            onClick={handleOperator}
          />
        </div>
        <div className="row">
          <Buttons
            className="button number"
            type="button"
            value={7}
            onClick={handleOperator}
          />
          <Buttons
            className="button number"
            type="button"
            value={8}
            onClick={handleOperator}
          />
          <Buttons
            className="button number"
            type="button"
            value={9}
            onClick={handleOperator}
          />
          <Buttons
            className="button operation"
            type="button"
            value={"÷"}
            onClick={handleOperator}
          />
        </div>
        <div className="row">
          <Buttons
            className="button number"
            type="button"
            value={4}
            onClick={handleOperator}
          />
          <Buttons
            className="button number"
            type="button"
            value={5}
            onClick={handleOperator}
          />
          <Buttons
            className="button number"
            type="button"
            value={6}
            onClick={handleOperator}
          />
          <Buttons
            className="button operation"
            type="button"
            value={"x"}
            onClick={handleOperator}
          />
        </div>
        <div className="row">
          <Buttons
            className="button number"
            type="button"
            value={1}
            onClick={handleOperator}
          />
          <Buttons
            className="button number"
            type="button"
            value={2}
            onClick={handleOperator}
          />
          <Buttons
            className="button number"
            type="button"
            value={3}
            onClick={handleOperator}
          />
          <Buttons
            className="button operation"
            type="button"
            value={"-"}
            onClick={handleOperator}
          />
        </div>
        <div className="row">
          <Buttons
            className="button number"
            type="button"
            value={0}
            onClick={handleOperator}
          />
          <Buttons
            className="button operation"
            type="button"
            value={"."}
            onClick={handleOperator}
          />
          <Buttons
            className="button operation"
            type="button"
            value={"="}
            onClick={handleOperator}
          />
          <Buttons
            className="button operation"
            type="button"
            value={"+"}
            onClick={handleOperator}
          />
        </div>
      </div>
    </form>
  );
}
export default Calculator;

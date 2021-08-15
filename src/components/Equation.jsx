import { useState } from "react";
import { useEffect } from "react";

export default function Equation({ style, operation }) {
  const [symbol, setSymbol] = useState();
  const [equation, setEquation] = useState({});
  const [result, setResult] = useState();

  const randomizeForAddition = (maxNumber) => {
    let numbers = {
      firstNumber: Math.floor(Math.random() * maxNumber),
      secondNumber: Math.floor(Math.random() * maxNumber),
    };
    setEquation(numbers);

    setResult(equation.firstNumber + equation.secondNumber);
  };

  const isItCorrect = () => {};

  useEffect(() => {
    randomizeForAddition(10);
  }, []);

  useEffect(() => {
    if (operation === "addition") {
      setSymbol("+");
    } else if (operation === "subtraction") {
      setSymbol("-");
    } else if (operation === "division") {
      setSymbol("/");
    } else if (operation === "multiplication") {
      setSymbol("x");
    }
  }, [operation]);
  return (
    <div
      className={
        `equation 
                    d-flex 
                    justify-content-between 
                    text-center 
                    bg-danger 
                    text-white ` + operation
      }
    >
      <h1 className="col-4">{equation.firstNumber}</h1>
      <h1 className="col-4">{symbol}</h1>
      <h1 className="col-4">{equation.secondNumber}</h1>
    </div>
  );
}

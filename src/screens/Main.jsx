import Equation from "../components/Equation";
import Answer from "../components/Answer";
import Operations from "../components/Operations";
import Keyboard from "../components/Keyboard";

import { useState } from "react";

export default function Main() {
  const [operation, setOperation] = useState("addition");
  const [answer, setAnswer] = useState("");

  const typeNumber = (number) => {
    let concatnated = answer.concat(number);
    setAnswer(concatnated);
    console.log(answer);
  };
  const deleteNumber = () => {
    let sliced = answer.slice(0, -1);
    setAnswer(sliced);
    console.log(sliced);
  };

  const operationSwitchHandler = (name) => {
    setOperation(name);
  };
  return (
    <section className="main">
      <div className="top">
        <Operations handler={operationSwitchHandler} />
        <Equation operation={operation} />
        <Answer operation={operation} answer={answer} />
      </div>

      <Keyboard
        operation={operation}
        typeNumber={typeNumber}
        deleteNumber={deleteNumber}
      />
    </section>
  );
}

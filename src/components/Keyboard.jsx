import { useState } from "react";

export default function Keyboard({ operation, typeNumber, deleteNumber }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={`keyboard container text-center text-white ` + operation}>
      <section className={`row keyboard-row ` + operation}>
        <button className="col" onClick={() => typeNumber(7)}>
          7
        </button>
        <button className="col" onClick={() => typeNumber(8)}>
          8
        </button>
        <button className="col" onClick={() => typeNumber(9)}>
          9
        </button>
      </section>

      <section className="row keyboard-row">
        <button className="col" onClick={() => typeNumber(4)}>
          4
        </button>
        <button className="col" onClick={() => typeNumber(5)}>
          5
        </button>
        <button className="col" onClick={() => typeNumber(6)}>
          6
        </button>
      </section>

      <section className="row keyboard-row">
        <button className="col" onClick={() => typeNumber(1)}>
          1
        </button>
        <button className="col" onClick={() => typeNumber(2)}>
          2
        </button>
        <button className="col" onClick={() => typeNumber(3)}>
          3
        </button>
      </section>
      <section className="row keyboard-row">
        <button className="col" onClick={() => deleteNumber()}>
          <i className="fas fa-backspace"></i>
        </button>
        <button className="col" onClick={() => typeNumber(0)}>
          0
        </button>
        <button
          className="col"
          onClick={() => console.log(numbers[3])}
          onClick={(value) => console.log(value)}
        >
          <i className="fas fa-equals"></i>
        </button>
      </section>
    </div>
  );
}

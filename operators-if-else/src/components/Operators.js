import React from "react";

function Operators() {
  let score = 0;
  return (
    <div>
      <h1>Operators</h1>
      <button
        type="button"
        onClick={() => {
          let a = 20 + 30 + 40;
          console.log(a);
          let b = 20 - 10;
          console.log(b);
          let c = 20 % 3;
          console.log(c);
        }}
      >
        Arthmetic Operators
      </button>
      <button
        type="button"
        onClick={() => {
          score++;

          console.log(score);
        }}
      >
        increament
      </button>
      <button
        type="button"
        onClick={() => {
          score--;

          console.log(score);
        }}
      >
        decreament
      </button>
      <button
        type="button"
        onClick={() => {
          let a = 3;
          a += 4;
          a -= 3;
          a *= 6;
          a %= 5;
          a /= 2;

          console.log(a);
        }}
      >
        Assingment operators
      </button>
      <button
        type="button"
        onClick={() => {
          let a = 78;
          console.log(a >= 35);
          console.log(a == 78);
          console.log(a != 67);
          console.log(a <= 78);
        }}
      >
        Comparison Operators
      </button>
    </div>
  );
}

export default Operators;

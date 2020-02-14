export const js = `function addWith(num1) {
  return function(num2) {
    return num1 + num2;
  }
}

const addWithFive = addWith(5);
const nine = addWithFive(4);
console.log(nine); // Outputs 9`;

export const css = `.navigation {
  background-color: green;
}

@media screen and (min-width: 800px) {
  .navigation {
    background-color: blue;
  }
}`;
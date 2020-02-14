export const css: string = `.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`;

export const js: string = `// Calculate fibonacci numbers for the first 10 iteration
let a = 1;
let b = 0;
let temp;

for (let i = 10; i >= 0; i--) {
  temp = a;
  a = a + b;
  b = temp;
  console.log(b);
}`;

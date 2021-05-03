function addition(num1: number, num2: number): number {
  const add: number = num1 + num2;
  return add;
}
function multiplication(num1: number, num2: number): number {
  const multi: number = num1 * num2;
  return multi;
}
function subtraction(num1: number, num2: number): number {
  const sub: number = num1 - num2;
  return sub;
}
function division(num1: number, num2: number): number {
  const div: number = num1 / num2;
  return div;
}

console.log(addition(10, 20));
console.log(subtraction(10, 5));
console.log(multiplication(10, 2));
console.log(division(10, 3));

export{};
const nums: number[] = [10, 20, 30, 40, 50];
const result: number = nums.reduce((sum: number, items: number): number => {
  sum += items;
  return sum;
}, 0);
console.log(result);

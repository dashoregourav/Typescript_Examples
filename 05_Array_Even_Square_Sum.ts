export{};

const nums: number[] = [1, 2, 3, 4, 5];
const getEvenNumbers: number[] = nums.filter((items: number): boolean => {
  return items % 2 == 0;
});
// console.log(getEvenNumbers);
const getSquare: number[] = getEvenNumbers.map((items: number): number => {
  return items * items;
});
// console.log(getSquare);
const getSum: number = getSquare.reduce((sum: number, items: number): number => {
    return (sum += items);
  },0);
console.log(getSum);


var nums = [10, 20, 30, 40, 50];
var result = nums.reduce(function (sum, items) {
  sum += items;
  return sum;
}, 0);
console.log(result);

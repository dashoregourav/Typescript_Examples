var nums = [1, 2, 3, 4, 5];
var getEvenNumbers = nums.filter(function (items) {
    return items % 2 == 0;
});
// console.log(getEvenNumbers);
var getSquare = getEvenNumbers.map(function (items) {
    return items * items;
});
// console.log(getSquare);
var getSum = getSquare.reduce(function (sum, items) {
    return (sum += items);
}, 0);
console.log(getSum);

var ages = [10, 33, 45, 12, 25, 13, 09, 100];
var getAdults = ages.filter(checkAdults);
function checkAdults(age) {
  return age >= 18;
}
console.log(getAdults);

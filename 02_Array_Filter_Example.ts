const ages: number[] = [10, 33, 45, 12, 25, 13, 09, 100];
const getAdults: number[] = ages.filter(checkAdults);

function checkAdults(age: number): boolean {
  return age >= 18;
}

console.log(getAdults);

var names = ["gourav", "dashore", "yash"];
console.log(names);
console.log("length of names array :" + names.length);
for (var i = 0; i < names.length; i++) {
  console.log(i + "=>" + names[i]);
}
console.log("==========After Pushing 2 Elements at the end==============");
names.push("Shivansh");
names.push("Ram");
names.forEach(function (items, index) {
  console.log(index + "=>" + items);
});
console.log("==========After Poping 1 Element at the end==============");
names.pop();
names.forEach(function (items, index) {
  console.log(index + "=>" + items);
});
console.log("==========After Pushing 1 Element at the start==============");
names.unshift("abhishek");
names.forEach(function (items, index) {
  console.log(index + "=>" + items);
});
console.log("==========After Popping 1 Element at the start==============");
names.shift();
names.forEach(function (items, index) {
  console.log(index + "=>" + items);
});

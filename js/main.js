const array = [2, 4, 7, 5, 4, 3, 8]
const result = array.filter(function(a, b, c) {
return c.indexOf(a) === b;
});
//aは要素、bは要素のindex、cはarray自身にあたり最初のindexのみ返す//
console.log(result);

const leapyear = 2020;
if (leapyear % 4 === 0 && leapyear % 100 !== 0 || leapyear % 400 === 0) {
  console.log("うるう年")
}
const leapyear2 = 2021;
if (leapyear2 % 4 === 0 && leapyear2 % 100 !== 0 || leapyear2 % 400 === 0) {
  console.log("うるう年")
} else {
  console.log("うるう年ではない");
}
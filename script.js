//forEach
let users = ['ram', 'sham', 'jerry', 'harsh'];
users.forEach(function(value) {
    console.log(value);
});

//map method
const number = [40, 34, 24, 98, 65, 12];
const output = number.map(function doubled(x) {
    return x * 2;
});
console.log(output);
const res = number.map((x) => x.toString(2));
console.log(res);

//filter method
const arr = [1, 3, 6, 9, 12, 2];
const output2 = arr.filter((x) => x % 2 === 0);
console.log(output2);

//some()
let arr2 = [3, 6, 7, 8, 97];
let output3 = arr2.some((x) => x < 5);
console.log(output3);

//every
let output4 = arr.every(x => x > 3);
console.log(output4);
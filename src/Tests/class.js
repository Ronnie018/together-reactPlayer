const array = [1, 2, 3, 4, 5];

// for (let num of array) {
//   console.log(num);
// }

// array.forEach((num) => {
//   console.log(num);
// })

// const odds = array.filter((num) => !(num % 2 === 0));

// console.log(odds);

const toStringArray = array.map((num) => {
  return String(num);
});

// i miss you
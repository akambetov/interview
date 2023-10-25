// Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны `n`, которую передали как аргумент.

// **Input**: Number

// **Output**: Number[]

// function fibonacci(n) {
//   // todo
//   const seq = [1, 1];

//   if (n < 2) {
//     return seq.slice(0, n);
//   }

//   while (seq.length < n) {
//     const last = seq[seq.length - 1];
//     const prev = seq[seq.length - 2];

//     seq.push(last + prev);
//   }

//   return seq;
// }

// console.log(fibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]

// OPTIMIZED
const fibonacci = (function () {
  const seq = [1, 1];

  return function (n) {
    if (seq.length >= n) {
      return seq.slice(0, n);
    }

    while (seq.length < n) {
      const last = seq[seq.length - 1];
      const prev = seq[seq.length - 2];

      seq.push(last + prev);
    }

    return seq;
  };
})();

console.log(fibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]
console.log(fibonacci(5)); // -> [1, 1, 2, 3, 5, 8, 13, 21]
console.log(fibonacci(9)); // -> [1, 1, 2, 3, 5, 8, 13, 21]

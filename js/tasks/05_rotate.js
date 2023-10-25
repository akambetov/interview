// ### Повернута ли строка?

// Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.

// **Input**: String, String

// **Output**: Boolean

//  My Solution
// function isStringRotated(source, test) {
//   if (source.length !== test.length) {
//     return false;
//   }

//   const calcFreq = (str) => {
//     const freq = {};

//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];

//       if (freq[char]) {
//         freq[char]++;
//       } else {
//         freq[char] = 1;
//       }
//     }

//     return freq;
//   };

//   const sourceStrCharFreq = calcFreq(source);
//   const testStrCharFreq = calcFreq(test);

//   for (key in sourceStrCharFreq) {
//     if (sourceStrCharFreq[key] !== testStrCharFreq[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isStringRotated('javascript', 'scriptjava')); // -> true
// console.log(isStringRotated('javascript', 'iptjavascr')); // -> true
// console.log(isStringRotated('javascript', 'java')); // -> false

// ====================================================================================
// Vladilen Minin Solution

// const isStringRotatedM = (source, test) => {
//   if (source.length !== test.length) return false;

//   for (let i = 0; i < source.length; i++) {
//     const rotate = source.slice(i, source.length) + source.slice(0, i);

//     if (test === rotate) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(isStringRotatedM('javascript', 'scriptjava')); // -> true
// console.log(isStringRotatedM('javascript', 'iptjavascr')); // -> true
// console.log(isStringRotatedM('javascript', 'java')); // -> false

// ====================================================================================
// Vladilen Minin Solution 2

const isStringRotatedM2 = (source, test) =>
  source.length === test.length && (source + source).includes(test);

console.log(isStringRotatedM2('javascript', 'scriptjava')); // -> true
console.log(isStringRotatedM2('javascript', 'iptjavascr')); // -> true
console.log(isStringRotatedM2('javascript', 'java')); // -> false

/*
Уникальность всех символов в строке

Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

**Input**: String

**Output**: Boolean*
*/

// 1 --------------------------------------------------------------
//  My solution
// function isUnique(string) {
//   for (let i = 0; i < string.length; i++) {
//     for (let j = i + 1; j < string.length; j++) {
//       if (string[i] === string[j]) return false;
//     }
//   }

//   return true;
// }

// console.log(isUnique('abcdef')); // -> true
// console.log(isUnique('1234567')); // -> true
// console.log(isUnique('abcABC')); // -> true
// console.log(isUnique('abcadef')); // -> false

// 2 --------------------------------------------------------------
// lastIndexOf
//
// function isUniqueM_1(string) {
//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];
//     if (string.lastIndexOf(char) !== i) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isUniqueM_1('abcdef')); // -> true
// console.log(isUniqueM_1('1234567')); // -> true
// console.log(isUniqueM_1('abcABC')); // -> true
// console.log(isUniqueM_1('abcadef')); // -> false

// 3 --------------------------------------------------------------
// Set
//
// function isUniqueM_2(string) {
//   const set = new Set();

//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];

//     if (set.has(char)) {
//       return false;
//     }

//     set.add(char);
//   }

//   return true;
// }
// console.log(isUniqueM_2('abcdef')); // -> true
// console.log(isUniqueM_2('1234567')); // -> true
// console.log(isUniqueM_2('abcABC')); // -> true
// console.log(isUniqueM_2('abcadef')); // -> false

// 3 --------------------------------------------------------------
// Set

function isUniqueM_3(string) {
  return new Set(string).size === string.length;
}

console.log(isUniqueM_3('abcdef')); // -> true
console.log(isUniqueM_3('1234567')); // -> true
console.log(isUniqueM_3('abcABC')); // -> true
console.log(isUniqueM_3('abcadef')); // -> false

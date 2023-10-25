// Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.

// **Input**: String[]

// **Output**: Boolean

// My solution
function allAnagrams(array) {
  const firstSortedString = array[0].split('').sort().join('');

  for (let i = 1; i < array.length; i++) {
    const sortedStringItem = array[i].split('').sort().join('');
    if (sortedStringItem !== firstSortedString) return false;
  }

  return true;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])); // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])); // false

// ====================================================================
// Minin

// function allAnagramsM(array) {
//   const sorted = array.map((str) => str.split('').sort().join(''));

//   for (let i = 1; i < sorted.length; i++) {
//     if (sorted[i] !== sorted[0]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(allAnagramsM(['abcd', 'bdac', 'cabd'])); // true
// console.log(allAnagramsM(['abcd', 'bdXc', 'cabd'])); // false

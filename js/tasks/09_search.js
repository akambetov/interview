// Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть `-1`.

// **Input**: Number[], Number

// **Output**: Number

// Time O(n)
// function search(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) return i;
//   }

//   return -1;
// }

// console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
// console.log(search([1, 3, 6, 13, 17], 12)); // -> -1

// Time O(log(n))
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  if (target < array[start] || target > array[end]) return -1;

  while (true) {
    const middle = Math.floor((start + end) / 2);

    if (target === array[start]) return start;

    if (target === array[end]) return end;

    if (end - start <= 1) return -1;

    if (target > array[middle]) start = middle + 1;
    else if (target < array[middle]) end = middle - 1;
    else return middle;
  }
}

console.log(binarySearch([1, 3, 6, 13, 17], 3)); // -> 3
console.log(binarySearch([1, 3, 6, 13, 17], 12)); // -> -1

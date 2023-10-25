// ### Является ли массив подмножеством другого массива

// Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.

// **Input**: Number[] & String[], Number[] & String[]

// **Output**: Boolean

function arraySubset(source, subset) {
  if (source.length < subset.length) return false;

  const indexes = {};
  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i]);

    if (index === -1) return false;

    if (indexes[index]) return false;
    else indexes[index] = index;
  }
  return true;
}

const source1 = [2, 1, 3];
const subset1 = [1, 2, 3];
console.log(arraySubset(source1, subset1)); // -> true

const source2 = [2, 1, 1, 3];
const subset2 = [1, 2, 3];
console.log(arraySubset(source2, subset2)); // -> true

const source3 = [1, 1, 1, 3];
const subset3 = [1, 3, 3];
console.log(arraySubset(source3, subset3)); // -> false

const source4 = [1, 2];
const subset4 = [1, 2, 3];
console.log(arraySubset(source4, subset4)); // -> false

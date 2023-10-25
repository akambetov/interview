// ### Перевернуть матрицу 3х3

// Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.

// **Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.

// ```
// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]
// [7, 8, 9]    [9, 6, 3]
// ```

/* 
90 deg

// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]
// [7, 8, 9]    [9, 6, 3]

00 01 02        02 12 22
10 11 12        01 11 21
20 21 22        00 10 20
*/

/* 
180 deg

// [1, 2, 3]    [9, 8, 7]
// [4, 5, 6] -> [6, 5, 4]
// [7, 8, 9]    [3, 2, 1]

00 01 02        22 21 20
10 11 12        12 11 10
20 21 22        02 01 00
*/

/* 
270 deg

// [1, 2, 3]    [3, 6, 9]
// [4, 5, 6] -> [2, 5, 8]
// [7, 8, 9]    [1, 4, 7]

00 01 02        20 10 00
10 11 12        21 11 01
20 21 22        22 21 20
*/

// **Input**: Number[][]

// **Output**: Number[][]

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


const print = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};

function rotate90(source) {
  const rotated90 = source[0].map(() => []);

  for (let i = 0; i < source.length; i++) {
    for (let j = source[i].length - 1 ; j >= 0; j--) {
      rotated90[i].push(source[j][i]);
    }
  }

  return rotated90;
}

console.log('90deg')
print(rotate90(matrix));

// 180 deg
function rotate180(source) {
  const rotated90 = rotate90(source)
  const rotated180 = source[0].map(() => []);

  for (let i = rotated90.length - 1; i >= 0; i--) {
    for (let j = rotated90[i].length - 1; j >=0; j--) {
      rotated180[i].push(rotated90[j][i])
      
    }
  }

  return rotated180
}

function rotate180Short(source) {
  return rotate90(rotate90(source))
}

console.log('180deg')
print(rotate180(matrix));
console.log('180deg short')
print(rotate180Short(matrix));


// 180 deg
function rotate270(source) {
  const rotated180 = rotate180(source)
  const rotated270 = source[0].map(() => []);

  for (let i = 0; i < rotated180.length; i++) {
    for (let j = rotated180[i].length - 1; j >=0; j--) {
      rotated270[i].push(rotated180[j][i])
      
    }
  }

  return rotated270
}

function rotate270Short (source) {
  return rotate90(rotate180(source))
}

console.log('270deg')
print(rotate270(matrix));
console.log('270deg short')
print(rotate270Short(matrix));
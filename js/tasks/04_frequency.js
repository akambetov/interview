// ### Какая строка встречается чаще всего

// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.

// **Input**: String[]

// **Output**: String

function highestFrequency(array) {
  const frequency = {};
  let maxFreq = 0;
  let maxFreqStr;

  array.forEach((element) => {
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }

    if (frequency[element] > maxFreq) {
      maxFreq = frequency[element];
      maxFreqStr = element;
    }
  });

  return maxFreqStr;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
console.log(highestFrequency(['abc', 'def'])); // -> abc
console.log(
  highestFrequency([
    'abc',
    'abc',
    'def',
    'def',
    'def',
    'ghi',
    'ghi',
    'ghi',
    'ghi',
  ])
); // -> ghi

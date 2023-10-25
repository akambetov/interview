// ### Сбалансированные скобки

// Напишите функцию, которая проверит строку на сбалансированность скобок: `{}, (), []`. Вернуть `true` если они сбалансированы, иначе `false`.

// **Input**: String

// **Output**: Boolean

function isBalanced(string) {
  const open = '{([';
  const close = '})]';

  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const openBracketStack = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (open.includes(char)) {
      openBracketStack.push(char);
    } else if (close.includes(char)) {
      const openBracket = openBracketStack.pop();

      if (map[openBracket] !== char) return false;
    }
  }

  return !openBracketStack.length;
}

console.log(isBalanced('(x + y) - (4)')); // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')); // -> true
console.log(isBalanced('[{()}]')); // -> true
console.log(isBalanced('(50)(')); // -> false
console.log(isBalanced('[{]}')); // -> false

function getCode(char) {
  return char.charCodeAt(0);
}

function getChar(code) {
  return String.fromCharCode(code);
}

function f(char1, char2) {
  const code1 = getCode(char1);
  const code2 = getCode(char2);
  let result = '';
  const start = Math.min(code1, code2) + 1;
  const end = Math.max(code1, code2) - 1;

  for (let i = start; i <= end; i++) {
    const currentChar = getChar(i);

    if (i === end) {
      result += currentChar;
    } else {
      result += (currentChar + ' ');
    }
  }

  console.log(result);
}

f('a', 'd');
f('#', ':');
f('C', '#');

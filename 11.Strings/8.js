function f(string) {
  const result = [];

  for (let letter of string) {
    const lastLetter = result[result.length - 1];

    if (letter !== lastLetter) {
      result.push(letter);
    }
  }

  console.log(result.join(''));
}

f('aaaaabbbbbcdddeeeedssaa');
f('qqqwerqwecccwd');

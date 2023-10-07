function getLetterValue(letter) {
  const letters = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
  };

  return letters[letter.toLowerCase()];
}

function f(string) {
  if (string.length === 1) {
    console.log(getLetterValue(string));
    return;
  }

  const [letter1, letter2] = string.split('');
  const result = getLetterValue(letter1) * 26 + getLetterValue(letter2);

  console.log(result);
}

f('AB');
f('A');
f('C');
f('CZ');
f('MM');

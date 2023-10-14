function f(string, word) {
  const stars = '*'.repeat(word.length);
  const regex = new RegExp(word, 'g');
  const result = string.replace(regex, stars);
  console.log(result);
}

f('A small sentence with some words', 'small');
f('Find the hidden word', 'hidden');
f('A small sentence with small words', 'small');

function f(string, startIndex, count) {
  const result = string.slice(startIndex, startIndex + count);
  console.log(result);
}

f('ESentence', 1, 8);
f('DropWord', 4, 7);

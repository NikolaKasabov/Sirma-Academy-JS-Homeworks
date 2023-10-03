function f(m) {
  const matrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });

  let sum = 0;

  matrix.forEach((line, index) => {
    sum += line[index];
    sum += line[line.length - 1 - index];
  });

  console.log(sum);
}

f(
  [
    "1 2 3",
    "4 5 6",
    "7 8 9"
  ]
);

f(
  [
    "10 11",
    "14 15"
  ]
);

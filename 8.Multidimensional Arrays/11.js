function f(m) {
  const matrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });

  let sum = 0;
  matrix.forEach((row, index, arr) => {
    if (index === 0 || index === arr.length - 1) {
      const rowSum = row.reduce((acc, cur) => acc + cur, 0);
      sum += rowSum;
    } else {
      sum += row[0];
      sum += row[row.length - 1];
    }
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
    "1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"
  ]
);

function f(m) {
  const matrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });

  const rowSums = [];
  const colSums = [];

  matrix.forEach(row => {
    const rowSum = row.reduce((acc, cur) => acc += cur, 0);
    rowSums.push(rowSum);
  });

  for (let col = 0; col < matrix[0].length; col++) {
    let colSum = 0;

    for (let row = 0; row < matrix.length; row++) {
      colSum += matrix[row][col];
    }

    colSums.push(colSum);
  }

  console.log(`Row Sums: ${rowSums.join(', ')}`);
  console.log(`Column Sums: ${colSums.join(', ')}`);
}

f(
  [
    "1 2",
    "3 4",
    "5 6"
  ]
);

f(
  [
    "1 2 3",
    "4 5 6",
    "7 8 9"
  ]
);

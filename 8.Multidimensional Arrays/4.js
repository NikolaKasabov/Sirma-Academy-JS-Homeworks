function f(m) {
  const rows = m.length;
  const cols = m[0].length;

  const sum = m.reduce((accRows, curRow) => {
    const rowSum = curRow.reduce((accCol, curCol) => accCol + curCol, 0);
    return accRows + rowSum;
  }, 0);

  console.log(rows);
  console.log(cols);
  console.log(sum);
}

f(
  [
    [7, 1, 3, 3, 2, 1],
    [1, 3, 9, 8, 5, 6],
    [4, 6, 7, 9, 1, 0]
  ]
);

f(
  [
    [10, 11, 12, 13],
    [14, 15, 16, 17]
  ]
);

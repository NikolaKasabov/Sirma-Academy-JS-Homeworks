function f(m) {
  const matrix = [];
  const result = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);

    result.push(Array(row.length).fill(0));
  });

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row === 0 && col < matrix[row].length - 1) {
        result[row][col + 1] = matrix[row][col];
      } else if (row === matrix.length - 1) {
        if (col === 0) {
          result[row - 1][col] = matrix[row][col];
        } else {
          result[row][col - 1] = matrix[row][col];
        }
      } else {
        if (col === 0) {
          result[row - 1][col] = matrix[row][col];
        } else if (col === matrix[row].length - 1) {
          result[row + 1][col] = matrix[row][col];
        } else {
          result[row][col] = matrix[row][col];
        }
      }
    }
  }

  result.forEach(row => console.log(row.join(' ')));
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
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 1 0 0"
  ]
);

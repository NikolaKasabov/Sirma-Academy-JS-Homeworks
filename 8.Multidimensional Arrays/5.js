function f(m) {
  const matrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });

  let sum = 0;
  let rowIndex = 0;
  let colIndex = 0;

  for (let row = 0; row < (matrix.length - 1); row++) {
    for (let col = 0; col < (matrix[row].length - 1); col++) {
      const currentSum = matrix[row][col] + matrix[row][col + 1] + matrix[row + 1][col] + matrix[row + 1][col + 1];
      if (currentSum > sum) {
        sum = currentSum;
        rowIndex = row;
        colIndex = col;
      }
    }
  }

  console.log(sum);
  console.log(`${matrix[rowIndex][colIndex]} ${matrix[rowIndex][colIndex + 1]}`);
  console.log(`${matrix[rowIndex + 1][colIndex]} ${matrix[rowIndex + 1][colIndex + 1]}`);
}

f(
  [
    "7 1 3 3 2 1",
    "1 3 9 8 5 6",
    "4 6 7 9 1 0"
  ]
);

f(
  [
    "10 11 12 13",
    "14 15 16 17"
  ]
);

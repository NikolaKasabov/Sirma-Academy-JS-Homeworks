function getColumnSum(matrix, columnIndex) {
  let sum = 0;

  matrix.forEach(row => {
    sum += row[columnIndex];
  });

  return sum;
}

function f(m) {
  const matrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });

  const sum = matrix[0].reduce((acc, cur) => acc + cur, 0);

  // check rows sums
  for (let row = 1; row < matrix.length; row++){
    const currentSum = matrix[row].reduce((acc, cur) => acc + cur, 0);
    if (currentSum !== sum) {
      console.log('False');
      return;
    }
  }

  // check columns sums
  for (let col = 0; col < matrix[0].length; col++) {
    const currentSum = getColumnSum(matrix, col);
    if (currentSum !== sum) {
      console.log('False');
      return;
    }
  }

  // check diagonals sums
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  for (let row = 0; row < matrix.length; row++) {
    firstDiagonalSum += matrix[row][row];
    secondDiagonalSum += matrix[row][matrix[row].length - 1 - row];
  }

  if (firstDiagonalSum !== sum || secondDiagonalSum !== sum) {
    console.log('False');
    return;
  }

  console.log('True');
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
    "1 0 0 0",
    "0 0 0 1",
    "0 1 0 0",
    "0 0 1 0"
  ]
);

f(
  [
    "8 1 6",
    "3 5 7",
    "4 9 2"
  ]
);

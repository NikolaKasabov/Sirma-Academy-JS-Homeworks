function f(m) {
  const matrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });

  const firstDiagonal = [];
  const secondDiagonal = [];

  for (let row = 0; row < matrix.length; row++) {
    firstDiagonal.push(matrix[row][row]);
    secondDiagonal.push(matrix[row][matrix[row].length - 1 - row]);
  }

  console.log(firstDiagonal.join(' '));
  secondDiagonal.reverse();
  console.log(secondDiagonal.join(' '));
}

f(
  [
    "1 2 3",
    "1 2 3",
    "1 2 3"
  ]
);

f(
  [
    "1 2 3 2",
    "1 1 2 4",
    "1 2 1 4",
    "2 2 3 1"
  ]
);

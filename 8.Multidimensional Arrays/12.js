function f(m) {
  const matrix = [];
  
  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });
  
  const result = [];
  for (let col = 0; col < matrix.length; col++) {
    const resultRow = [];

    for (let row = (matrix.length - 1); row >= 0; row--) {
      resultRow.push(matrix[row][col]);
    }

    result.push(resultRow);
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
    "0 1 2 3",
    "4 5 6 7",
    "8 9 10 11",
    "12 13 14 15"
  ]
);

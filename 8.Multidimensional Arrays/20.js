function calcSum3x3(matrix, startRowIndex, startColIndex) {
  let sum = 0;

  for (let row = startRowIndex; row < (startRowIndex + 3); row++) {
    for (let col = startColIndex; col < (startColIndex + 3); col++) {
      sum += matrix[row][col];
    }
  }

  return sum;
}

function f(m) {
  const matrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });

  let biggestSum = 0;
  let biggestSumStartingRow = 0;
  let biggestSumStartingCol = 0;
  for (let row = 0; row < matrix.length - 2; row++) {
    for (let col = 0; col < matrix[row].length - 2; col++) {
      const currentSum = calcSum3x3(matrix, row, col);
      if (currentSum > biggestSum) {
        biggestSum = currentSum;
        biggestSumStartingRow = row;
        biggestSumStartingCol = col;
      }
    }
  }

  console.log(`Sum = ${biggestSum}`);
  for (let row = biggestSumStartingRow; row < biggestSumStartingRow + 3; row++) {
    let line = [];

    for (let col = biggestSumStartingCol; col < biggestSumStartingCol + 3; col++) {
      line.push(matrix[row][col]);
    }

    console.log(line.join(' '));
  }
}

f(
  [
    "1 5 5 2 4",
    "2 1 4 14 3",
    "3 7 11 2 8",
    "4 8 12 16 4"
  ]
);

f(
  [
    "1 0 4 3 1 1",
    "1 3 1 3 0 4",
    "6 4 1 2 5 6",
    "2 2 1 5 4 1",
    "3 3 3 6 0 5"
  ]
);

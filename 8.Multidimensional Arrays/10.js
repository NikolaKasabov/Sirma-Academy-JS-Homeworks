function changeRowTo0(matrix, rowIndex) {
  const matrixCopy = JSON.parse(JSON.stringify(matrix));
  const arrayOf0 = Array(matrixCopy[rowIndex].length).fill(0);
  matrixCopy[rowIndex] = arrayOf0;

  return matrixCopy;
}

function changeColTo0(matrix, colIndex) {
  const matrixCopy = JSON.parse(JSON.stringify(matrix));
  matrixCopy.forEach(row => {
    row[colIndex] = 0;
  });

  return matrixCopy;
}

function f(m) {
  let matrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });

  let result = JSON.parse(JSON.stringify(matrix));

  matrix.forEach((row, index) => {
    if (row.includes(0)) {
      result = changeRowTo0(result, index);
    }

    const indexOf0 = row.indexOf(0);
    if (indexOf0 > -1) {
      result = changeColTo0(result, indexOf0);
    }
  });

  result.forEach(row => console.log(row.join(' ')));
}

f(
  [
    "1 2 3",
    "4 0 6",
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

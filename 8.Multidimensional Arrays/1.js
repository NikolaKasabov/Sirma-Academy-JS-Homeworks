function isLengthEqual(matrix1, matrix2) {
  if (matrix1.length !== matrix2.length) {
    return false;
  }

  for (let row = 0; row < matrix1.length; row++) {
    if (matrix1[row].length !== matrix2[row].length) {
      return false;
    }
  }

  return true;
}

function f(matrix1, matrix2) {
  if (!isLengthEqual(matrix1, matrix2)) {
    console.log('not equal');
    return;
  }

  for (let row = 0; row < matrix1.length; row++) {
    for (let col = 0; col < matrix1[row].length; col++) {
      if (matrix1[row][col] !== matrix2[row][col]) {
        console.log('not equal');
        return;
      }
    }
  }

  console.log('equal');
}

f(
  [
    [1, 2, 3],
    [2, 1, 3]
  ],
  [
    [1, 2, 3],
    [2, 1, 3]
  ]
);

f(
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [
    [1, 3],
    [4, 5]
  ]
);

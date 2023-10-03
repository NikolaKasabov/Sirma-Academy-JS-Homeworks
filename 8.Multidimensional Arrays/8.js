function f(string) {
  let [matrixSize, pattern] = string.split(' ');
  matrixSize = Number(matrixSize);

  // create a matrix filled with 0
  const matrix = [];
  for (let i = 0; i < matrixSize; i++) {
    const line = Array(matrixSize).fill(0);
    matrix.push(line);
  }

  // fill the matrix
  let element = 1;
  for (let col = 0; col < matrixSize; col++) {
    if (pattern === 'A') {
      for (let row = 0; row < matrixSize; row++) {
        matrix[row][col] = element;
        element++;
      }
    } else if (pattern === 'B') {
      if (col % 2 === 0) {
        for (let row = 0; row < matrixSize; row++) {
          matrix[row][col] = element;
          element++;
        }
      } else {
        for (let row = matrixSize - 1; row >= 0; row--) {
          matrix[row][col] = element;
          element++;
        }
      }
    }
  }

  matrix.forEach(line => console.log(line.join(' ')));
}

// f('3 A');
// f('3 B');


////////////////////////////////////////////////////////// Second solution:

function getPatternAMatrix(size) {
  const matrix = [];

  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(j * size + i);
    }
    matrix.push(row);
  }

  return matrix;
}

function getPatternBMatrix(size) {
  const matrix = [];

  for (let i = 1; i <= size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      if (j % 2 === 0) {
        row.push(j * size + i);
      } else {
        row.push((j + 1) * size - i + 1);
      }
    }

    matrix.push(row);
  }

  return matrix;
}

function f2(string) {
  let [matrixSize, pattern] = string.split(' ');
  matrixSize = Number(matrixSize);
  let matrix;

  if (pattern === 'A') {
    matrix = getPatternAMatrix(matrixSize);
  } else if (pattern === 'B') {
    matrix = getPatternBMatrix(matrixSize);
  }

  matrix.forEach(row => console.log(row.join(' ')));
}

f('3 A');
f('3 B');

// A->0; B->1; C->2...
function getLetterIndex(letter) {
  return letter.toLowerCase().charCodeAt(0) - 97;
}

function f(matrix, range) {
  const [start, end] = range.split(':');
  let [startCol, startRow] = start.split('');
  startCol = getLetterIndex(startCol);
  startRow = Number(startRow) - 1;
  let [endCol, endRow] = end.split('');
  endCol = getLetterIndex(endCol);
  endRow = Number(endRow) - 1;

  let sum = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // if ((row < startRow)
      //   || (row === startRow && col < startCol)
      //   || (row === endRow && col > endCol)
      //   || (row > endRow)) {
      //   continue;
      // }

      if ((row < startRow)
        || (col < startCol)
        || (col > endCol)
        || (row > endRow)) {
        continue;
      }

      sum += matrix[row][col];
    }
  }

  console.log(sum);
}

f(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  "A1:C2"
);

f(
  [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
  ],
  "A1:B4"
);

f(
  [
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  "A1:C4"
);

function getNextDirection(currentDirection) {
  const directions = {
    right: 'down',
    down: 'left',
    left: 'up',
    up: 'right',
  };

  return directions[currentDirection];
}

function f(m) {
  const matrix = [];
  const zeroesMatrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);

    zeroesMatrix.push(Array(row.length).fill(0));
  });

  const steps = matrix.length * matrix[0].length;
  let direction = 'right';
  let row = 0;
  let col = 0;
  const result = [];

  for (let i = 1; i <= steps; i++) {
    if (!result.includes(matrix[row][col])) {
      result.push(matrix[row][col]);
    }

    zeroesMatrix[row][col] = matrix[row][col];
    let nextElement;
    if (direction === 'right') {
      nextElement = zeroesMatrix[row][col + 1];
    } else if (direction === 'down') {
      nextElement = zeroesMatrix[row + 1] && zeroesMatrix[row + 1][col];
    } else if (direction === 'left') {
      nextElement = zeroesMatrix[row][col - 1];
    } else if (direction === 'up') {
      nextElement = zeroesMatrix[row - 1] && zeroesMatrix[row - 1][col];
    }

    if (nextElement !== undefined && nextElement === 0) {
      if (direction === 'right') {
        col++;
      } else if (direction === 'down') {
        row++;
      } else if (direction === 'left') {
        col--;
      } else if (direction === 'up') {
        row--;
      }
    } else {
      if (i === steps) {
        break;
      }
      direction = getNextDirection(direction);
      i--;
    }
  }

  console.log(result.join(' '));
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
    "1 2 3 4",
    "5 6 7 8",
    "9 10 11 12",
    "13 14 15 16"
  ]
);

f(
  [
    "1 2",
    "3 4"
  ]
);

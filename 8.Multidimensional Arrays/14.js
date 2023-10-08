function hasRowMoreThanOne1(matrix) {
  matrix.forEach(row => {
    const ones = row.filter(el => el === 1);
    if (ones.length > 1) {
      return true;
    }
  });

  return false;
}

function hasColumnMoreThanOne1(matrix) {
  for (let col = 0; col < matrix[0].length; col++) {
    let ones = 0;
    
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col] === 1) {
        ones++;
        if (ones > 1) {
          return true;
        }
      }
    }
  }

  return false;
}

function f(m) {
  const matrix = [];

  m.forEach(string => {
    const row = string.split(' ').map(el => Number(el));
    matrix.push(row);
  });

  if (hasRowMoreThanOne1(matrix) || hasColumnMoreThanOne1(matrix)) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

f(
  [
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 0 1 0"
  ]
);

f(
  [
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 1 0 0"
  ]
);

f(
  [
    "0 1 0 0",
    "0 0 0 0",
    "1 0 0 0",
    "0 0 0 0"
  ]
);

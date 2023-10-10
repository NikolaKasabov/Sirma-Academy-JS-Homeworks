function f(n) {
  const matrix = [];

  for (let row = 0; row < n; row++) {
    const line = [];

    for (let col = 0; col < n; col++) {
      if (row % 2 === 0) {
        if (col % 2 === 0) {
          line.push(0);
        } else {
          line.push(1);
        }
      } else {
        if (col % 2 === 0) {
          line.push(1);
        } else {
          line.push(0);
        }
      }
    }

    matrix.push(line);
  }

  matrix.forEach(row => console.log(row.join(' ')));
}

f(3);
f(4);

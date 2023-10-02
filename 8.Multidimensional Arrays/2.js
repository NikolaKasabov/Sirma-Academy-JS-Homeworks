function f(m1, m2) {

  for (let row = 0; row < m1.length; row++) {
    const line = [];
    
    for (let col = 0; col < m1[row].length; col++) {
      const sum = m1[row][col] + m2[row][col];
      line.push(sum);
    }

    console.log(line.join(' '));
  }
}

f(
  [
    [1, 2],
    [3, 4]
  ],
  [
    [2, 2],
    [2, 2]
  ]
);

f(
  [
    [1, 2, 3],
    [4, 3, 1]
  ],
  [
    [1, 2, 3],
    [4, 2, 2]
  ]
);

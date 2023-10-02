function f(m1, m2) {

  for (let row = 0; row < m1.length; row++) {
    let line = '';

    for (let col = 0; col < m1[row].length; col++) {
      if (m1[row][col] !== m2[row][col]) {
        line += '*';
      } else {
        line += m1[row][col];
      }
    }

    console.log(line);
  }
}

f(
  [
    "a b c d",
    "a b c d",
    "a b c d"
  ],
  [
    "k b c k",
    "a b g d",
    "a k c d"
  ]
);

f(
  [
    "1 2",
    "3 4",
    "5 6",
    "7 8",
    "9 1"
  ],
  [
    "0 2",
    "3 1",
    "1 6",
    "7 4",
    "1 1"
  ]
);

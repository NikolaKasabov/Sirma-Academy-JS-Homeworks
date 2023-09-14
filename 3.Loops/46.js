function getLetter(n) {
  return String.fromCharCode(n);
}

// lowercase letters codes in ASCII table: 97-122

function f(n1, n2) {
  for (let i1 = 1; i1 < n1; i1++) {
    for (let i2 = 1; i2 < n1; i2++) {
      for (let i3 = 97; i3 <= (96 + n2); i3++) {
        for (let i4 = 97; i4 <= (96 + n2); i4++) {
          for (let i5 = (i1 + 1); i5 <= n1; i5++) {
            if (i5 === i1 || i5 === i2) {
              continue;
            }
            console.log(`${i1}${i2}${getLetter(i3)}${getLetter(i4)}${i5}`);
          }
        }
      }
    }
  }
}

f(2, 4);
f(3, 1);

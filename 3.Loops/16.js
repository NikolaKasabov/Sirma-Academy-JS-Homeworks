function f(n1, n2) {
  for (let i = 1; i <= n1; i++) {
    let line = '';

    for (let j = 1; j <= n2; j++) {
      if (i === 1 || i === n1) {
        line += '*';
      } else {
        if (j === 1 || j === n2) {
          line += '*';
        } else {
          line += ' ';
        }
      }
    }

    console.log(line);
  }
}

f(4, 6);
f(2, 2);
f(3, 4);

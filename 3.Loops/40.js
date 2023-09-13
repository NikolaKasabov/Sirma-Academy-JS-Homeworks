function f(n) {
  let emptySpaces = 0;

  for (let i = 1; i <= n; i++) {
    emptySpaces += (i - 2);
    if (emptySpaces < 0) {
      emptySpaces = 0;
    }

    let line = ' '.repeat(emptySpaces);
    line += '#'.repeat(i);

    console.log(line);
  }
}

f(5);
f(4);
f(2);

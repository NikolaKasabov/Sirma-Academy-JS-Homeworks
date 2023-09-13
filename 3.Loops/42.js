function f(n) {
  for (let i = 1; i <= (n - 1); i++) {
    let line = ' '.repeat(n - 1 - i);
    line += '*'.repeat(i);

    console.log(line);
  }

  for (let i = (n - 2); i > 0; i--) {
    let line = ' '.repeat(n - 1 - i);
    line += '*'.repeat(i);

    console.log(line);
  }
}

f(5);
f(4);
f(10);

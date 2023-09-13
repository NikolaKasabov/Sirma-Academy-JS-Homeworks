function f(n) {
  for (let i = 1; i <= n; i++) {
    let line = ' '.repeat(n - i);
    line += '*'.repeat(2 * i - 1);
    console.log(line);
  }

  const bottomLine = ' '.repeat(n - 1) + '*';
  console.log(bottomLine);
}

f(6);
f(4);
f(3);

function f(n) {
  let firstLine = ' '.repeat(n + 1) + '|';
  console.log(firstLine);

  for (let i = 1; i <= n; i++){
    let line = ' '.repeat(n - i);
    line += '*'.repeat(i);
    line += ' | ';
    line += '*'.repeat(i);
    console.log(line);
  }
}

f(1);
f(2);
f(3);
f(4);

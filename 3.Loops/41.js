function f(n) {
  const firstAndLastLine = '#'.repeat(n + 2);
  console.log(firstAndLastLine);

  // upper half
  for (let i = 1; i <= (Math.ceil(n / 2)); i++) {
    let line = ' '.repeat(i);
    line += '#';

    // not the last line
    if (i !== Math.ceil(n / 2)) {
      line += ' '.repeat(n - i * 2);
      line += '#';
    } else {  // last line
      if (n % 2 === 0) {
        line += '#';
      }
    }

    console.log(line);
  }

  // bottom half
  for (let i = (Math.floor(n / 2) - 1); i > 0 ; i--) {
    let line = ' '.repeat(i);
    line += '#';
    line += ' '.repeat(n - i * 2);
    line += '#';

    console.log(line);
  }

  console.log(firstAndLastLine);
}

f(5);
f(8);
f(2);

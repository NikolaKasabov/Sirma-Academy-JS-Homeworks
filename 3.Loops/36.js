function f(n) {
  const firstAndLastLine = '*'.repeat(n * 2) + ' '.repeat(n) + '*'.repeat(n * 2);
  console.log(firstAndLastLine);
  
  for (let i = 1; i <= (n - 2); i++) {
    let line = '*' + '/'.repeat(n * 2 - 2) + '*';
    
    if (i === (Math.ceil(n / 2) - 1)) {
      line += '|'.repeat(n);
    } else {
      line += ' '.repeat(n);
    }

    line += '*' + '/'.repeat(n * 2 - 2) + '*';
    console.log(line);
  }

  console.log(firstAndLastLine);
}

f(3);
f(4);
f(5);

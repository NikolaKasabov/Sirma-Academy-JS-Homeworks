function f(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= i; j++) {
      line += '*';
    }

    console.log(line);
  }

  for (let i = (n - 1); i > 0; i--) {
    let line = '';
    
    for (let j = i; j > 0; j--) {
      line += '*';
    }

    console.log(line);
  }
}

f(1);
f(2);
f(3);
f(4);

function f(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n; j++) {
      line += '*';
    }

    console.log(line);
  }
}

f(2);
f(3);

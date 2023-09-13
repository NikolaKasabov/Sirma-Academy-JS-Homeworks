function f(n) {

  for (let i = 1; i <= n; i++) {
    let line = ' '.repeat(n - i);
    let currentNumber = i;

    for (let j = 1; j <= (i * 2 - 1); j++) {
      line += currentNumber.toString();

      if (j < i) {
        currentNumber++;
      } else {
        currentNumber--;
      }
    }

    line += ' '.repeat(n - i);
    console.log(line);
  }
}

f(5);
f(4);
f(5);

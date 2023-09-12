function f(n) {
  let currentNumber = 0;
  let numbersPerLine = 1;

  while (currentNumber <= n) {
    let line = '';
    
    for (let i = 0; i < numbersPerLine; i++) {
      currentNumber++;
      if (currentNumber > n) break;
      line += currentNumber;
    }
    
    numbersPerLine++;
    console.log(line);
  }
}

f(7);
f(10);
f(15);

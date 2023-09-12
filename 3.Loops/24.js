function f(n) {
  const numberAsString = n.toString();
  const numberLength = numberAsString.length;

  let reversedNumber = '';
  for (let i = numberLength - 1; i >= 0; i--) {
    reversedNumber += numberAsString[i];
  }

  for (let i = 0; i < numberLength; i++) {
    let line = '';

    const currentNumber = Number(reversedNumber[i]);
    const currentChar = String.fromCharCode(currentNumber + 33);

    if (currentNumber === 0) {
      line = 'ZERO';
    } else {
      for (let j = 0; j < currentNumber; j++) {
        line += currentChar;
      }
    }

    console.log(line);
    line = '';
  }
}

f(2049);
f(9347439);

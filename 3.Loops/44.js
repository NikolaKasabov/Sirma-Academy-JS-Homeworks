function calcNumberOfLines(n) {
  let tempNumber = 0;
  let itemsOnLine = 1;
  let numberOfLines = 0;

  while (tempNumber < n) {
    tempNumber += itemsOnLine;
    itemsOnLine++;
    numberOfLines++;
  }

  return numberOfLines;
}

function f(n) {
  const numberOfLines = calcNumberOfLines(n);
  let tempNumber = 0;

  for (let i = 1; i <= numberOfLines; i++) {
    let line = ' '.repeat(numberOfLines - i);

    for (let j = 1; j <= i; j++) {
      tempNumber++;
      if (tempNumber > n) break;
      line += `${tempNumber} `;
    }

    console.log(line);
  }
}

f(7);
f(10);
f(12);

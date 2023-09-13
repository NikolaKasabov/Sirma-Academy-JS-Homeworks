function f(n) {
  const numberOfRoofLines = Math.ceil(n / 2);

  let numberOfAsterisksOnTop;
  if (n % 2 === 0) {
    numberOfAsterisksOnTop = 2;
  } else {
    numberOfAsterisksOnTop = 1;
  }

  // roof
  for (let i = 0; i < numberOfRoofLines; i++) {
    let numberOfAsterisks = numberOfAsterisksOnTop + i * 2;
    let line = ' '.repeat((n - numberOfAsterisks) / 2);
    line += '*'.repeat(numberOfAsterisks);
    line += ' '.repeat((n - numberOfAsterisks) / 2);

    console.log(line);
  }

  // walls
  for (let i = 0; i < 2; i++){
    let line = '*';
    line += ' '.repeat(n - 2);
    line += '*';

    console.log(line);
  }
}

f(7);
f(4);
f(3);

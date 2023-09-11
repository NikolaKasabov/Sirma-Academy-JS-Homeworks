function f(n1, n2, magicNumber) {
  let combinationNumber = 0;
  let result = '';
  let hasEnded = false;

  for (let i = n1; i <= n2; i++) {
    if (hasEnded) break;

    for (let j = n1; j <= n2; j++) {
      combinationNumber++;
      const sum = i + j;

      if (sum === magicNumber) {
        result = `Combination ${combinationNumber} - (${i} + ${j} = ${sum})`;
        hasEnded = true;
        break;
      }
    }
  }

  if (!result) {
    result = `${combinationNumber} combinations - neither equals ${magicNumber}`;
  }

  console.log(result);
}

f(1, 10, 5);
f(23, 24, 20);
f(1, 2, 3);

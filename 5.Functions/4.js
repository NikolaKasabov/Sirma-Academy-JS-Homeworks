function f(n) {
  let oddSum = 0;
  let evenSum = 0;
  const string = n.toString();

  for (let i = 0; i < string.length; i++) {
    const currentNumber = Number(string[i]);

    if (currentNumber % 2 !== 0) {
      oddSum += currentNumber;
    } else {
      evenSum += currentNumber;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

f(1000435);
f(3495892137259234);

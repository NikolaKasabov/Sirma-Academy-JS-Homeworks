function f(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let el of arr) {
    const currentNumber = Number(el);

    if (currentNumber % 2 === 0) {
      evenSum += currentNumber;
    } else {
      oddSum += currentNumber;
    }
  }

  console.log(evenSum - oddSum);
}

f([1, 2, 3, 4, 5, 6]);
f([3, 5, 7, 9]);
f([2, 4, 6, 8, 10]);

function f(arr) {
  let sum = 0;

  for (let el of arr) {
    const currentNumber = Number(el);
    if (currentNumber % 2 === 0) {
      sum += currentNumber;
    }
  }

  console.log(sum);
}

f(['1', '2', '3', '4', '5', '6']);
f(['3', '5', '7', '9']);
f(['2', '4', '6', '8', '10']);

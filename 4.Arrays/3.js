function f(n, arr) {
  const newArr = arr.slice(0, n);

  for (let i = 0; i < newArr.length / 2; i++) {
    const currentNumber = newArr[i];
    newArr[i] = newArr[newArr.length - 1 - i];
    newArr[newArr.length - 1 - i] = currentNumber;
  }

  console.log(newArr.join(' '));
}

f(3, [10, 20, 30, 40, 50]);
f(4, [-1, 20, 99, 5]);
f(2, [66, 43, 75, 89, 47]);

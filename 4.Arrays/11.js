function f(arr, n) {
  const arrCopy = arr.slice();

  for (let i = 1; i <= n; i++) {
    arrCopy.unshift(arrCopy.pop());
  }

  console.log(arrCopy.join(' '));
}

f(['1', '2', '3', '4'], 2);
f(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

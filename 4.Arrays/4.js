function f(arr) {
  const revArr = arr.slice();

  for (let i = 0; i < revArr.length / 2; i++) {
    const currentValue = revArr[i];
    revArr[i] = revArr[revArr.length - 1 - i];
    revArr[revArr.length - 1 - i] = currentValue;
  }

  console.log(revArr.join(' '));
}

f(['a', 'b', 'c', 'd', 'e']);
f(['abc', 'def', 'hig', 'klm', 'nop']);
f(['33', '123', '0', 'dd']);

function f(arr) {
  let tempArr = arr.slice();

  while (true) {
    if (tempArr.length === 1) break;

    const tempArr2 = [];

    for (let i = 0; i < tempArr.length - 1; i++) {
      tempArr2.push(tempArr[i] + tempArr[i + 1]);
    }

    tempArr = tempArr2.slice();
  }

  console.log(tempArr[0]);
}

f([2, 10, 3]);
f([5, 0, 4, 1, 2]);
f([1]);

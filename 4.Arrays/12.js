function f(arr) {
  const result = [arr[0]];
  let biggestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
      result.push(arr[i]);
      biggestNumber = arr[i];
    }
  }

  console.log(result.join(' '));
}

f([1, 3, 8, 4, 10, 12, 3, 2, 24]);
f([1, 2, 3, 4]);
f([20, 3, 2, 15, 6, 1]);

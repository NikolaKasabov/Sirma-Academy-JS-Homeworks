function sortAscending(arr) {
  const result = arr.slice();

  for (let i = 0; i < (result.length - 1); i++) {
    for (let j = (i + 1); j < result.length; j++) {
      if (result[i] > result[j]) {
        const current = result[i];
        result[i] = result[j];
        result[j] = current;
      }
    }
  }

  return result;
}

function f(arr) {
  const result = sortAscending(arr).slice(0, 2);

  console.log(result.join(' '));
}

f([30, 15, 50, 5]);
f([3, 0, 10, 4, 7, 3]);

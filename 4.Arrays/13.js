function f(arr) {
  const result = [];

  for (let el of arr) {
    if (el < 0) {
      result.unshift(el);
    } else {
      result.push(el);
    }
  }

  result.forEach(el => console.log(el));
}

f([7, -2, 8, 9]);
f([3, -2, 0, -1]);

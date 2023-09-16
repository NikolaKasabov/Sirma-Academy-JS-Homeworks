function f(n, arr) {
  console.log(arr.slice(0, n).join(' '));
  console.log(arr.slice(-n).join(' '));
}

f(2, [7, 8, 9]);
f(3, [6, 7, 8, 9]);

function f(arr) {
  const result = arr.filter((el, i) => i % 2 !== 0)
    .map(el => el * 2)
    .reverse();
  
  console.log(result.join(' '));
}

f([10, 15, 20, 25]);
f([3, 0, 10, 4, 7, 3]);

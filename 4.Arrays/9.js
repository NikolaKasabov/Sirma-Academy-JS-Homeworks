function f(arr, n) {
  const result = [];

  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }

  console.log(result.join(' '));
}

f(['5', '15', '31', '14', '20'], 2);
f(['dsa', 'asd', 'demo', 'test'], 2);
f(['1', '2', '3', '4', '5'], 6);

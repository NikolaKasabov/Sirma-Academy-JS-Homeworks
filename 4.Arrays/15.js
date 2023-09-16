function f(n1, n2) {
  const arr = [1];

  for (let i = 1; i < (n1); i++) {
    let newEl = 0;

    for (let j = (i - n2); j < i; j++) {
      newEl += (arr[j] || 0);
    }

    arr.push(newEl);
  }

  console.log(arr.join(' '));
}

f(6, 3);
f(8, 2);

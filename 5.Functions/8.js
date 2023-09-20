function f(n) {
  let sum = 0;
  const numbers = [];

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
      numbers.push(i);
    }
  }

  if (sum === n) {
    console.log('Perfect number!');
    console.log(numbers.join(' + '));
  } else {
    console.log("It's not so perfect.");
  }
}

f(6);
f(28);
f(1236498);

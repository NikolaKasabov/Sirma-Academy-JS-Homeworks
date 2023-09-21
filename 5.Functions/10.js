function calcFactorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * calcFactorial(n - 1);
  }
}

function f(n1, n2) {
  const factorial1 = calcFactorial(n1);
  const factorial2 = calcFactorial(n2);
  const result = factorial1 / factorial2;

  console.log(result.toFixed(2));
}

f(5, 2);
f(6, 2);

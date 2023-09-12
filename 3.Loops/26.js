function isPrimeNumber(n) {
  let result = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result = false;
      break;
    }
  }

  return result;
}

function f(n1, n2, n1Add, n2Add) {
  for (let i = n1; i <= (n1 + n1Add); i++) {
    for (let j = n2; j <= (n2 + n2Add); j++) {
      if (isPrimeNumber(i) && isPrimeNumber(j)) {
        console.log(`${i}${j}`);
      }
    }
  }
}

f(10, 20, 5, 5);
f(10, 30, 9, 6);

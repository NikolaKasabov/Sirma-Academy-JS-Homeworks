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

function f(n1Limit, n2Limit, n3Limit) {
  for (let i = 1; i <= n1Limit; i++) {
    if (i % 2 !== 0) continue;

    for (let j = 2; j <= n2Limit; j++) {
      if (!isPrimeNumber(j)) continue;

      for (let k = 1; k <= n3Limit; k++) {
        if (k % 2 !== 0) continue;

        console.log(`${i}${j}${k}`);
      }
    }  
  }
}

// f(3, 5, 5);
f(6, 2, 6);

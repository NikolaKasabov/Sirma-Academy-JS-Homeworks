function f(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  console.log(result);
}

f(5);
f(3);
f(0);
f(1);
f(10);

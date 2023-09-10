function f(n) {
  let sum = 0;
  
  for (let i = 1; i <= n; i++) {
    sum += (i * 2);
  }

  console.log(sum);
}

f(3);
f(5);
f(1);
f(0);
f(10);

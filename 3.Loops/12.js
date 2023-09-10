function f(num) {
  let n1 = 1;
  let n2 = 1;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    const temp = n2;
    sum += n1;
    n2 = n1 + n2;
    n1 = temp;
  }

  console.log(sum);
}

f(3);
f(5);
f(1);
f(0);
f(10);

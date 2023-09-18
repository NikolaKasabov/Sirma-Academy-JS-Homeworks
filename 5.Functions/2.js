function getSum(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function f(n1, n2, n3) {
  const sum = getSum(n1, n2);
  const result = subtract(sum, n3);
  console.log(result);
}

f(23, 6, 10);
f(1, 17, 30);
f(42, 58, 100);

function f(n) {
  const string = n.toString();
  const numberOfDigits = string.length;
  let sum = 0;

  for (let i = 0; i < numberOfDigits; i++) {
    sum += (Number(string[i]) ** numberOfDigits);
  }

  console.log(sum === n);
}

f(153);
f(370);
f(123);
f(407);
f(1634);

function f(n) {
  let result = `${n} `;

  let temp = n;
  while (temp !== 1) {
    if (temp % 2 === 0) {
      temp /= 2;
    } else {
      temp = (temp * 3) + 1;
    }

    result += `${temp} `;
  }

  console.log(result);
}

f(6);
f(12);
f(9);

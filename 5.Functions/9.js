function f(n) {
  let result = `${n}%[`;

  for (let i = 1; i <= 10; i++) {
    if (i <= n / 10) {
      result += '%';
    } else {
      result += '.'
    }
  }

  result += ']';

  console.log(result);
  if (n === 100) {
    console.log('Complete!');
  } else {
    console.log('Loading...');
  }
}

f(30);
f(50);
f(100);

function f(n) {

  // arrow point
  for (let i = 1; i <= (n - 1); i++) {
    let line = ' '.repeat(n - 1 - i);
    line += '* '.repeat(i);
    console.log(line);
  }

  // how wide must be the arrow body?
  // arrow body ...
}

f(7);
f(4);
f(6);

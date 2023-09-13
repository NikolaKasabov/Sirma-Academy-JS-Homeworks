function f(n) {
  for (let i = 1; i <= n; i++){
    let line = '';

    for (let j = 1; j <= n; j++){
      if (j === 1 || j === n) {
        if (i === 1 || i === n) {
          line += '+';
        } else {
          line += '|';
        }
      } else {
        line += '-'; 
      }
    }

    console.log(line);
  }
}

f(3);
f(4);
f(5);
f(6);

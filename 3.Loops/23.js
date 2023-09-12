function f(n) {
  for (let i = 1; i <= 1000; i++) {
    if (i.toString().endsWith(n.toString())) {
      console.log(i);
    }
  }
}

f(6);

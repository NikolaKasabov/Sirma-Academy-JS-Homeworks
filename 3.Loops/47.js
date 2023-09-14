function f(n) {
  for (let i = 1111; i <= 9999; i++) {
    const string = i.toString();
    const n1 = Number(string[0]);
    const n2 = Number(string[1]);
    const n3 = Number(string[2]);
    const n4 = Number(string[3]);

    if (n % n1 === 0 && n % n2 === 0 && n % n3 === 0 && n % n4 === 0) {
      console.log(i);
    }
  }
}

f(3);

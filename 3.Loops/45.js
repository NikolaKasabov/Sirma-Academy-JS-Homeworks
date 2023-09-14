function areSumsEqual(n) {
  const string = n.toString();
  const oddSum = Number(string[0]) + Number(string[2]) + Number(string[4]);
  const evenSum = Number(string[1]) + Number(string[3]) + Number(string[5]);

  return oddSum === evenSum;
}

function f(n1, n2) {
  let noMatching = true;

  for (let i = n1; i <= n2; i++) {
    if (areSumsEqual(i)) {
      noMatching = false;
      console.log(i);
    }
  }

  if (noMatching) {
    console.log('None');
  }
}

f(100000, 100050);
f(299900, 300000);
f(100115, 100120);

function f(change) {
  const changeInSt = Math.round(change * 100);
  let numberOfCoins = 0;
  let currentSum = 0;

  while (true) {
    if (currentSum === changeInSt) break;

    if (changeInSt - currentSum >= 200) {
      currentSum += 200;
      numberOfCoins++;
    } else if (changeInSt - currentSum >= 100) {
      currentSum += 100;
      numberOfCoins++;
    } else if (changeInSt - currentSum >= 50) {
      currentSum += 50;
      numberOfCoins++;
    } else if (changeInSt - currentSum >= 20) {
      currentSum += 20;
      numberOfCoins++;
    } else if (changeInSt - currentSum >= 10) {
      currentSum += 10;
      numberOfCoins++;
    } else if (changeInSt - currentSum >= 5) {
      currentSum += 5;
      numberOfCoins++;
    } else if (changeInSt - currentSum >= 2) {
      currentSum += 2;
      numberOfCoins++;
    } else if (changeInSt - currentSum >= 1) {
      currentSum += 1;
      numberOfCoins++;
    }
  }

  console.log(numberOfCoins);
}

f(1.23);
f(2);
f(0.56);
f(2.73);

function f(lostGames, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
  const trashedHeadsets = Math.floor(lostGames / 2);
  const trashedMouses = Math.floor(lostGames / 3);

  let trashedKeyboards = 0;
  for (let i = 1; i <= lostGames; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      trashedKeyboards++;
    }
  }

  const trashedDisplays = Math.floor(trashedKeyboards / 2);
  const totalPrice = (trashedHeadsets * headsetPrice)
    + (trashedMouses * mousePrice)
    + (trashedKeyboards * keyboardPrice)
    + (trashedDisplays * displayPrice);

  console.log(`Rage expenses: ${totalPrice.toFixed(2)} lv.`);
}

f(7, 2, 3, 4, 5);
f(23, 12.5, 21.5, 40, 200);

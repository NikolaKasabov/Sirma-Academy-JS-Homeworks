function f(numberOf1Lv, numberOf2Lv, numberOf5Lv, sum) {

  // 5 lv
  for (let i = numberOf5Lv; i >= 0; i--) {
    // 2 lv
    for (let j = numberOf2Lv; j >= 0; j--){
      // 1 lv
      for (let k = numberOf1Lv; k >= 0; k--) {
        const currentSum = i * 5 + j * 2 + k;
        if (currentSum === sum) {
          console.log(`${k} * 1 lv. + ${j} * 2 lv. + ${i} * 5 lv. = ${currentSum} lv.`);
        }
      }
    }
  }
}

f(3, 2, 3, 10);
f(5, 3, 1, 7);

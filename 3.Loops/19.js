function f(money, numberOfStudents, lightsaberPrice, robePrice, beltPrice) {
  const neededNumberOfLightsabers = Math.ceil(numberOfStudents * 1.1);
  const lightsabersTotalPrice = neededNumberOfLightsabers * lightsaberPrice;
  
  const freeBelts = Math.floor(numberOfStudents / 6);
  const beltsTotalPrice = (numberOfStudents - freeBelts) * beltPrice;

  const robesTotalPrice = numberOfStudents * robePrice;

  const totalPrice = lightsabersTotalPrice + beltsTotalPrice + robesTotalPrice;

  if (totalPrice >= money) {
    console.log(`George Lucas will need ${(totalPrice - money).toFixed(2)}lv more.`);
  } else {
    console.log(`The money is enough - it would cost ${(totalPrice).toFixed(2)}lv.`);
  }
}

f(100, 2, 1.0, 2.0, 3.0);
f(100, 42, 12.0, 4.0, 3.0);

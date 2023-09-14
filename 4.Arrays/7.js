function f(arr1, arr2) {
  let areIdentical = true;
  let differenceIndex;
  let sum = 0;

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) {
      areIdentical = false;
      differenceIndex = i;
      break;
    } else {
      sum += Number(arr1[i]);
    }
  }

  if (areIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${differenceIndex} index`);
  }
}

f(['10', '20', '30'], ['10', '20', '30']);
f(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
f(['1'], ['10']);

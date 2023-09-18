function f(arr) {
  const copyArr = arr.slice();
  const sequences = [];

  while (copyArr.length > 0) {
    const temp = [copyArr[0]];

    if (copyArr.length > 1) {
      for (let i = 1; i < copyArr.length; i++) {
        if (copyArr[i] === temp[temp.length - 1]) {
          temp.push(copyArr[i]);
        } else {
          break;
        }
      }  
    }
    
    sequences.push(temp);
    copyArr.splice(0, temp.length);
  }

  let longestSequenceLength = Math.max(...sequences.map(el => el.length));
  const longestSequences = sequences.filter(el => el.length === longestSequenceLength);
  console.log(longestSequences[0].join(' '));
}

f([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
f([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
f([1, 1, 2, 3, 4, 5, 6, 2, 2]);
f([4, 4, 4, 4]);
f([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);

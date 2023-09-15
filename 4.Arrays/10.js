function f(arr) {
  const result = [];
  let tempNumber = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'add') {
      result.push(tempNumber);
      tempNumber++;
    } else {
      result.pop();
    }
  }

  if (result.length === 0) {
    console.log('Empty');
  } else {
    console.log(result.join(' '));
  }
}

f(['add', 'add', 'add', 'add']);
f(['add', 'add', 'remove', 'add', 'add']);
f(['remove', 'remove', 'remove']);

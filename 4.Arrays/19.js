function f(arr) {
  let result = arr[0].split(' ').map(el => Number(el));

  for (let i = 1; i < arr.length; i++) {
    let [command, n1, n2] = arr[i].split(' ');
    n1 = Number(n1);
    n2 = Number(n2);

    if (command === 'Add') {
      result.push(n1);
    } else if (command === 'Remove') {
      result = result.filter(el => el !== n1);
    } else if (command === 'RemoveAt') {
      result.splice(n1, 1);
    } else if (command === 'Insert') {
      result.splice(n2, 0, n1);
    }
  }

  console.log(result.join(' '));
}

f([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3"
]);

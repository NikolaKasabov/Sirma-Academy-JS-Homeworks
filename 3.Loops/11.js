function f(n) {
  const string = n.toString();
  let reversedString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  console.log(reversedString);
}

f(123);
f(9876);
f(505);
f(10203);
f(7);

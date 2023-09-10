function f(text) {
  let reversedText = '';

  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }

  console.log(text === reversedText);
}

f("radar");
f("hello");
f("racecar");
f("java");
f("madam");

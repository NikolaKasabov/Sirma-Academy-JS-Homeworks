function f(word, text) {
  const hasWord = text.toLowerCase().includes(word.toLowerCase());

  if (hasWord) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

f('javascript', 'JavaScript is the best programming language');
f('python', 'JavaScript is the best programming language');

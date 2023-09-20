function f(string) {
  const words = string
    .split(/[,;.!?'": ]/g)
    .filter(el => el.length > 0);
  const wordsLength = words.map(el => el.length);
  const minWordLength = Math.min(...wordsLength);
  const maxWordLength = Math.max(...wordsLength);

  let shortestWord = '';
  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (shortestWord.length === 0 && words[i].length === minWordLength) {
      shortestWord = words[i];
    }

    if (longestWord.length === 0 && words[i].length === maxWordLength) {
      longestWord = words[i];
    }

    if (shortestWord.length > 0 && longestWord.length > 0) break;
  }

  console.log(`Longest -> ${longestWord}`);
  console.log(`Shortest -> ${shortestWord}`);
}

f('Hello how are you today? I hope you are fine ');
f('Lorem Ipsum is dummy text of the typesetting industry.');

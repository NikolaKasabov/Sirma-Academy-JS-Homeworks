function f(wordsString, sentence) {
  const words = wordsString.split(',').map(word => word.trim());
  let result = sentence;
  
  words.forEach(word => {
    const stars = '*'.repeat(word.length);
    result = result.replace(stars, word);
  });

  console.log(result);
}

f('great', 'JavaScript* is ***** programming language');
f('the, best, learn', 'JavaScript is *** **** language to *****');

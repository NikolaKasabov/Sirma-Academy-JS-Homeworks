function isAValidWord(string) {
  for (let letter of string.toLowerCase()) {
    const asciiCode = letter.charCodeAt(0);
    if (asciiCode < 97 || asciiCode > 122) {
      return false;
    }
  }

  return true;
}

function f(string) {
  const words = string.split(/[\s,.!?]+/)
    .filter(word => {
      return word.startsWith('#') && (word.length > 1) && isAValidWord(word.slice(1));
    });

  words.forEach(word => console.log(word.slice(1)));
}

f('Everyone uses # to tag a #special word in #facebook');
f('The symbol # is known #variously in English-speaking #regions as the #number sign');

function f(string) {
  const words = string.match(/[A-Z][a-z]+/g);

  console.log(words.join(', '));
}

f('SplitMeIfYouCan');
f('HoldTheDoor');
f('ThisIsSoAnnoyingToDo');

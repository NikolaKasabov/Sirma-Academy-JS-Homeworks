function f(string, arr) {
  let result = string;
  const words = [...arr].sort((a, b) => b.length - a.length);

  words.forEach(word => {
    const wordLength = word.length;
    result = result.replace('_'.repeat(wordLength), word);
  });

  console.log(result);
}

f('Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so many _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']);

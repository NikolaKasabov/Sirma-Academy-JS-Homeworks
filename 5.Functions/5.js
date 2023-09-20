function isPalindrome(n) {
  let result = true;
  const string = n.toString();

  for (let i = 0; i < (string.length / 2); i++){
    if (string[i] !== string[string.length - 1 - i]) {
      result = false;
      break;
    }
  }

  return result;
}

function f(arr) {
  arr.forEach(el => console.log(isPalindrome(el)));
}

f([123, 323, 421, 121]);
f([32, 2, 232, 1010]);

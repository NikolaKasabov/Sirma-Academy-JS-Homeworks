function isCorrectLength(string) {
  return (string.length >= 6 && string.length <= 10);
}

function isConsistedOfLettersAndDigits(string) {
  // ASCII table codes:
  // lowercase letters: 97 - 122
  // uppercase letters: 65 - 90
  // digits: 48 - 57

  let result = true;

  for (let i = 0; i < string.length; i++) {
    const currentCode = string[i].charCodeAt(0);

    if (
      !(
        (currentCode >= 97 && currentCode <= 122)
        || (currentCode >= 65 && currentCode <= 90)
        || (currentCode >= 48 && currentCode <= 57)
      )
    ) {
      result = false;
      break;
    }
  }

  return result;
}

function hasAtLeast2Digits(string) {
  let numberOfDigits = 0;

  for (let i = 0; i < string.length; i++){
    const currentCode = string[i].charCodeAt(0);

    if (currentCode >= 48 && currentCode <= 57) {
      numberOfDigits++;
    }
  }

  return numberOfDigits >= 2;
}

function f(string) {
  let isValid = true;

  if (!isCorrectLength(string)) {
    console.log('Password must be between 6 and 10 characters');
    isValid = false;
  }

  if (!isConsistedOfLettersAndDigits(string)) {
    console.log('Password must consist only of letters and digits');
    isValid = false;
  }

  if (!hasAtLeast2Digits(string)) {
    console.log('Password must have at least 2 digits');
    isValid = false;
  }

  if (isValid) {
    console.log('Password is valid');
  }
}

f('pass');
f('APass123');
f('Pa$s$s');

function f(arr) {
  const phoneNumbers = arr[0];
  // const regex = new RegExp('\\+359[\\s-]2[\\s-][0-9]{3}[\\s-][0-9]{4}\\b', 'g');
  const regex = new RegExp('\\+359(\\s|-)2\\1[0-9]{3}\\1[0-9]{4}\\b', 'g'); // with group
  const validPhoneNumbers = phoneNumbers.match(regex)
    // .filter(num => !(num.includes(' ') && num.includes('-')));

  console.log(validPhoneNumbers.join(', '));
}

f(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
f(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']);
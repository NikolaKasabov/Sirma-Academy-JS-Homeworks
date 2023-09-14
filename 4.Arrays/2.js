function f(n) {
  const dayNumber = n - 1;
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  if (dayNumber >= 1 && dayNumber <= 7) {
    console.log(days[dayNumber]);
  } else {
    console.log('Invalid day!');
  }
}

f(3);
f(6);
f(11);

function f(arr) {
  const datesString = arr[0];
  const regex = new RegExp('[0-9]{2}(\\.|-|\\/)[A-Z][a-z]{2}\\1[0-9]{4}', 'g');
  const validDates = datesString.match(regex);

  const splitRegex = new RegExp('[.\\-/]', 'g');  
  validDates.forEach(date => {
    const [day, month, year] = date.split(splitRegex);
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  });
}

f(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23#09#1973, 1/Feb/2016']);
f(['1/Jan-1951 23/October/197 11-Dec-2010 18.Jan.2014']);

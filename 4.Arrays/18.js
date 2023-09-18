function f(arr) {
  const ordered = arr.slice().sort((a, b) => a.localeCompare(b));

  ordered.forEach((el, i) => console.log(`${i + 1}.${el}`));
}

f(["Potatoes", "Tomatoes", "Onions", "Apples"]);

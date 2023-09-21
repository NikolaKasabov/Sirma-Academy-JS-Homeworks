function f(obj) {
  Object.entries(obj)
    .forEach(el => console.log(`${el[0]} -> ${el[1]}`));
}

f({
  name: "Sofia",
  population: 1234567,
  country: "Bulgaria",
  postcode: "1000"
});

function f(json) {
  const obj = JSON.parse(json);

  Object.entries(obj).forEach(el => console.log(`${el[0]}:${el[1]}`));
}

f('{"name": "Ivan", "age": 40, "town": "Sofia"}');
f('{"firstName": "Ivan", "lastName": "Ivanov"}');

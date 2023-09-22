function f(name, lastName, eyeColor) {
  const obj = {
    name,
    lastName,
    eyeColor
  };

  const json = JSON.stringify(obj);
  console.log(json);
}

f("Ivan", "Ivanov", "blue");
f("Maria", "Petrova", "brown");

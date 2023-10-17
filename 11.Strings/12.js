function f(string) {
  const testNames = string.split(',').map(name => name.trim());
  const realNames = [];
  const regex = new RegExp('^[A-Z][a-z]+\\s[A-Z][a-z]+$');

  testNames.forEach(name => {
    if (regex.test(name)) {
      realNames.push(name);
    }
  });

  console.log(realNames.join(', '));
}

f("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov");

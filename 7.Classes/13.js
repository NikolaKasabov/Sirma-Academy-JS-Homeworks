function f(carsInfo) {
  const cars = {}

  carsInfo.forEach(string => {
    let [brand, model, quantity] = string.split('|');
    brand = brand.trim();
    model = model.trim();
    quantity = Number(quantity.trim());

    if (!cars.hasOwnProperty(brand)) {
      cars[brand] = {};
    }

    if (!cars[brand].hasOwnProperty(model)) {
      cars[brand][model] = quantity;
    } else {
      cars[brand][model] += quantity;
    }
  });

  for (let key in cars) {
    console.log(key);
    const models = cars[key];

    for (let key2 in models) {
      console.log(`###${key2} -> ${models[key2]}`);
    }
  }
}

f(
  [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
  ]
);

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meow() {
    console.log(`${this.name}, age ${this.age} says meow`);
  }
}

function f(arr) {
  const cats = [];

  arr.forEach(string => {
    const index = string.lastIndexOf(' ');
    const name = string.slice(0, index);
    const age = Number(string.slice(index + 1));

    const cat = new Cat(name, age);
    cats.push(cat);
  });

  cats.forEach(cat => cat.meow());
}

f(['Mellon 2', 'Tom 3']);
f(['Branch 1', 'Poppy 3', 'Goldy 2']);

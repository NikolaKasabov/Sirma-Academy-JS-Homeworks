class Laptop { 
  constructor(info, quality) {
    this.info = info;
    this.quality = Number(quality);
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    this.quality--;
  }

  turnOff() {
    this.isOn = false;
    this.quality--;
  }

  showInfo() {
    const json = JSON.stringify(this.info);
    return json;
  }

  get price() {
    const price = 800 - (Number(this.info.age) * 2) + (this.quality * 0.5);
    return price;
  }
}

let info = { producer: "Asus", age: 2, brand: "Zenbook" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
let info2 = { producer: "Lenovo", age: 1, brand: "Legion" };
let laptop2 = new Laptop(info2, 10);
laptop2.turnOn();
console.log(laptop2.showInfo());
laptop2.turnOff();
laptop2.turnOn();
laptop2.turnOff();
console.log(laptop2.isOn);

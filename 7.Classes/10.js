class List {
  elements = [];

  add(element) {
    this.elements.push(element);
  }

  remove(index) {
    if (index < 0 || index > (this.elements.length - 1)) {
      return;
    }
    this.elements.splice(index, 1);
  }

  get(index) {
    if (index < 0 || index > (this.elements.length - 1)) {
      return;
    }
    return this.elements[index];
  }

  get size() {
    return this.elements.length;
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

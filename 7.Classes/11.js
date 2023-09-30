class StringContainer { 
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  increase(value) {
    this.innerLength += value;
  }

  decrease(value) {
    this.innerLength -= value;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }

  toString() {
    let result = this.innerString.slice(0, this.innerLength);
    if (this.innerString.length > this.innerLength) {
      result += '...';
    }

    return result;
  }
}

let test = new StringContainer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

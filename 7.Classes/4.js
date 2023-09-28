class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(p1, p2) {
    const x = Math.max(p1.x, p2.x) - Math.min(p1.x, p2.x);
    const y = Math.max(p1.y, p2.y) - Math.min(p1.y, p2.y);
    const result = Math.sqrt(x * x + y * y);
    return result;
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

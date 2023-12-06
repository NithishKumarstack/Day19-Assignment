let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]


//function expression
const getRectArea = function (width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));
  // Expected output: 12
  
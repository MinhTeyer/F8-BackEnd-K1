// Bài tập về nhà
//Bài 1
var a = 2, b = 3;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);

// Bài 2
var S = (10 + 20 + 5) ^ (10 / 2);
console.log("Giá trị của biểu thức:", S);

// Bài 3
var a = 3,  b = 5, c = 7;
var max = a;
if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}
console.log("Số lớn nhất là:", max);

// Bài 4
var a = 4, b = 6;
if (a * b > 0) {
  console.log("Hai số cùng dấu");
} else if (a * b < 0) {
  console.log("Hai số khác dấu");
}

// Bài 5
var a = 7, b = 5, c = 3;

if (a > b) {
  [a, b] = [b, a]; // Hoán đổi giá trị của a và b
}

if (a > c) {
  [a, c] = [c, a]; // Hoán đổi giá trị của a và c
}

if (b > c) {
  [b, c] = [c, b]; // Hoán đổi giá trị của c và b
}

console.log("Thứ tự tăng dần:", a, b, c);

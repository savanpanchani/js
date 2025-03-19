// 1. Write a JavaScript program to find the area of a triangle.

function triangleArea (base,height) 
{
return 0.5 * base * height;
}

let base = 10;
let height = 8;
let area = triangleArea(base, height);

console.log(0.5 * base * height);

// triangleArea = 40



// 2. Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.

function celsiusToFahrenheit(celsius) {
let fahrenheit = (celsius * 9/5) + 32;
return fahrenheit;}
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);

// 25 degrees Celsius is equal to 77 degrees Fahrenheit.


    
// 3. Write a JavaScript program to find the area of a rectangle.

let a = 50, b = 80;
let areas;

area - a * b;

console.log("area of rectangle is:", area);

// the area of a rectangle is 40

// 4. Write a JavaScript program to find the area of a circle.

const radius = 10;
const pi = Math.PI;
const areaOfCircle = (radius, pi) => {
return pi * radius * radius;
};
console.log("The area of circle is:" + areaOfCircle(radius,pi));

// The area of circle is:314.1592653589793


// 5. wap to convert feet to inches.

let feet = 5 , inches;

inches = feet * 12;
console.log("INCHES IS : ",inches);
// output : INCHES IS 60.



// 6. wap to calculate given formulas.

// (i) a2 - b2 = (a - b)(a + b)
let a = 5 , b = 3;

formula1 = (a * a) - (b * b) === (a - b) * (a + b);
console.log(formula1);
// output : ANSWER OF FORMULA1 IS TRUE.

// (ii) (a-b)2 = a2 - 2ab + b2
let a = 5 , b = 3;

formula2 = (a - b) * (a - b) === (a * a) - 2 * (a * b) + (b * b);
console.log(formula2);
output : ANSWER OF FORMULA2 IS TRUE.

// (iii) (a+b+c)2 = a2 + b2 + c2 + 2ab + 2ac + 2bc
let a = 5 , b = 3 , c = 2;

formula3 = (a + b+ c) * (a + b+ c) === (a * a) + (b * b) + (c * c) + 2 * (a * b) + 2 * (a * c) + 2 * (b * c);
console.log(formula3);
output : ANSWER OF FORMULA3 IS TRUE.

// (iv) (a-b-c)2 = a2 + b2 + c2 - 2ab - 2ac + 2bc
let a = 5 , b = 3 , c = 2;

formula4 = (a - b - c) * (a - b - c) === (a * a) + (b * b) + (c * c) - 2 * (a * b) - 2 * (a * c) + 2 * (b * c);
console.log(formula4);
// output : ANSWER OF FORMULA4 IS TRUE.

// (v) (a-b)3 = a3 - 3a2b + 3ab2 - b3
let a = 5 , b = 3;

formula5 = (a - b) * (a - b) * (a - b) === (a) * (a) *(a) - 3 * (a) * (a) * (b) + 3 * (a * b) * (a * b) - (b) * (b) * (b);
console.log(formula5);
// output : ANSWER OF FORMULA5 IS FALSE.




// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when
//  call a function without argument at that time print message Good Morning.

// let n;
// function Greet(g){
//     if(g == null)
//     {
//         console.log("Good Morning");
//     }
//     else
//     {
//         console.log("Hello World");
//     }
// }
// Greet();

// output : Good Morning



// ===========================================================================================================



// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.

// let pi = 3.14;
// function CircleArea(r){

//     CircleArea = pi*r*r ;
//     return console.log("Circle area : ",CircleArea); 

// }
// CircleArea(14);

// output : Circle Area :  615.44



// ===========================================================================================================


// 3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return type with argument function.

// let l,h;
// function TriangleArea(l,h){

//     TriangleArea = (l * h)/ 2;
//     return console.log("Triangle area : ",TriangleArea); 

// }
// TriangleArea(10,6);

// output : Triangle Area : 30



// ===========================================================================================================



// 4. Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.

// let l,h;
// function RectangleArea(l,h){

//     RectangleArea = l * h;
//     return console.log("Rectangle area : ",RectangleArea); 

// }
// RectangleArea(12,8);

// output : Rectangle Area : 96



// ===========================================================================================================


// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

// let a,b,c;
// function Formula1(a,b,c){
//     Formula1 = ((b*b)*(4*a*c))/(2*a);
//     return console.log("Formula 1 Ans : ",Formula1);
// }

// Formula1(4,5,6);

// output : Formula 1 Ans :  300


// ===========================================================================================================


// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function

let a,b,c;
function Formula2(a,b,c){
    Formula2 = (a*a) + (2*a*b) + (b*b);
    return console.log("Formula 2 Ans : ",Formula2);
}

Formula2(5,6,7);

// output : Formula 2 Ans :  121



// ===========================================================================================================


// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function.

// function FehtoCelc(fahrenheit) {
//     let Celsius = (fahrenheit - 32) / 1.8;
//    return console.log("FehtoCelc Ans:", Celsius);
// }

// FehtoCelc(56);


// output : FehtoCelc Ans: 13.333333333333332



// ===========================================================================================================



// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f: (c*1.8)+32 ) using return type with argument function

// function Celctofeh(celcius) {
//     let Fahrenheit = (celcius * 1.8) + 32;
//     return console.log("Celctofeh ans:", Fahrenheit);
// }

// Celctofeh(53);

// output : Celctofeh Ans: 127.4



// ===========================================================================================================



// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using an argument with no return type.

// function Oddcheck(number){
//     if(number==0)
//     {
//         console.log("Given Number Is Zero");
//     }
//     else if(number % 2 == 0)
//     {
//         console.log("Given Number Is Even");
//     }
//     else
//     {
//         console.log("Given Number Is Odd");
//     }
// }

// Oddcheck(65);

// output : Given Number Is Odd


// ===========================================================================================================



// 10.Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type



// let a,b;
// function Swap(a,b) {
//     a = a + b;
//     b = a - b;
//     a = a - b;

//     console.log("A is : ",a)
//     console.log("B is : ",b)
// }

// Swap(15,25);

// output : A Is :  25
//          B Is :  15
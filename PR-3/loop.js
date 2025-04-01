// 1. Write a JAVASCRIPT Program to display the multiplication table of a given integer using a while loop.

// let n = prompt("Enter Any number = ");
// let i = 1; 

// while (i <= 10) {
//     console.log(n + " x " + i + " = " + (n * i)); 
//     i++; 
// }

// output :-("Enter 6 :-");
// 6 x 1 = 6
// 6 x 2 = 12
// 6 x 3 = 18
// 6 x 4 = 24
// 6 x 5 = 30
// 6 x 6 = 36
// 6 x 7 = 42
// 6 x 8 = 48
// 6 x 9 = 54
// 6 x 10 =60




// 2. Write a JAVASCRIPT Program to calculate the factorial of a given number using a while loop.

// let n = prompt("Enter Any number = ");
// let fact = 1;

// while(n >= 1)
// {
//     fact = fact * n;
//     n--;
// }
// console.log("Your Factorial is",fact);

// output :- (if you Enter 7 fact is :- 5040);





// 3. Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do while loop.


// let num =558, sum = 0, tempnum;

// do {
//   tempnum = num;
//   sum = 0;

//   while (tempnum > 0) {
//     let digit = tempnum % 10;
//     sum += digit ** 3;
//     tempnum = Math.floor(tempnum / 10);
//   }

//   num++;
// } while (num <= 999);

//   if (sum == num) {
//     console.log(num + " Is A Armstrong Number");
//   } else {
//     console.log(num + " Is Not A Armstrong Number");
//   }


// output :- 558 Is Not A Armstrong Number





// 4. Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while loop.


// let num = 15351;
// let original = num;
// let reverse= 0;

// while(num > 0){
//     let rem= num % 10
//     reverse= (reverse * 10) + rem;
//     num= Math.floor(num / 10)
// }
// if(original == reverse){
//     console.log(original + " is Palindrome number");
// }else{
//     console.log(original + " is Not Palindrome")
// }

// 5. Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using a while loop.

// let a=1,b=1,c;

// for(let i=1;i<=10; i++)
// {
//     c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }

// output : 2 3 5 8 13 21 34 55 89 144..





// 6. Write a JAVASCRIPT Program to add all the integers between O and 30 and display the total using do while loop.

// let sum = 0,i;

// for(i=1;i<=40;i++)
// {
//     sum = sum + i;
// }
// console.log("Your 0 to 30 sum is :",sum);

// output : Your 0 to 40 sum is : 820




// 7. Write a JAVASCRIPT Program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" using do while loop.


// let number = 1;

// do {
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (number % 3 === 0) {
//         console.log("Fizz");
//     } else if (number % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(number);
//     }
//     number++;
// } while (number <= 100);

// output : 
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// .
// .
// .
// .
// Buzz
// Fizz
// 97
// 98
// Fizz
// Buzz





// 8. Write a JAVASCRIPT Program that displays 1-2-3-4-5-6-7-8-9-10 on one line using a for loop.
// There will be no hyphen(-) at starting and ending position.

// let result = "";

// for (let i = 1; i <= 10; i++) {
//     result += i;
//     if (i < 10) {
//         result += "-"; 
//     }
// }

// console.log(result);

// output :1-2-3-4-5-6-7-8-9-10

// 9. Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using a for loop.


// let sum = 0;
// let result = "";

// for (let i = 1; i <= 10; i++) {
//     sum += i * i;
//     result += (i * i) + (i < 10 ? "+" : "");
// }

// console.log(result + " = " + sum);

// output : 1+4+9+16+25+36+49+64+81+100 = 385



// 10. Write a JAVASCRIPT Program that displays below pattern using nested for loop:

// let i,j;

// for ( i = 5; i >= 1; i--) {
//     let result = "";
//     for ( j = 5; j >= i; j--) {
//         result += j + " ";
//     }
//     console.log(result);
// }

// output :-
// 5
// 5 4 
// 5 4 3 
// 5 4 3 2 
// 5 4 3 2 1




// 11. Write a JAVASCRIPT Program that displays below pattern using nested for loop:

// let num = 1;

// for (let i = 1; i <= 5; i++) { 
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//         result += num + " ";
//         num++; 
//     }
//     console.log(result); 
// }

// output : 
// 1
// 2 3 
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15 

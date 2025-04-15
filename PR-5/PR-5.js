// 1 Write a simple JavaScript program to print expected Output using the following array.



// let random = ["Red", "Green", "White", "Black"];
// console.log(random.join(" , "));
// console.log(random.join(" + "));
// console.log(random.slice(0, 3).join(",  "));
// console.log(random.slice(0, 1).join("")); 
// console.log(random.slice(2, 4).join(" , ")); 
// console.log(random.slice().join(" , ") + " , Orange");






// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.

// let numbers = [6,4,16,36,2,8,36,18,95,25,56,65,30];

// let length = numbers.length;

// let sum=0 , i;

// Using for loop

// for(i=0;i<length;i++)
// {
//     sum += numbers[i];
// }

// console.log("Using For Loop Sum Of These Numbers Is : ",sum);

// output : Using for loop Sum of this numbers is : 397



//Using foreach loop

// sum = 0;

// numbers.forEach(number => {
//   sum += number;
// });

// console.log("Using Foreach Method Sum Of These Numbers Is : ", sum);

// output : Using foreach method Sum of these numbers is : 397





// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

// let num = [16,18,28,1,33,22,72,99,4,5];
// let max = num[0]; 

// for (let i = 1; i < num.length; i++) {
//     if (num[i] > max) {
//         max = num[i]; 
//     }
// }

// console.log("The Maximum Value In The Array Is:", max);

// // output : The maximum value is the array is : 99


// let min = num[0]; 

// for (let i = 1; i < num.length; i++) {
//     if (num[i] < min) {
//         min = num[i]; 
//     }
// }

// console.log("The Minimum Value In The Array Is:", min);

// output : The minimum value is the array is : 1






// 4.Write a JavaScript program to convert all array elements into ASCII values.

// let array = ["q","s","y","@"];

// for (let i = 0; i < array.length; i++) {
//   console.log("ASCII value of " + array[i] + " is " + array[i].charCodeAt(0));
// }

// ASCII value of q is 113
// ASCII value of s is 115
// ASCII value of y is 121
// ASCII value of @ is 64








// 5.Write a JavaScript program to remove negative values using the filter array function.


// let numbers = [-63,-99,63,-38,33,64,85,-58,19,-45];

// let positiveNumbers = numbers.filter((number) => number >= 0);
// console.log(positiveNumbers);

// output: [63, 33, 64, 85, 19]









// 6. Write a JavaScript program using array map() method and return the square of the array element.


// let array = [2,5,6,3,8,9];

// let squareArray = array.map((number) => number * number);

// console.log(squareArray);

// output: [4, 25, 36, 9, 64, 81]








// 7.Write a JavaScript program for sorting an array in ascending descending.
// numbers = 12,5, 0, 1, 5, 12, 19, 20];
// myColor = ["Red", "Green", "White", "Black"];



// let numbers = [12,0,1,5,12,19,20];
// let myColor = ["Red", "Green", "White", "Black","Pink","Blue"];

// let ascendingNumbers = numbers.sort((a, b) => a - b);
// console.log(ascendingNumbers);

// let descendingNumbers = numbers.sort((a, b) => b - a);
// console.log(descendingNumbers);

// let ascendingColor = myColor.sort();
// console.log(ascendingColor);

// let descendingColor = myColor.sort().reverse();
// console.log(descendingColor);

// output: [0, 1, 5, 12, 12, 19, 20]
// output: [20, 19, 12, 12, 5, 1, 0]

// output: ['Black', 'Blue', 'Green', 'Pink', 'Red', 'White']
// output: ['White', 'Red', 'Pink', 'Green', 'Blue', 'Black']








// 8. Write a JavaScript program which filters out any string which is less than 8 characters.
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];


// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];


// let filterWords = words.filter((word) => word.length >= 8);
// console.log(filterWords);

// output: ['Javascript']







// 9. write a JavaScript program to print expected output for the following string.


// let x = "oxoxoxox";
// let output = x.replace(/x/g, "X");
// console.log(output);

// let Y = "A New Java Book";
// let outputt = Y.toUpperCase().split(" ").join(" ");
// console.log(outputt);

// output: x = "oXoXoXoX"
// output: "A NEW JAVA BOOK"









// 10. write a JavaScript program for array reverse.

// let array = [55, 66, 77, 88, 99];

// let reverseArray = array.reverse();
// console.log(reverseArray);


// output: [99, 88, 77, 66, 55]








// 11. write a JavaScript program to check if a value is found or not?

// let array = [3, 4, 5, 6, 7 ,8]; 

// let checkValue = array.includes(6);
// console.log(checkValue);

// output: true





// 12. write a JavaScript program to print your name and write the number of total characters.


// let name = "Savan Panchani";

// let totalCharacter = name.length;
// console.log(totalCharacter);

// output: 17









// 13. write a JavaScript program given this output using replace concept.



// let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";


// let output = input.replace(/dog/g, "cat");
// console.log(output);


// output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"









// 14. write a JavaScript program convert string to array.



// let input = "Hire The Top 1% Freelance Developers";

// let output = input.split(" ");
// console.log(output);

// output: ["Hire", "The", "Top", "1%", "Freelance", "Developers"]








// 15. write a JavaScript program to convert an array to string.
// Input:- ['5', 32, 'Daniel'];
// Output: 5,32,Daniel

// let input = ['7', 18, 'Pruthvi','Savan'];

// let output = input.toString();
// console.log(output);

// output: 7,18,Pruthvi,Savan
// 1. Electricity Bill Calculation
console.log("1. Electricity Bill Calculation");

let unitsConsumed = 250, totalBill, surcharge, finalAmount;

if (unitsConsumed <= 50) {
    totalBill = unitsConsumed * 1;
    console.log("The Electricity Bill is:", totalBill, "Rs");
}
else if (unitsConsumed <= 150) {
    totalBill = ((unitsConsumed - 50) * 2) + (50 * 1);
    console.log("The Electricity Bill is:", totalBill, "Rs");
}
else if (unitsConsumed <= 250) {
    totalBill = ((unitsConsumed - 150) * 3) + (100 * 2) + (50 * 1);
    surcharge = totalBill * 0.2;
    finalAmount = totalBill + surcharge;

    console.log("The Electricity Bill is:", totalBill, "Rs");
    console.log("Surcharge:", surcharge, "Rs");
    console.log("The Final Amount To Pay Is:", finalAmount, "Rs");
}
else {
    totalBill = ((unitsConsumed - 250) * 4) + (100 * 3) + (100 * 2) + (50 * 1);
    surcharge = totalBill * 0.2;
    finalAmount = totalBill + surcharge;

    console.log("The Electricity Bill is:", totalBill, "Rs");
    console.log("Surcharge:", surcharge, "Rs");
    console.log("The Final Amount To Pay Is:", finalAmount, "Rs");
}

// Output: The electricity bill is: 550 Rs, Surcharge: 110 Rs, The final amount to pay is: 660 Rs


// 2. Season Based On Month (Using Switch)

console.log("2. Season Based On Month (Using Switch)");

let monthNumber = prompt("Enter the month number (1-12):");
console.log("You entered month:", monthNumber);

switch (monthNumber) {
    case "1":
        console.log("Winter");
        break;
    case "2":
        console.log("Winter");
        break;
    case "3":
        console.log("Winter");
        break;
    case "4":
        console.log("Winter");
        break;
    case "5":
        console.log("Summer");
        break;
    case "6":
        console.log("Summer");
        break;
    case "7":
        console.log("Summer");
        break;
    case "8":
        console.log("Summer");
        break;
    case "9":
        console.log("Monsoon");
        break;
    case "10":
        console.log("Monsoon");
        break;
    case "11":
        console.log("Monsoon");
        break;
    case "12":
        console.log("Monsoon");
        break;

    default:
        console.log("Invalid season");
        break;
}

// output : if input 3 : winter


// 3. Interest Calculation Based On Years

console.log("3. Interest Calculation Based On Years");


let principalAmount = prompt("Enter The principal Amount:");
let timeInYears = prompt("Enter The Number Of Years:");
let interestRate, totalInterest;

if (timeInYears > 3 && timeInYears <= 5) {
    interestRate = 3;
}
else if (timeInYears > 5 && timeInYears <= 8) {
    interestRate = 5;
}
else if (timeInYears > 8 && timeInYears <= 12) {
    interestRate = 12;
}
else {
    interestRate = 15;
}

totalInterest = (principalAmount * interestRate * timeInYears) / 100;
console.log("The total interest is:", totalInterest, "Rs");

// output : principal = 25000 ; time : 5 : rate : 5% == 3750



// 4. Voting Eligibility Check;

console.log("4. Voting Eligibility Check");


let userAge = prompt("Enter Your Age:");

if (userAge >= 18) {
    console.log("You Are Eligible To Vote.");
}
else if (userAge > 0 && userAge < 18) {
    console.log("You Are Not Eligible To Vote.");
}
else {
    console.log("Invalid Input For Age.");
}

// output : 20 : You Are Eligible To Vote.;



// 5. Clarify  Age Groups

console.log(" 5. Clarify Age Groups");


let enteredAge = prompt("Enter Your Age:");

if (enteredAge >= 0 && enteredAge <= 12) {
    console.log("You Are Clarify As A Child.");
}
else if (enteredAge > 12 && enteredAge <= 18) {
    console.log("You Are Clarify As A Teenager.");
}
else if (enteredAge > 18 && enteredAge <= 60) {
    console.log("You Are Clarify As A Adult.");
}
else if (enteredAge > 60) {
    console.log("You Are Clarify As A Senior Citizen.");
}
else {
    console.log("Invalid Age Input.");
}

// output : 18 : You Are Clarify As A Teenager.
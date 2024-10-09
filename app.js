


// Question#01 : Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
document.write("<h3>QUESTION : 01</h3>" )

let num = 3 ;
let num1 = 5 ;

let result = num + num1 ;

document.write("Sum of " +num+ "and " +num1+ " is " +result+ "<br> "); 

//<----------------------XXXX------------------------>


// Question#02 : Repeat task1 for subtraction, multiplication, division &
// modulus.

document.write("<h3>QUESTION : 02</h3>" )

//subtraction
num = 3 ;
num1 = 5 ;

result = num - num1 ;

document.write("Subtraction of " +num+ "and " +num1+ " is " +result+ "<br>"); 

//multiplication
num = 3 ;
num1 = 5 ;

result = num * num1 ;

document.write("multiplication of " +num+ "and " +num1+ " is " +result+ "<br>"); 

//division
num = 3 ;
num1 = 5 ;

result = num / num1 ;

document.write("multiplication of " +num+ "and " +num1+ " is " +result+ "<br>"); 

// modulus

num = 3 ;
num1 = 5 ;

result = num % num1 ;

document.write("modulus of " +num+ "and " +num1+ " is " +result+ "<br>"); 

//<----------------------XXXX------------------------>



// Question#03 :Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

document.write("<h3>QUESTION : 03</h3>" )

// a. Declare a variable
var number;

// b. Show the value of the variable after declaration
document.write("Value after variable declaration is: " + number+ "<br>");

// c. Initialize the variable with some number
number = 5;

// d. Show the initial value of the variable
document.write("Initial value: " + number+ "<br>");

// e. Increment the variable
number++;

// f. Show the value after increment
document.write("Value after increment is: " + number+ "<br>");

// g. Add 7 to the variable
number += 7;

// h. Show the value after addition
document.write("Value after addition is: " + number+ "<br>");

// i. Decrement the variable
number--;

// j. Show the value after decrement
document.write("Value after decrement is: " + number+ "<br>");

// k. Show the remainder after dividing the variable by 3
var remainder = number % 3;

// l. Output the remainder
document.write("The remainder is: " + remainder);

//<----------------------XXXX------------------------>

// Question#04 :  Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5
// tickets to a movie.

document.write("<h3>QUESTION : 04 </h3>" )

let ticket= 600 ; 
ticket= 600*5;

document.write("Total Cost to buy 5 tickets to a movie is " +ticket+"PKR" )


//Question#05 : Write a script to display multiplication table of any
// number in your browser.

//<----------------------XXXX------------------------>

document.write("<h3>QUESTION : 05 </h3>" )

document.write("<h5>TABLE OF 4 </h5>" )

var number = 4; 

        // Display the multiplication table using math expressions
        document.write(number + " x 1 = " + (number * 1) + "<br>");
        document.write(number + " x 2 = " + (number * 2) + "<br>");
        document.write(number + " x 3 = " + (number * 3) + "<br>");
        document.write(number + " x 4 = " + (number * 4) + "<br>");
        document.write(number + " x 5 = " + (number * 5) + "<br>");
        document.write(number + " x 6 = " + (number * 6) + "<br>");
        document.write(number + " x 7 = " + (number * 7) + "<br>");
        document.write(number + " x 8 = " + (number * 8) + "<br>");
        document.write(number + " x 9 = " + (number * 9) + "<br>");
        document.write(number + " x 10 = " + (number * 10) + "<br>");


//<----------------------XXXX------------------------>

// Question#06 : The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae: 
// °C= (°F-32)X5/9 
// °F=(°C X 9/5) +32

document.write("<h3>QUESTION : 06 </h3>" )
// a. Store a Celsius temperature (25°C) into a variable
var celsius = 25;

// b. Convert Celsius to Fahrenheit using the formula °F = (°C * 9/5) + 32
var fahrenheitFromCelsius = (celsius * 9/5) + 32;

// Output: "25°C is 77°F"
document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

// c. Store a Fahrenheit temperature (70°F) into a variable
var fahrenheit = 70;

// d. Convert Fahrenheit to Celsius using the formula °C = (°F - 32) * 5/9
var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;

// Output: "70°F is 21.11°C" (rounded to 2 decimal places)
document.write(fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C<br>");

//<----------------------XXXX------------------------>

//Question# 07 Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
   
document.write("<h3>QUESTION : 07 </h3>" )

 // a. Price of item 1
 var priceOfItem1 = 650;

 // b. Price of item 2
 var priceOfItem2 = 100;

 // c. Ordered quantity of item 1
 var quantityOfItem1 = 3;

 // d. Ordered quantity of item 2
 var quantityOfItem2 = 7;

 // e. Shipping charges
 var shippingCharges = 100;

 // Calculate the total cost of the order
 var totalCost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges;

        // Output the total cost and order summary
        document.write("<b>Shopping Cart</b><br>");
        document.write("Price of Item 1: " + priceOfItem1 + "<br>");
        document.write("Quantity of Item 1: " + quantityOfItem1 + "<br>");
        document.write("Price of Item 2: " + priceOfItem2 + "<br>");
        document.write("Quantity of Item 2: " + quantityOfItem2 + "<br>");
        document.write("Shipping Charges: " + shippingCharges + "<br>");
        document.write("<b>Total Cost: " + totalCost + "</b><br>");

//<----------------------XXXX------------------------>

//Question#08 : 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.write("<h3>QUESTION : 08 </h3>" )

document.write("<h2>Percentage Calculator</h2>");
// Store total marks and marks obtained by the student
var totalMarks = 980;      // Example total marks
var marksObtained = 804;   // Example marks obtained

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Show the result in the browser
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

//<----------------------XXXX------------------------>

//Question#09 : . Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h3>QUESTION : 09 </h3>" )

document.write("<h2>Currency Converter to Pakistani Rupees</h2>");

// Given amounts
var usDollars = 10;          // Amount in US Dollars
var saudiRiyals = 25;        // Amount in Saudi Riyals

// Exchange rates
var exchangeRateUSD = 104.80; // 1 US Dollar to Pakistani Rupee
var exchangeRateSAR = 28;     // 1 Saudi Riyal to Pakistani Rupee

// Total currency converted to Pakistani Rupees in a single expression
var totalPKR = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

// Output the total in Pakistani Rupees
document.write("Total in Pakistani Rupees: " + totalPKR.toFixed(2) + " PKR<br>");

//<----------------------XXXX------------------------>

//Question#10 :  Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write("<h3>QUESTION : 10 </h3>" )

document.write("<h2>Arithmetic Operations</h2>");

// Initialize a variable with some number
var initialNumber = 8; // You can change this number

// Perform arithmetic operations in a single expression
var result1 = ((initialNumber + 5) * 10) / 2;

// Output the result
document.write("Initial Number: " + initialNumber + "<br>");
document.write("Result after operations: " + result1 + "<br>");

//<----------------------XXXX------------------------>

//Question#11 : The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

document.write("<h3>QUESTION : 11 </h3>" );
document.write("<h2>Age Calculator</h2>");

// a. Store the current year in a variable
var currentYear = 2024; 

// b. Store their birth year in a variable
var birthYear = 1995; 

// c. Calculate their two possible ages
var currentAge = currentYear - birthYear; 
var ageNextBirthday = currentAge + 1;     

// Output the results
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Current Age: " + currentAge + " years<br>");
document.write("Age on Next Birthday: " + ageNextBirthday + " years<br>");

//<----------------------XXXX------------------------>

//Question#12 : The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h3>QUESTION : 12 </h3>" );
document.write("<h2>Geometrizer</h2>");

// a. Store a radius into a variable
var radius = 5; // You can change this value for different calculations

// b. Calculate the circumference based on the radius
var pi = 3.142; // Value of π
var circumference = 2 * pi * radius; // Circumference formula

// Output the circumference
document.write("The circumference is " + circumference + "<br>");

// Calculate the area based on the radius
var area = pi * (radius * radius); // Area formula

// Output the area
document.write("The area is " + area + "<br>");

//<----------------------XXXX------------------------>

//Question#13 : The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


document.write("<h3>QUESTION : 13 </h3>" );
document.write("<h2>The Lifetime Supply Calculator</h2>");

 // a. Store your favorite snack into a variable
 var favoriteSnack = "Chips"; // Change this to your favorite snack

 // b. Store your current age into a variable
 var currentAge = 25; // Change this to your current age

 // c. Store a maximum age into a variable
 var maxAge = 80; // Change this to your desired maximum age

 // d. Store an estimated amount per day (as a number)
 var estimatedAmountPerDay = 3; // Change this to the estimated amount of snack you eat per day

 // e. Calculate how many would you eat total for the rest of your life
 var yearsLeft = maxAge - currentAge; // Calculate years left to live
 var totalAmountNeeded = yearsLeft * 365 * estimatedAmountPerDay; // Calculate total amount needed

 // Output the result to the screen
 document.write("You will need " + totalAmountNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".<br>");
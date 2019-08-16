//Intro to Testing

//Software Testing: the process of executing a program application with the intent of finding software bugs
    //Testing protects against future problems, living documentation, forced you to think about if a user tries to abouse the software
//Different Test
    //Unit Testing=>Integrating Testing=>System Testing=>Acceptance Testing

//Unit Test: can test a single function
//Integration Test: Various pieces of code working together (many units at once), does the unit test still past when different functions are working together (3 functions)

//System Test: The process of testing an integrated system ti verify it meets specified requirements (if a bunch of functions combined together in order to work as one)

//Acceptance Test: Usses the product like the users would, evualating the compliance, does it meet the clients expectations fir userability.

//First I started with a simple 

                    var sum = function(a) {
                    
                        return a;
                    };
                    sum(1);

//Then I added different things to make the function bigger

                    var sum = function(a,b) {
                        if(a === 5 && b === 10) {
                        return a + b;
                        }
                    };
                    sum(5,10);

//Then I added a different sum to see if the function will past and it didnt, the reason was the if statement. I then commented out my

                var sum = function(a,b) {
                    if(a === 5 && b === 10) {
                    return " a + b, Great Job!"
                    } else {
                    return "Please enter 5 and 10 only."
                    }
                 };
                sum('hello', 'world');
                sum(5,10


// [Challenge 1] - Convert Inches to Meters

// Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

// Hint: 1 meter equals 39.3701 inches.

// Resluts 
// input               value  
// metersToInches(0);    0
// metersToInches(0);    39.37010
// metersToInches(0);    59.05515
// metersToInches(0);    614.17356


//The function that takes in a input of numbers (of meters)
//The function spits out the numbers given and converts them to inches

//Game plan
//Create a function that takes in integers
//Create a variable (with the conversion) to convert your numbers to inches
//return num * meters and it will give you younr answer
  //I leanred I did not need the variable, just drop the '39.3701' in the function

var meters = 1 * 39.3701;  

function metersToInches (num) {
    return num * meter;
    //return num * 39.3701;
  
  }
  metersToInches(0);
  metersToInches(1);
  metersToInches(1.5);
  metersToInches(15.6);		


//************************************************************************

// [Challenge 2] - Loop n Times

// Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.

//The function takes in an number
//The function spits out "Hello World" the number of times from the number entered 


//Game Plan
//Create a function names loopThrough
//Create a for loop
    //if [i] is less than or equal to num, add 1 to it each time
//console.log[i] to see if it worked
//I consoled.log("Hello World") and what ever number is being inputed, it will go through the FoorLoop and see if its true, then print out "Hello World" that many times through the loop

                function loopThrough (num) {
                    for(let i = 1; i <= num; i++) { 
                    //console.log(i);
                    console.log("Hello World");
                    }
                return num;
                } 
                loopThrough(0);
                loopThrough(1);
                loopThrough(3);	
                
                
// [Challenge 3] - Number sum
//  Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.
                
                    function calculateSum(num) {
                        var results = 0;
                        for (let i = 0; i <= num; i++) {
                        results += i;
                        }
                        return results;
                    }
                    calculateSum(10);  

//Function takes in a number
//function spits out the sum of the number given (5) = 1+2+3+4+5=15

//GamePlan
// create an empty array that equals 0
//create a for loop (if i lessthan or equal to the num given)
//take results += i
//each time the loop goes through it has a naumber and add's each time
                
                
// [Challenge 4] - FizzBuzz

// Write a function called fizzbuzz that prints each number from 1 to the input on a new line.

// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


function fizzBuzz (num) { 

        if (num === 0) {
          console.log ();
        }
  
        for(let i = 1; i <= num; i++) { 

         if (i % 5 === 0 && i % 3 === 0) {

            console.log("FizzBuzz");
          } else if (i % 5 === 0) {
            console.log("Buzz");
          } else if (i % 3 === 0) {
            console.log("Fizz");
          } 
          else { 
            console.log(i);
          }
        }
      } 
      fizzBuzz(0);
  
    // //check first if there is a number, if it not, it will not go through the function and return nothing
    // //Create a for Loop to check against the number
    // //Do you the FizzBuzz methods
    // //You want to start with FizzBuzz conditional first to because if you dont it will hit the first two first and retuen back
    // //no RETURN, console.log=print
   
    
// [Challenge 5] Calculate Factorial Number

// A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.

// For example, the value of 3 factorial, is 6, which can be calculated by:

  
function calculateFactorial(num) {
  var results = 1;
  for (let i = 1; i <= num; i++) {
    results *= i;
  }
  return results;
}
calculateFactorial(3); 


//Honestly I used the same code from Num Sum challenge and changed the operator to multiply
// Make sure you change the operating symbol and yout start numbers should not start at 0 because any number times (0) will always be 0



// [Challenge 6] Switch Statements

// Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.


function sleep_in(weekday, vacation) {

    switch(!weekday || vacation) {
      case true:
      return true;
      break;

      default:
      return false;
      
    }
}
sleep_in(false, false); // true no weekday, no vacation
sleep_in(true, false); // false a weekday, no vacation
sleep_in(false, true); // trueno weekday, yes vacation


//if its no weekday(weekend) or vacation = its true sleep in
//else false either way

// Challenge 7] Accessing Arrays

// Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

function common(a,b) {
    if( a[0] === b[0] || a[a.length-1] === b[b.length-1]) {
    return true
      } else {
        return false;
      }
    } 
    common([1, 2, 3], [7, 3]); 

//function takes in 2 integers
//functions spits out true or false

//Game Plan
//I first thought that I would enter in a ForLoop
//I was told if Im checking for the first or last number, I do not need a ForLoop
//Create an if statement to check a&b index[0]
  //also check a&b length '-1' to get the last index
//if either is true, then return true 
//if not return false



// [Challenge 9] Object Keys and Values

// Create an object with two key-value pairs.

var alicia = {
    hair: 'black',
    age: 37
  }
 
// Log that object to the console.

var alicia = {
    hair: 'black',
    age: 37
  }
  console.log(alicia);

// Delete the first key-value pair in the object.

var alicia = {
    hair: 'black',
    age: 37
  }
  delete alicia.hair;

// Log that object to the console again. The first key-value pair should be gone.

var alicia = {
    hair: 'black',
    age: 37
  }
  delete alicia.hair;
  console.log(alicia);

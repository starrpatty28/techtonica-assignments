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
                sum(5,10;)


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
                
                



